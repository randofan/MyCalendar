// Set up button event listeners
document.getElementById("download").addEventListener("click", onDownloadClick);


(async () => {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    const response = await chrome.tabs.sendMessage(tab.id, {});
    displayNames(Object.keys(response.classSchedule));
  })();

// TODO everything below is just how to save settings on the settings page idk where we want to put it in the end
// document.getElementById("settings").addEventListener("click", saveState);

// function saveState() {
//     chrome.storage.local.set({state: {
//         "directions": "",
//         "fun_facts": ""
//     }})
// }


// Get course names from data scraped by content.js and populate selection
// populate HTML with courses + input checkbox elements
function displayNames(courses) {
    // TEMPORARILY HARD CODED
    // courses = ["CSE 403", "CSE 340", "HCDE 318"];

    // Get rid of the loading text oncce we've generated the table of courses.
    const loading = document.getElementById("loading")
    loading.remove()

    let table = document.querySelector('.selection-table');
    
    for (let i = 0; i < courses.length; i++) {
        let course = courses[i];                        // "CSE 403"
        let course_id = courses[i].replace(/\s+/g, '-') // "CSE-403"
        let id_schedule = course_id + "-schedule";
        let id_section = course_id + "-section"

        let row_html =  '<tr>' +
                        `    <th>${course}</th>` +
                        `    <th><input type="checkbox" id=${id_schedule} value="schedule"></th>` +
                        `    <th><input type="checkbox" id=${id_section} value="section"></th>` +
                        '</tr>'

        table.innerHTML += row_html;
    }

    return table
}

// Travserse HTML checkbox input elements and populate selection accordingly
// to send to ics.js
function onDownloadClick() {
    // stores the courses the user has selected
    // var selection = {
    //     schedule: [],
    //     sections: []
    // }

    // const inputs = document.getElementsByTagName("tr"); // returns an HTMLCollection, NOT an array

    // for (let i = 1; i < inputs.length; i++) { // omit the table header (first element)
    //     let input = inputs[i];
    //     const cells = input.getElementsByTagName("th");

    //     const course = cells[0].innerHTML;
    //     const export_schedule = cells[1].getElementsByTagName("input")[0].checked;
    //     const export_sections = cells[2].getElementsByTagName("input")[0].checked;

    //     // Push course name to respective arrays based on if user checked the box
    //     if (export_schedule) { selection.schedule.push(course); };
    //     if (export_sections) { selection.sections.push(course); };

    //     var icsFile = buildICS(selection);
        

    // }

    // TODO icsFile needs to be a string representation of input
    let ics = new Blob([icsFile], {type: "text/calendar"})
    chrome.downloads.download({
        url: URL.createObjectURL(ics),
        filename: "schedule.ics" // Optional
        });
}