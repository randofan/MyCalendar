/**
 * Helper function to generate table rows.
 * 
 * @param {*} course 
 * @returns 
 */
function generateTableRow(course, coursesToDisable) {
    let course_id = course.replace(/\s+/g, '-') // "CSE-403"
    let id_schedule = course_id + "-schedule"
    let id_section = course_id + "-section"
    let disabled = (coursesToDisable.has(course)) ? "disabled" : ""

    let row_html =  '<tr>' +
                    `    <th class="course-name">${course}</th>` +
                    `    <th><input type="checkbox" id=${id_schedule} value="schedule" ${disabled}></th>` +
                    `    <th><input type="checkbox" id=${id_section} value="section" ${disabled}></th>` +
                    '</tr>'
        
    return row_html
}

/**
 * Get the column associated with the quarter.
 * 
 * @param {*} quarter 
 * @returns 
 */
function getCol(quarter) {
    if (quarter == 'Autumn') return 1;
    else if (quarter == 'Winter') return 2;
    else if (quarter == 'Spring') return 3;
    else if (quarter == "Summer") return 4;
}

/**
 * Turns "Spring 2023" into "2022-2023"
 * 
 * @param {*} quarterYear 
 * @returns 
 */
function formatYear(quarterYear) {
    const info = quarterYear.split(' ')
    if (info[0] == "Autumn") {
        return `${info[1]}-${parseInt(info[1]) + 1}`
    }
    else {
        return `${parseInt(info[1]) - 1}-${info[1]}`
    }
}