const registrationToICSDays = new Map([["M", "MO"], ["T", "TU"], ["W", "WE"], ["Th", "TH"], ["F", "FR"]]);

/**
 * Builds a .ics file from a passed in calendar object.
 * 
 * Input is formatted as follows.
   scheduleData[Course Title] = {
                                SLN,
                                Course Title; CSE 403 A,
                                Course; CSE 403,
                                LC = lecture; QZ = section; IS = individual,
                                Course Name; Software Engineering,
                                Days,
                                Time,
                                Location,
                                UW map link,
                                Instructor
                                }
 * 
 * @param {*} scheduleData course data from content.js
 * @param {*} quarterYear quarter + year from content.js
 * @param {*} includeLink boolean to include directions link
 * @returns 
 */
function buildICS(scheduleData, info, includeLink) {

    const firstDayOfInstruction = convertDate(info["dates"]["start"])
    const lastDayOfInstuction = convertDate(info["dates"]["end"])
    const holidayArray = info["holidays"]

    for (let i = 0; i < holidayArray.length; i++) {
        holidayArray[i] = convertDate(new Date(holidayArray[i]));
    }

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

    for (let i = 1; i < startDates.length; i++) {
        let date = ICSToDate(startDates[i]);
        date.setDate(date.getDate() + 1);
        startDates[i] = dateToICS(date);
    }

    for (let i = 0; i < endDates.length - 1; i++) {
        let date = ICSToDate(endDates[i]);
        date.setDate(date.getDate() - 1);
        endDates[i] = dateToICS(date);
    }

    map.forEach(en => { // for each class
        for (let i = 0; i < startDates.length; i++) { // for each block of classes between holidays and start/end of quarter
            let times = convertTime(en.time);
            let dows = daysToNumbers(en.days);
            file += "BEGIN:VEVENT\n";
            file += "UID:" + makeUID(en, startDates[i], endDates[i]) + "\n";
            file += "SUMMARY:" + en.title.replaceAll("&nbsp;", " ") + "\n";
            file += "DTSTAMP:" + getFirstDayOfMultiple(startDates[i], dows) + "T" + times[0] + "\n";
            file += "DTSTART:" + getFirstDayOfMultiple(startDates[i], dows) + "T" + times[0] + "\n"; // change for holiday
            file += "DTEND:" + getFirstDayOfMultiple(startDates[i], dows) + "T" + times[1] + "\n"; // change for holiday
            file += "RRULE:FREQ=WEEKLY;BYDAY=" + convertDays(en.days) + ";UNTIL=" + endDates[i] + "\n"; // change for holiday
            file += "LOCATION:" + en.location + "\n";
            if (includeLink) {
                file += `DESCRIPTION:<HTML><BODY><a href=${en.link}>Building directions</a></BODY></HTML>` + "\n";
            }
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
    let firstDOW = firstDate.getDay();
    if (dow === firstDOW) {
        return dateToICS(firstDate);
    }
    let classDate = firstDate;
    console.error("dow: " + dow);
    console.error("firstDate: " + firstDate.toDateString() + "dow: " + firstDate.getDay());
    let millisecondDistance = ((dow - firstDate.getDay() + 7) % 7) * 24 * 60 * 60 * 1000;
    classDate.setTime(classDate.getTime() + millisecondDistance); // increment to the right day
    return dateToICS(classDate); // convert ISO date to ICS date
}

/**
 * returns the first date that:
 * 1. falls on or after the passed in date and
 * 2. happens on one of the passed days of the week
 * 
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
 * Converts from a JavaScript Date object to a string representing the date in ICS format.
 * 
 * @param JSDate the passed in JS Date
 * @returns {string} the returned ICS Date
 */
function dateToICS(JSDate) {
    return JSDate.toISOString().substring(0,10).replaceAll("-", "");
}

/**
 * Converts from a string representing a date in ICS format to a JavaScript Date object.
 * 
 * @param ICSDate the passed in date in ICS format
 * @returns {Date} the returned Date object
 */
function ICSToDate(ICSDate) {
    return new Date(Number(ICSDate.substring(0, 4)), Number(ICSDate.substring(4, 6)) - 1, Number(ICSDate.substring(6, 8)));
}

/**
 * Rudimentary hash function for making UIDs for the file.
 * 
 * @param event
 * @returns {string}
 */
function makeUID(event, start, end) {

    let UID = convertTime(event.time)[0].substring(0,2);
    UID += convertTime(event.time)[1].substring(0,1);
    UID += start;
    UID += end;
    UID += event.title.replaceAll(" ", "");
    UID += "@example.com";
    return UID;
}

/**
 * Convert "June 3, 2023" into 20230603.
 * 
 * @param {*} date 
 */
function convertDate(writtenDate) {
    const date = new Date(writtenDate)
    return dateToICS(date);
}