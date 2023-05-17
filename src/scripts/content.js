/**
 * Get the content from class schedule.
 * Unable to unit test.
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.page) {
            console.log('content')
            sendResponse({classSchedule: getClassSchedule(), classQuarter: getQuarter()});// this is how you send message to popup
            return true;
        }
    }
);

//
// Pass in document as a parameter to the two function below. This allows unit testing.
//

/**
 * Get the class schedule from the doc.
 * 
 */
function getClassSchedule() {
    const table = document.getElementsByClassName("sps-data");
    const data = table[0];
    const trs = data.getElementsByTagName("tr");

    let map = {};
    for (let i = 0; i < trs.length; i++) {
        let row = trs[i];
        const cells = row.getElementsByTagName("td");

        if (cells.length >= 10) { // only process table rows that represent courses

            let sln = cells[0].getElementsByTagName("a")[0].textContent;    // SLN
            let title =  cells[1].innerHTML                                 // Course Title; CSE 403 A
            let course = title.substring(0, title.lastIndexOf(" "));        // Course; CSE 403
            let type = cells[2].innerHTML                                   // LC = lecture; QZ = section; IS = individual
            let name = cells[4].getElementsByTagName("a")[0].textContent    // Course Name; Software Engineering
            let days = cells[5].innerHTML                                   // Days
            let time = cells[6].innerHTML.replace(/&nbsp;/g,'');            // Time
            let location = cells[7].textContent                             // Location
            let locationLink = cells[7].getElementsByTagName("a")[0].href   // UW map link
            let prof = cells[8].innerHTML.replace(/&nbsp;/g,'');            // Instructor
    
            map[title] = {
                            "sln": sln,
                            "course": course,
                            "title": title, 
                            "type": type, 
                            "name": name, 
                            "days": days, 
                            "time": time, 
                            "location": location, 
                            "prof": prof,
                            "link": locationLink
                        }

        }
    }
    return map;
}

/**
 * Gets the quarter. In form of "Spring 2023".
 * 
 */
function getQuarter() {
    return document.getElementsByTagName("h1")[0].innerText
}
