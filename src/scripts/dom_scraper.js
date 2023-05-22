/**
 * Get the class schedule from the DOM.
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
    const h1 = document.getElementsByTagName("h1")[0].innerHTML // innerText is not supported in JSDOM
    return h1.split(" ").slice(-2).join(" ");                   // extract the quarter
}