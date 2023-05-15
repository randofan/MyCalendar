function getSection() {
  const tbls = document.getElementsByClassName("main");
  const results = [];
  const one = tbls[0];
  const row = one.querySelectorAll('tr');
  const cell = row[1].getElementsByTagName('td');
  let sln = cell[0].getElementsByTagName("tt")[0].textContent;

  let course = cell[1].getElementsByTagName("tt")[0].textContent.replace("    "," ");
  let sec = cell[2].getElementsByTagName("tt")[0].textContent;
  let title = course.concat(" ",sec);
  let type = cell[3].getElementsByTagName("tt")[0].textContent;
  let name = cell[5].getElementsByTagName("a")[0].textContent;


  const two = tbls[2];
  const row1 = two.querySelectorAll('tr');
  const cell1 = row1[2].getElementsByTagName('td');

  let days = cell1[0].getElementsByTagName("tt")[0].textContent;
  let time = cell1[1].getElementsByTagName("tt")[0].textContent;
  let loc = cell1[2].getElementsByTagName("a")[0].textContent;
  let loclink = cell1[2].querySelector("a").getAttribute("href");
  let prof = cell1[3].querySelector("tt").textContent;

  const obj = { "sln": sln, "course": course, "title": title, "type": type, "name": name, "days": days, "time": time, "location": loc, "prof": prof, "link": loclink}

  return obj;
}