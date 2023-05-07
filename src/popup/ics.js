// builds a .ics file from a passed in calendar object

const firstDayOfInstruction = (new Date()).toISOString().substring(0, 10).replace("-", ""); // ICS style, get from content.js
const lastDayOfInstuction = 20231230; // ICS style, get from content.js
const registrationToICSDays = new Map([["M", "MO"], ["T", "TU"], ["W", "WE"], ["Th", "TH"], ["F", "FR"]]);
const dayToNumber = ["SU", "MO", "TU", "TH", "FR", "SA"]; // used to convert day codes to day numbers
const holidayArray = [0]; // ICS style, get from content.js

function buildICS(selection) {
    console.log("IN ICS!");
    console.log(selection);
    
    const map = getClassSchedule(); // need to replace with Chrome API call because of background script weirdness
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
        "END:VTIMEZONE"; // add time zone data


    let startDates = [firstDayOfInstruction].concat(holidayArray);
    let endDates = holidayArray.concat([lastDayOfInstuction]);
    map.forEach(en => { // for each class
        if (selection.contains(en.title)) { // if the user selected it
            //for (let i = 0; i < startDates.length; i++) { // for each block of classes between holidays and start/end of quarter
            let times = convertTime(en.time);
            let DOW = dayToNumber.indexOf(convertDays(en.days).slice(0, 2)); // bugged, see line 42. doesn't start on the right next day after a holiday
            file += "BEGIN:VEVENT\n";
            file += "SUMMARY:" + en.title + "\n";
            file += "DSTART:" + getFirstDay(firstDayOfInstruction, DOW) + "T" + times[0] + "\n"; // change for holiday
            file += "DTEND" + getFirstDay(firstDayOfInstruction, DOW) + "T" + times[1] + "\n"; // change for holiday
            file += "RRULE:FREQ=WEEKLY;BYDAY=" + convertDays(en.days) + ";UNTIL=" + lastDayOfInstuction + "\n"; // change for holiday
            file += "LOCATION:" + en.location + "\n";
            file += "END:VEVENT\n";
            //}
        }
    })
    file += "END:VCALENDAR\n";
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
    for (let day in dayChars) {
        icsDays.push(registrationToICSDays.get(day));
    }
    return icsDays.join(",");
}

// converts from the time on the registration page to ICS format time
function convertTime(registrationTime) {
    registrationTime = registrationTime.replace(/ /g, "0"); // replaces missing zeroes
    let startTime = registrationTime.split("-")[0];
    let endTime = registrationTime.split("-")[1];
    if (startTime < "0830") { // account for evening and afternoon classes in 12hr time
        startTime = Number(startTime) + 1200;
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
    let ISODate = ICSDate.substring(0, 4) + "-" + ICSDate.substring(4, 6) + "-" + ICSDate.substring(6, 8);
    let firstDate = new Date(ISODate + "T000000Z"); // calculate all dates inside the method in Z
    let firstDOW = firstDate.getDay();
    if (dow === firstDOW) {
        return firstDate;
    }
    let classDate = firstDate;
    classDate.setDate(classDate.getDate() + ((dow - firstDate.getDay() + 7) % 7)); // increment to the right day
    return classDate.toISOString().substring(0, 10).replace("-", ""); // convert ISO date to ICS date
}