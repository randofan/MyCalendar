// Builds a .ics file from a passed in calendar object

const firstDayOfInstruction = DateToICS(new Date()); // ICS style, get from content.js
const lastDayOfInstuction = 20230603; // ICS style, get from content.js
const registrationToICSDays = new Map([["M", "MO"], ["T", "TU"], ["W", "WE"], ["Th", "TH"], ["F", "FR"]]);
const holidayArray = []; // ICS style, get from content.js

/**
 * builds an ICS file using the passed class data and yearQuarter
 * @param scheduleData an array of class objects
 * @param yearQuarter a string indicating what quarter and year it is
 * @param includeLink a boolean indicating whether or not to include directions to class
 * @returns {string} a string containing an entire ICS file, built using the options above
 */
function buildICS(scheduleData, yearQuarter, includeLink) { // yearQuarter is in the form of "Spring 2023"
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
            if (includeLink) {
                file += "DESCRIPTION:" + en.link + "\n";
            }
            file += "END:VEVENT\n";
        }
    })
    file += "END:VCALENDAR\n";
    return file;
}

/**
 * converts from registration days to ICS style days
 * @param registrationDays the string taken from the registration page
 * @returns {string} the string of the same days in ICS format
 */
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

/**
 * converts from registration-style days to numbers 0-6, where 0 is sunday
 * @param registrationDays the array of registration days
 * @returns {*[]} the array of days as numbers
 */
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

/**
 * converts from time formatted on the registration page to ICS style time
 * NOTE: assumes all times happen between 0830 and 2030. The registration page
 * does not include am/pm, so we have to restrict ourselves to a 12-hr block of the day
 * @param registrationTime a string representing the contents of the time block on the registration page
 * @returns {string[]} an array of two elements containing the converted start and end time of the class
 */
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

/**
 * returns the first date that:
 * 1. falls on or after the passed in date and
 * 2. happens on the passed day of the week
 * @param ICSDate the passed in date, a string in ICS format
 * @param dow the day of the week, a number 0-6, where 0 is sunday
 * @returns {string} the date
 */
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

/**
 * returns the first date that:
 * 1. falls on or after the passed in date and
 * 2. happens on one of the passed days of the week
 * @param ICSDate the start day, as a string in ICS format
 * @param dows an array of days of the week, represented as numbers 0-6, where 0 is sunday
 * @returns {*} an string representing a date in ICS format
 */
function getFirstDayOfMultiple(ICSDate, dows) {
    let dates = [];
    for (let i = 0; i < dows.length; i++) {
        dates[i] = getFirstDay(ICSDate, dows[i]);
    }
    dates = dates.sort();
    return dates[0];
}

/**
 * Converts from a JavaScript Date object to a string representing the date in ICS format
 * @param JSDate the passed in JS Date
 * @returns {string} the returned ICS Date
 */
function DateToICS(JSDate) {
    return JSDate.toISOString().substring(0,10).replaceAll("-", "");
}

/**
 * Converts from a string representing a date in ICS format to a JavaScript Date object
 * @param ICSDate the passed in date in ICS format
 * @returns {Date} the returned Date object
 */
function ICSToDate(ICSDate) {
    return new Date(ICSDate.substring(0,4) + "-" + ICSDate.substring(4, 6) + "-" + ICSDate.substring(6, 8));
}

/**
 * Rudimentary hash function for making UIDs for the file
 * @param event
 * @returns {string}
 */
function makeUID(event) {
    //TODO: improve hash function
    let UID = convertTime(event.time)[0];
    UID += "-";
    let hash = convertTime(event.time)[0] + (convertTime(event.time)[1] * 32) + event.title.length * 32**2;
    UID += hash;
    UID += "@example.com";
    return UID;
}


/**
 * Get the start/end dates and holidays for the academic quarter.
 * Unable to unit test.
 * 
 * @param {*} year formatted as "2022-2023"
 * @param {*} quarter formatted as "Spring", "Winter", "Autumn" // TODO idk what summer quarter looks like
 * @returns 
 */
function getDatesAndHolidays(year, quarter) {
    let ret = {} // check slack for format
    let formatYear = formatYear(year)
    const dom = getRequest(`https://www.washington.edu/students/reg/${year}cal.html`)["body"]
    // cast to html collection
    //
    // Get Dates
    let col = getCol(quarter)

    // Get Holidays

    return ret
}

/**
 * Get the column associated with the quarter.
 * 
 * @param {*} quarter 
 * @returns 
 */
function getCol(quarter) {
    if (quarter == 'Autumn') return 0;
    else if (quarter == 'Winter') return 1;
    else if (quarter == 'Summer') return 2;
    else if (quarter == "Full-term") return 3;
    else if (quarter == "A-term") return 4; // TODO what is right format for this?
    else if (quarter == "B-term") return 5;
}