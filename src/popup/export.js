// var selection = {
//     // fields are hardcoded for sake of example
//     schedule: ["CSE 403", "CSE 340"],
//     sections: ["CSE 340"]
// }
var selection = {
    schedule: [],
    sections: []
}

var courses;

// get course names from data scraped by content.js and populate selection
// populate HTML with courses + input checkbox elements
function displayNames() {
    // TODO: populate courses from content.js. gi
    courses = ["CSE 403", "CSE 340", "HCDE 318"];

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
}

// travserse HTML checkbox input elements and populate selection accordingly
// to send to ics.js
function onDownloadClick() {

}

