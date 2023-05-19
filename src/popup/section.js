// function to parse the sln numbers for the section
function getsln(sln, document) {
  // get's all the sln tables
  const tbls = document.getElementsByTagName('table');
  const results = [];
  var ind = false;
  var fin = false;
  // looks through all the tables
  for (var i = 0; i < tbls.length; i++) {
    if(fin){
      break;
    }
    const tbl = tbls[i];
    const row = tbl.querySelectorAll('tr');
    if(row.length != 1){
      continue;
    }else {
      // gets the tables that are correlated to courses
      const cells = tbl.rows.item(0).cells;
      if(cells.length == 1){
        const pr = cells.item(0).querySelector('pre');
        if(pr != null){
          const x = pr.querySelector('a').innerText;
          if(ind === false){
              // find sln of course passed in
            if(x == sln){
              ind = true;
            }
          }else{
            if (pr.innerHTML.includes("LB") || pr.innerHTML.includes("QZ")){
              results.push(getSched(pr));
            }else{
              fin = true;
            }
          }
        }

      }
    }

  }
  console.log(results);
}

function getSched(pr) {
  let st = pr.innerText;
  st = st.replace(/\s+/g," ");
  const arr = st.split(" ");
  let sln = arr[1];
  let title = arr[2];
  let course = " tbd ";
  let type = arr[3];
  let name = "tbd";
  let days = arr[4];
  let time = arr[5];
  let loc  = arr[6].concat(" ", arr[7]);
  let prof = arr[8];
  let loclink = pr.getElementsByTagName("a")[1].href;
  const obj = { "sln": sln, "course": course, "title": title, "type": type, "name": name, "days": days, "time": time, "location": loc, "prof": prof, "link": loclink}

  return obj;
}
