var scheduleData = null;

(async () => {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    const page = await chrome.tabs.sendMessage(tab.id, {page: "temp"});
    displayNames(page.classSchedule);
    scheduleData = page.classSchedule;
})();

const getRequest = (url) => {
    let res = {}
    const urls = [url]
    urls.forEach(async (url) => {
        const r = await chrome.runtime.sendMessage({url: url})
        res['body'] = r.page
    });
    return res
}

// Get course names from data scraped by content.js and populate selection
// populate HTML with courses + input checkbox elements
function displayNames(courses) {

    // Get rid of the loading text oncce we've generated the table of courses.
    const loading = document.getElementById("loading")
    loading.remove()

    let table = document.querySelector('.selection-table');

    // Get all the unique courses e.g. "CSE 403" not "CSE 403 A" & "CSE 403 AA"
    let coursesToDisplay = new Set(); 
    Object.keys(courses).forEach(courseTitle => {
        let course = courses[courseTitle];
        coursesToDisplay.add(course.course); 
    })

    coursesToDisplay.forEach(course => {            // "CSE 403"
        let course_id = course.replace(/\s+/g, '-') // "CSE-403"
        let id_schedule = course_id + "-schedule";
        let id_section = course_id + "-section"

        let row_html =  '<tr>' +
                        `    <th>${course}</th>` +
                        `    <th><input type="checkbox" id=${id_schedule} value="schedule"></th>` +
                        `    <th><input type="checkbox" id=${id_section} value="section" disabled></th>` +
                        '</tr>'

        table.innerHTML += row_html;
    })

    // Stretch goals. Commented out for Alpha Release. 
    // chrome.storage.local.get(['state']).then((result) => {
    //     document.getElementById("sections").checked = result["directions"]
    //     document.getElementById("map").checked = result["fun_facts"]
    // })

    // Set up button event listener
    document.getElementById("download").addEventListener("click", onDownloadClick);

    return table
}

// Travserse HTML checkbox input elements and populate selection accordingly
// to send to ics.js
function onDownloadClick() {
    // stores the courses the user has selected
    var selection = {
        schedule: [],
        sections: []
    }

    // Stretch goals. Commented out for Alpha Release. 
    let isMap = document.getElementById("map").checked

    // if (document.getElementById("savestate").checked) {
    //     chrome.storage.local.set({state: {
    //         "directions": isMap,
    //         "fun_facts": isSections
    //     }})
    // }
    // include sections?
    // if (isSections) {

    // }
    // include map?
    if (isMap) {

    }

    const inputs = document.getElementsByTagName("tr"); // returns an HTMLCollection, NOT an array

    for (let i = 1; i < inputs.length; i++) { // omit the table header (first element)
        let input = inputs[i];
        const cells = input.getElementsByTagName("th");

        const course = cells[0].innerHTML;
        const export_schedule = cells[1].getElementsByTagName("input")[0].checked;
        const export_sections = cells[2].getElementsByTagName("input")[0].checked;

        // Push course name to respective arrays based on if user checked the box
        if (export_schedule) selection.schedule = Object.values(scheduleData).filter((map) => (map["course"] == course))

        if (export_sections) {
            // TODO additional sections.
        };

    }

    if (selection.schedule.length == 0 && selection.sections.length == 0) {
        alert("No courses selected");
        return;
    }

    var icsFile = buildICS(selection);
    let ics = new Blob([icsFile], {type: "text/calendar"})
    chrome.downloads.download({
        url: URL.createObjectURL(ics),
        filename: "schedule.ics" // Optional
    });
}