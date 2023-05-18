const {convertDays, convertTime, getFirstDay, getFirstDayOfMultiple, dateToICS, ICSToDate, daysToNumbers} = require('./src/popup/ics.js');
const { generateTableRow } = require('./src/popup/util.js');
const assert = require('assert');

describe('ICS Unit Tests', () => {
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

  it('test daysToNumbers', () => {
    let registrationDays = "MTW";
    let answer = daysToNumbers(registrationDays);
    assert.deepEqual(answer, [1, 2, 3]);

    registrationDays = "MWF";
    answer = daysToNumbers(registrationDays);
    assert.deepEqual(answer, [1, 3, 5]);

    registrationDays = "TTh";
    answer = daysToNumbers(registrationDays);
    assert.deepEqual(answer, [2, 4]);

    registrationDays = "TThF";
    answer = daysToNumbers(registrationDays);
    assert.deepEqual(answer, [2, 4, 5]);
  });

  it('test getFirstDay', () => {
    let ICSDate = "20230516";
    let dow = 2;
    let answer = getFirstDay(ICSDate, dow);
    assert.deepEqual(answer, "20230516");

    ICSDate = "20230516";
    dow = 3;
    answer = getFirstDay(ICSDate, dow);
    assert.deepEqual(answer, "20230517");

    ICSDate = "20230516";
    dow = 1;
    answer = getFirstDay(ICSDate, dow);
    assert.deepEqual(answer, "20230522");

    ICSDate = "20230529";
    dow = 4;
    answer = getFirstDay(ICSDate, dow);
    assert.deepEqual(answer, "20230601");
  });

  it('test getFirstDayOfMultiple', () => {
    let ICSDate = "20230516";
    let dow = [2, 4];
    let answer = getFirstDayOfMultiple(ICSDate, dow);
    assert.deepEqual(answer, "20230516");

    ICSDate = "20230516";
    dow = [2, 1];
    answer = getFirstDayOfMultiple(ICSDate, dow);
    assert.deepEqual(answer, "20230516");

    ICSDate = "20230516";
    dow = [0, 1, 2, 3, 4, 5, 6];
    answer = getFirstDayOfMultiple(ICSDate, dow);
    assert.deepEqual(answer, "20230516");

    ICSDate = "20230516";
    dow = [3, 5];
    answer = getFirstDayOfMultiple(ICSDate, dow);
    assert.deepEqual(answer, "20230517");
  });

  it('test DateToICS', () => {
    let date = new Date(2023, 4, 16);
    console.log(date.toISOString());
    let answer = dateToICS(date);
    assert.deepEqual(answer, "20230516");

    date = new Date(2023, 4, 30);
    answer = dateToICS(date);
    assert.deepEqual(answer, "20230530");

    date = new Date(2023, 11, 31);
    answer = dateToICS(date);
    assert.deepEqual(answer, "20231231");
  });

  it('test ICSToDate', () => {
    let date = "20230516";
    let answer = ICSToDate(date);
    assert.deepEqual(answer, new Date(2023, 4, 16, 0));

    date = "20230530";
    answer = ICSToDate(date);
    assert.deepEqual(answer, new Date(2023, 4, 30, 0));

    date = "20231231";
    answer = ICSToDate(date);
    assert.deepEqual(answer, new Date(2023, 11, 31, 0));
});


describe('Export Unit Tests', () => {
  it('tests HTML for table row generator', () => {
    let course = "CSE 403";
    let id_schedule = "CSE-403-schedule";
    let id_section = "CSE-403-section";

    let expected_html = '<tr>' +
                        `    <th class="course-name">${course}</th>` +
                        `    <th><input type="checkbox" id=${id_schedule} value="schedule"></th>` +
                        `    <th><input type="checkbox" id=${id_section} value="section" disabled></th>` +
                        '</tr>'

    let html = generateTableRow(course);
    assert.deepEqual(html, expected_html);
  });
});