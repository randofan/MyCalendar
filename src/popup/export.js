var scheduleData = null;
var quarterYear = null;

/**
 * Get the class schedule from the content script.
 * Unable to unit test.
 */
(async () => {
    let fail = true
    while (fail) {
        try {
            const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
            const response = await chrome.tabs.sendMessage(tab.id, {page: "temp"});
            displayNames(response.classSchedule);
            scheduleData = response.classSchedule;
            quarterYear = response.classQuarter;
            fail = false
        }
        catch(e) {
            fail = true
        }
    }
})();

// Open the class schedule
document.getElementById("classSchedule").addEventListener("click", openClassSchedule);
function openClassSchedule() {
    chrome.tabs.create({ url: "https://sdb.admin.uw.edu/sisStudents/uwnetid/schedule.aspx"});
}

/**
 * Get course names from data scraped by content.js and populate selection
 * populate HTML with courses + input checkbox elements.
 * Unable to unit test.
 *
 * @param {*} courses
 * @returns
 */
function displayNames(courses) {
    // Get rid of the loading text oncce we've generated the table of courses.
    const loading = document.getElementById("loading")
    loading.remove()

    let table = document.querySelector('.selection-table');

    let coursesToDisplay = new Set(); // Get all the unique courses e.g. "CSE 403" not "CSE 403 A" & "CSE 403 AA"
    let coursesToDisable = new Set();  // Disable the checkbox if a course is still "to be arranged"
    Object.keys(courses).forEach(courseTitle => {
        let course = courses[courseTitle];
        let courseName = course.course;

        coursesToDisplay.add(courseName);
        if (course.days == "To be arranged") { coursesToDisable.add(courseName) }
    })

    // Add table rows.
    coursesToDisplay.forEach(course => table.innerHTML += generateTableRow(course, coursesToDisable))

    // Save if the client wants to save directions.
    chrome.storage.local.get('directions', result => {
        document.getElementById("map").checked = result.directions
        document.getElementById("savestate").checked = result.directions
    })

    // Set up button event listener
    document.getElementById("download").addEventListener("click", onDownloadClick);

    return table
}


/**
 * Traverse HTML checkbox input elements and populate selection accordingly
 * to send to buildICS().
 * Unable to unit test.
 *
 * @returns
 */
async function onDownloadClick() {
    // stores the courses the user has selected
    var selection = {
        schedule: [],
        sections: []
    }

    let isMap = document.getElementById("map").checked

    if (document.getElementById("savestate").checked) {
        chrome.storage.local.set({directions: isMap})
    }

    const inputs = document.getElementsByTagName("tr"); // returns an HTMLCollection, NOT an array

    for (let i = 1; i < inputs.length; i++) { // omit the table header (first element)
        let input = inputs[i];
        const cells = input.getElementsByTagName("th");

        const course = cells[0].innerHTML;
        const export_schedule = cells[1].getElementsByTagName("input")[0].checked;
        const export_sections = cells[2].getElementsByTagName("input")[0].checked;


        // Push course name to respective arrays based on if user checked the box
        if (export_schedule) {
            Object.keys(scheduleData).forEach(courseTitle => {
                let courseMap = scheduleData[courseTitle];
                if (courseMap.course == course) {
                    selection.schedule.push(courseMap);
                }
            })
        };

        if (export_sections) {
            Object.keys(scheduleData).forEach(courseTitle => {
                let courseMap = scheduleData[courseTitle];
                if (courseMap.course == course) {
                    selection.sections.push(courseMap);
                }
            })
        };

    }

    if (selection.schedule.length == 0 && selection.sections.length == 0) {
        alert("No courses selected");
        return;
    }

    const split = quarterYear.split(" ")
    const info = await getDatesAndHolidays(formatYear(quarterYear), split[0])

    if (selection.schedule.length != 0) {
        const mainFile = buildICS(selection.schedule, info, isMap);
        let main = new Blob([mainFile], {type: "text/calendar"})
        chrome.downloads.download({
            url: URL.createObjectURL(main),
            filename: "schedule.ics"
        });
    }

    if (selection.sections.length != 0) {
        if (Object.keys(selection.sections).length != 0) {
            const sections = await getSections(selection.sections, quarterYear)
            const sectionFile = buildICS(sections, info, isMap)
            let section = new Blob([sectionFile], {type: "text/calendar"})
            chrome.downloads.download({
                url: URL.createObjectURL(section),
                filename: "sections.ics"
            });
        }
    }
}

/**
 * Get a list of sections formatted. See buildICS for the required format of sections.
 *
 * @param {*} selection
 * @param {*} quarterYear
 */
async function getSections(val, quarterYear) {
    let sects = [];
    // get the quarter and year of the schedule we are parsing
    let quart = quarterYear.split(" ")[0];
    let year = quarterYear.split(" ")[1];

    for (var i = 0; i< val.length; i++){
        // extract the specific course we want sections for
        let course = val[i];
        let name = course["course"].trim();
        name = name.substring(0, name.lastIndexOf(" ")).replace(/&nbsp;/g, ' ');

        // get the url link given department for the sections/time schedule
        // and access the page to parse information
        let ur = getLink(name, quart, year);
        const body = await chrome.runtime.sendMessage({url: ur});
        const doc = new DOMParser().parseFromString(body.page, 'text/html')

        // get sections object for all the different sections of a given class
        let sect = getsln(course, doc);

        for(var j = 0; j< sect.length;j++ ){
            sects.push(sect[j]);
        }
    }
    // return list of section objects
    return sects;
}

/**
 * Get the start/end dates and holidays for the academic quarter.
 * Unable to unit test.
 *
 * @param {*} year formatted as "2022-2023"
 * @param {*} quarter formatted as "Spring", "Winter", "Autumn"
 * @returns return type is below:
 * {
    "dates": {
        "start": "Sep 23, 2022",
        "end": "Dec 23, 2022"
    }
    "holidays": ["Dec 25, 2022", "Mar 15, 2022"]
    }
*/
async function getDatesAndHolidays(year, quarter) {
    let ret = {}
    let formatYr = year.split('-').map(str => str.slice(2)).join('');
    const body = await chrome.runtime.sendMessage({url: `https://www.washington.edu/students/reg/${formatYr}cal.html`});
    const doc = new DOMParser().parseFromString(body.page, 'text/html')
    const col = getCol(quarter)

    // Get Dates
    const dates = doc.getElementById("SUMFE").getElementsByTagName("tr")
    const qStart = dates[2].getElementsByTagName("td")[col].innerHTML
    const qEnd = dates[3].getElementsByTagName("td")[col].innerHTML

    ret["dates"] = {
        "start": qStart,
        "end": qEnd
    }

    // Get Holidays
    ret["holidays"] = []

    const trs = doc.getElementsByTagName("table")[1].getElementsByTagName("tr")
    for (let i = 2; i < trs.length; i++) {
        let row = trs[i];
        const cells = row.getElementsByTagName("td");
        const holiday = cells[col]
        if (holiday.innerHTML != "") {

            const day = holiday.innerHTML.split('<br>')[1].trim()
            ret["holidays"].push(day)
        }
    }
    return ret
}