// Builds a .ics file from a passed in calendar object

const firstDayOfInstruction = DateToICS(new Date()); // ICS style, get from content.js
const lastDayOfInstuction = 20230603; // ICS style, get from content.js
const registrationToICSDays = new Map([["M", "MO"], ["T", "TU"], ["W", "WE"], ["Th", "TH"], ["F", "FR"]]);
const holidayArray = []; // ICS style, get from content.js

function buildICS(scheduleData) {
    const map = scheduleData;

    let file = "";
    file += "BEGIN:VCALENDAR\n"; // start calendar object
    file += "BEGIN:VTIMEZONE\n" +
        "TZID:America/Los_Angeles\n" +
        "BEGIN:DAYLIGHT\n" +
        "DTSTART:20230312T020000\n" +
        "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU\n" +
        "TZOFFSETFROM:-0800\n" +
        "TZOFFSETTO:-0700\n" +
        "TZNAME:PDT\n" +
        "END:DAYLIGHT\n" +
        "BEGIN:STANDARD\n" +
        "DTSTART:20231105T020000\n" +
        "RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU\n" +
        "TZOFFSETFROM:-0700\n" +
        "TZOFFSETTO:-0800\n" +
        "TZNAME:PST\n" +
        "END:STANDARD\n" +
        "END:VTIMEZONE\n"; // add time zone data


    let startDates = [firstDayOfInstruction].concat(holidayArray);
    let endDates = holidayArray.concat([lastDayOfInstuction]);

    map.schedule.forEach(en => { // for each class
        for (let i = 0; i < startDates.length; i++) { // for each block of classes between holidays and start/end of quarter
            let times = convertTime(en.time);
            let dows = daysToNumbers(en.days);
            file += "BEGIN:VEVENT\n";
            file += "UID:" + makeUID(en) + "\n";
            file += "SUMMARY:" + en.title.replaceAll("&nbsp;", " ") + "\n";
            file += "DTSTAMP:" + getFirstDayOfMultiple(startDates[i], dows) + "T" + times[0] + "\n";
            file += "DTSTART:" + getFirstDayOfMultiple(startDates[i], dows) + "T" + times[0] + "\n"; // change for holiday
            file += "DTEND:" + getFirstDayOfMultiple(startDates[i], dows) + "T" + times[1] + "\n"; // change for holiday
            file += "RRULE:FREQ=WEEKLY;BYDAY=" + convertDays(en.days) + ";UNTIL=" + endDates[i] + "\n"; // change for holiday
            file += "LOCATION:" + en.location + "\n";
            file += "END:VEVENT\n";
        }
    })
    file += "END:VCALENDAR\n";
    return file;
}

// converts from the days on the registration page to ICS days
function convertDays(registrationDays) {
    let dayChars = registrationDays.split("");
    for (let i = 0; i < dayChars.length - 1; i++) { // consolidate Th
        if (dayChars[i] === "T" && dayChars[i + 1] === "h") {
            dayChars[i] = "Th";
            dayChars.splice(i + 1, 1); // take out extra h
        }
    }
    let icsDays = [];
    for (let i = 0; i < dayChars.length; i++) {
       icsDays.push(registrationToICSDays.get(dayChars[i]));
    }
    return icsDays.join(",");
}

// takes in registrationDays, gives array of days converted to numbers
function daysToNumbers(registrationDays) {
    const dayToNumber = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    let ICSDays = convertDays(registrationDays);
    let daysArray = ICSDays.split(",");
    let nums = [];
    for (let i = 0; i < daysArray.length; i++) {
        nums[i] = dayToNumber.indexOf(daysArray[i]);
    }
    return nums;
}

// converts from the time on the registration page to ICS format time
function convertTime(registrationTime) {
    let startTime = registrationTime.split("-")[0];
    let endTime = registrationTime.split("-")[1];
    if (startTime.length === 3) {
        startTime = "0" + startTime;
    }
    if (endTime.length === 3) {
        endTime = "0" + endTime;
    }
    if (startTime < "0830") { // account for evening and afternoon classes in 12hr time
        startTime = Number(startTime) + 1200;
    }
    if (endTime < "0920") {
        endTime = Number(endTime) + 1200;
    }
    startTime = String(startTime) + "00";
    endTime = String(endTime) + "00";
    return [startTime, endTime];
}

// returns the first date, in ICS style (YYYYMMDD), on or after the given
// date, that falls on the given day of the week (a number 0-6 inc., where 0 is sunday)
// date must be in ICS style (YYYYMMDD)
function getFirstDay(ICSDate, dow) {
    let firstDate = ICSToDate(ICSDate);// calculate all dates inside the method in Z
    firstDate.setHours(12);
    firstDate.setMinutes(0);
    firstDate.setSeconds(0);
    firstDate.setMilliseconds(0);
    let firstDOW = firstDate.getDay();
    if (dow === firstDOW) {
        return DateToICS(firstDate);
    }
    let classDate = firstDate;
    let millisecondDistance = ((dow - firstDate.getDay() + 7) % 7) * 24 * 60 * 60 * 1000;
    classDate.setTime(classDate.getTime() + millisecondDistance); // increment to the right day
    return DateToICS(classDate); // convert ISO date to ICS date
}

// gets the first date after the given date that falls on one of the passed days of the week
// takes a date in ICS style and an array of days of the week as numbers
function getFirstDayOfMultiple(ICSDate, dows) {
    let dates = [];
    for (let i = 0; i < dows.length; i++) {
        dates[i] = getFirstDay(ICSDate, dows[i]);
    }
    dates = dates.sort();
    return dates[0];
}

function DateToICS(JSDate) {
    return JSDate.toISOString().substring(0,10).replaceAll("-", "");
}

function ICSToDate(ICSDate) {
    return new Date(ICSDate.substring(0,4) + "-" + ICSDate.substring(4, 6) + "-" + ICSDate.substring(6, 8));
}

// rudimentary hash function for classes
function makeUID(event) {
    let UID = convertTime(event.time)[0];
    UID += "-";
    let hash = convertTime(event.time)[0] + (convertTime(event.time)[1] * 32) + event.title.length * 32**2;
    UID += hash;
    UID += "@example.com";
    return UID;
}

// year: format as follows. ex. 2022-2023 = 2233
function getDatesAndHolidays(year, quarter) {
    let ret = {}
    const dom = getRequest("https://www.washington.edu/students/reg/2223cal.html/*")["body"]

    // Get Dates
    let col = getCol(quarter)

    // Get Holidays

    return ret
}

function getCol(quarter) {
    if (quarter == 'Autumn') return 0;
    else if (quarter == 'Winter') return 1;
    else if (quarter == 'Summer') return 2;
    else if (quarter == "Full-term") return 3;
    else if (quarter == "A-term") return 4; // TODO what is right format for this?
    else if (quarter == "B-term") return 5;
}