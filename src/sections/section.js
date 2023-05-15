const puppeteer  = require('puppeteer');

(async function () {
  const browser = await puppeteer.launch( { headless : false } );
  const page = await browser.newPage();
  await page.goto('https://www.washington.edu/students/timeschd/SPR2023/cse.html');

  const data = await page.evaluate( function() {
    const tbls = document.getElementsByTagName('table');
    const results = [];
    var ind = false;
    var fin = false;

    for (var i = 0; i < tbls.length; i++) {
      if(fin){
        break;
      }
      const tbl = tbls[i];
      const row = tbl.querySelectorAll('tr');
      if(row.length != 1){
        continue;
      }else {
        const cells = tbl.rows.item(0).cells;
        if(cells.length == 1){
          const pr = cells.item(0).querySelector('pre');
          if(pr != null){
            const x = pr.querySelector('a').innerText;
            if(ind === false){
              if(x == '12782'){
                //results.push(pr.querySelector('a').href);
                ind = true;
              }
            }else{
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
  })

  console.log(data);


})();