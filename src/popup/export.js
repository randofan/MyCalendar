var scheduleData = null;

(async () => {
    let fail = true
    while (fail) {
        try {
            const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
            const response = await chrome.tabs.sendMessage(tab.id, {});
            displayNames(response.classSchedule);
            // displayNames(Object.keys(response.classSchedule));
            scheduleData = response.classSchedule;
            fail = false
        }
        catch(e) {
            // console.log(e)
            fail = true
        }
    }
})();

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
                        `    <th><input type="checkbox" id=${id_section} value="section"></th>` +
                        '</tr>'

        table.innerHTML += row_html;
    })
    // for (let i = 0; i < courses.length; i++) {
    //     let course = courses[i];                        // "CSE 403"
    //     let course_id = course.replace(/\s+/g, '-') // "CSE-403"
    //     let id_schedule = course_id + "-schedule";
    //     let id_section = course_id + "-section"

    //     let row_html =  '<tr>' +
    //                     `    <th>${course}</th>` +
    //                     `    <th><input type="checkbox" id=${id_schedule} value="schedule"></th>` +
    //                     `    <th><input type="checkbox" id=${id_section} value="section"></th>` +
    //                     '</tr>'

    //     table.innerHTML += row_html;
    // }

    chrome.storage.local.get(['state']).then((result) => {
        document.getElementById("sections").checked = result["directions"]
        document.getElementById("map").checked = result["fun_facts"]
    })

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

    let isSections = document.getElementById("sections").checked
    let isMap = document.getElementById("map").checked

    if (document.getElementById("savestate").checked) {
        chrome.storage.local.set({state: {
            "directions": isMap,
            "fun_facts": isSections
        }})
    }

    // include sections?
    if (isSections) {

    }
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

    var icsFile = buildICS(selection);
    let ics = new Blob([icsFile], {type: "text/calendar"})
    chrome.downloads.download({
        url: URL.createObjectURL(ics),
        filename: "schedule.ics" // Optional
    });
}