const { convertDays, convertTime, getFirstDay, getFirstDayOfMultiple, dateToICS, ICSToDate, daysToNumbers } = require('./src/popup/ics.js');
const { generateTableRow, getCol, formatYear } = require('./src/popup/util.js');
const { getClassSchedule, getQuarter } = require('./src/scripts/dom_scraper.js');
const { getLink } = require('./src/popup/course_map.js')
const assert = require('assert');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

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
});

describe('Export Unit Tests', () => {
  it('tests HTML table row generator', () => {
    let course = "CSE 403";
    let id_schedule = "CSE-403-schedule";
    let id_section = "CSE-403-section";

    let expected_html = '<tr>' +
      `    <th class="course-name">${course}</th>` +
      `    <th><input type="checkbox" id=${id_schedule} value="schedule" ></th>` +
      `    <th><input type="checkbox" id=${id_section} value="section" ></th>` +
      '</tr>'

    let html = generateTableRow(course, new Set());
    assert.deepEqual(html, expected_html);
  });

  it('tests HTML table row generator disables course', () => {
    let course = "CSE 403";
    let coursesToDisable = new Set();
    coursesToDisable.add(course);

    let id_schedule = "CSE-403-schedule";
    let id_section = "CSE-403-section";

    let expected_html = '<tr>' +
      `    <th class="course-name">${course}</th>` +
      `    <th><input type="checkbox" id=${id_schedule} value="schedule" disabled></th>` +
      `    <th><input type="checkbox" id=${id_section} value="section" disabled></th>` +
      '</tr>'

    let html = generateTableRow(course, coursesToDisable);
    assert.deepEqual(html, expected_html);
  });
});

describe('Section Map Unit Tests', () => {
  it('tests to see correct URl is returned', () => {
    let course = "CSE";
    let quart = "Spring"
    let year = "2023";

    let expected_url = "https://www.washington.edu/students/timeschd/SPR2023/cse.html";

    let urla = getLink(course, quart, year);
    assert.deepEqual(urla, expected_url);
  });
});

describe('Content Script Tests', () => {

  before(async function () {
    let dom = await JSDOM.fromFile('ClassSchedule.html');
    global.window = dom.window;
    global.document = dom.window.document;
  });

  it('tests getQuarter', () => {
    const quarter = getQuarter();
    const expected = "Spring 2023"

    assert.strictEqual(quarter, expected);
  });

  it('tests getClassSchedule scrapes the DOM correctly', () => {
    let courseMap = getClassSchedule();

    const expected = {
      'CSE 403 A': {
        sln: '12892',
        course: 'CSE 403',
        title: 'CSE 403 A',
        type: 'LC',
        name: 'SOFTWARE ENGINEERING',
        days: 'MWF',
        time: '1230-120',
        location: 'CSE2 G10',
        prof: 'Oliveira,Nigini',
        link: 'http://www.washington.edu/students/maps/map.cgi?CSE2'
      },
      'CSE 403 AA': {
        sln: '12893',
        course: 'CSE 403',
        title: 'CSE 403 AA',
        type: 'QZ',
        name: 'SOFTWARE ENGINEERING',
        days: 'TTh',
        time: '130-220',
        location: 'CSE2 G10',
        prof: '',
        link: 'http://www.washington.edu/students/maps/map.cgi?CSE2'
      },
      'CSE 452 A': {
        sln: '12962',
        course: 'CSE 452',
        title: 'CSE 452 A',
        type: 'LC',
        name: 'DISTRIBUTED SYSTEMS',
        days: 'MWF',
        time: '1130-1220',
        location: 'KNE 220',
        prof: 'Anderson,Thomas',
        link: 'http://www.washington.edu/students/maps/map.cgi?KNE'
      },
      'CSE 452 AF': {
        sln: '12968',
        course: 'CSE 452',
        title: 'CSE 452 AF',
        type: 'QZ',
        name: 'DISTRIBUTED SYSTEMS',
        days: 'Th',
        time: '930-1020',
        location: 'MLR 316',
        prof: 'Goncharenko,Anna Dmitrievna',
        link: 'http://www.washington.edu/students/maps/map.cgi?MLR'
      },
      "CSE 498 A": {
        sln: "13017",
        course: "CSE 498",
        title: "CSE 498 A",
        type: "IS",
        name: "UNDERGRAD RESEARCH",
        days: "To be arranged",
        time: null,
        location: null,
        prof: null,
        link: null
      }
    }

    assert.deepEqual(courseMap, expected);
  });
});

describe('getCol', () => {
  it('should return 1 for Autumn', () => {
    const result = getCol('Autumn');
    assert.strictEqual(result, 1);
  });

  it('should return 2 for Winter', () => {
    const result = getCol('Winter');
    assert.strictEqual(result, 2);
  });

  it('should return 3 for Spring', () => {
    const result = getCol('Spring');
    assert.strictEqual(result, 3);
  });

  it('should return 4 for Summer', () => {
    const result = getCol('Summer');
    assert.strictEqual(result, 4);
  });
});

describe('formatYear', () => {
  it('should return "2022-2023" for "Spring 2023"', () => {
    const result = formatYear('Spring 2023');
    assert.strictEqual(result, '2022-2023');
  });

  it('should return "2022-2023" for "Autumn 2022"', () => {
    const result = formatYear('Autumn 2022');
    assert.strictEqual(result, '2022-2023');
  });

  it('should return "2020-2021" for "Winter 2021"', () => {
    const result = formatYear('Winter 2021');
    assert.strictEqual(result, '2020-2021');
  });

  it('should return "2019-2020" for "Summer 2020"', () => {
    const result = formatYear('Summer 2020');
    assert.strictEqual(result, '2019-2020');
  });
});
