const assert = require('assert');

describe('ICS Unit Tests', () => {
  const {convertDays, convertTime} = require('./src/popup/ics.js');
  it('test convertDays', () => {
    let registrationDays = "MWF";
    let answer = convertDays(registrationDays);
    assert.deepEqual(answer, "MO,WE,FR");

    registrationDays = "TTh";
    answer = convertDays(registrationDays);
    assert.deepEqual(answer, "TU,TH");
    
    registrationDays = "TThF";
    answer = convertDays(registrationDays);
    assert.deepEqual(answer, "TU,TH,FR");
  });
  
  it('test convertTime', () => {
    let registrationTime = "1030-1120";
    let answer = convertTime(registrationTime);
    assert.deepEqual(answer, ["103000", "112000"]);
    
    registrationTime = "1130-1220";
    answer = convertTime(registrationTime);
    assert.deepEqual(answer, ["113000", "122000"]);
    
    registrationTime = "1230- 120";
    answer = convertTime(registrationTime);
    assert.deepEqual(answer, ["123000", "132000"]);
    
    registrationTime = " 230- 320";
    answer = convertTime(registrationTime);
    assert.deepEqual(answer, ["143000", "152000"]);
    
    registrationTime = " 630- 720";
    answer = convertTime(registrationTime);
    assert.deepEqual(answer, ["183000", "192000"]);
  });
});

// describe('Export Unit Tests', () => {
//   const {generateTableRow} = require('./src/popup/export.js');
//   it('tests HTML for table row generator', () => {
//     let course = "CSE 403";
//     let id_schedule = "CSE-403-schedule";
//     let id_section = "CSE-403-section";

//     let expected_html = '<tr>' +
//                         `    <th class="course-name">${course}</th>` +
//                         `    <th><input type="checkbox" id=${id_schedule} value="schedule"></th>` +
//                         `    <th><input type="checkbox" id=${id_section} value="section" disabled></th>` +
//                         '</tr>'

//     let html = generateTableRow(course);
//     assert.deepEqual(html, expected_html);
//   });
// });