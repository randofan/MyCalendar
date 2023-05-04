// Get the content from class schedule.
(async () => {
    const response = await chrome.runtime.sendMessage({classSchedule: getClassSchedule(), classQuarter: getQuarter()});
  }
)();

function getClassSchedule() {
    // console.log(document.getElementsByClassName("sps_table even_rows"));
    // console.log(document.getElementsByClassName("sps_table even_rows").innerHTML);

    console.log(document.getElementsByClassName("sps-data"));
    
    const table = document.getElementsByClassName("sps_table even_rows").rows;
    if (table) {
        let map = {}
    
        // Loop over each course
        table.forEach(tr => {
            let sln = tr.cells[0] // SLN
            let title =  tr.cells[1] // Course Title; CSE 403
            let type = tr.cells[2] // LC = lecture; QZ = section; IS = individual
            let name = tr.cells[4] // Course Name; Software Engineering
            let days = tr.cells[5] // Days
            let time = tr.cells[6] // Time
            let location = tr.cells[7] // Location
            let prof = tr.cells[8] // Instructor
    
            map[title] = {
                          "sln": sln, 
                          "title": title, 
                          "type": type, 
                          "name": name, 
                          "days": days, 
                          "time": time, 
                          "location": location, 
                          "prof": prof
                        }
        })
        return map
    }
    else {
        alert("No class schedule detected")
        return null
    }
}

// Gets the quarter. In form of "Spring 2023"
function getQuarter() {
    return document.getElementsByTagName("h1")[0].innerText
}