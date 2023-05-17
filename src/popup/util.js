/**
 * Helper function to generate table rows.
 * 
 * @param {*} course 
 * @returns 
 */
function generateTableRow(course) {
    let course_id = course.replace(/\s+/g, '-') // "CSE-403"
    let id_schedule = course_id + "-schedule";
    let id_section = course_id + "-section"

    let row_html =  '<tr>' +
                    `    <th class="course-name">${course}</th>` +
                    `    <th><input type="checkbox" id=${id_schedule} value="schedule"></th>` +
                    `    <th><input type="checkbox" id=${id_section} value="section" disabled></th>` +
                    '</tr>'
        
    return row_html
}