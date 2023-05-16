// function to parse the sln numbers for the section
function getsln(sln, course) {
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
              // get all the lab and quiz sections
              if (pr.innerHTML.includes("LB") || pr.innerHTML.includes("QZ")){
                results.push(pr.querySelector('a').href);
              }else{
                fin = true;
              }
            }
          }

        }
      }

    }
    return results;
  }
