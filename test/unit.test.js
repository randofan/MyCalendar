const test = require('./src/popup/export.js');
// const buildICS = require('./src/popup/ics.js');
// const getClassSchedule = require('./src/scripts/content.js');

const assert = require('assert');


describe('Display Names', () => {
  it('Normal Case', () => {
    const courses = ["CSE 403", "CSE 340", "HCDE 318"];
    assert.equal(test(2,3), 5); // TODO add expected html
  });
});

// describe('Build ICS', () => {
//   it('Normal Case', () => {
//     const selection = null; // TODO add input
//     assert.equal(buildICS(selection), 5); // TODO add expected html
//   });
// });