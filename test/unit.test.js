// TODO Nothing in this file works. Don't write anything here.

const sum = require('./../src/test_example.js');
const convertDays = require('./../src/popup/ics.js');
const convertTime = require('./../src/popup/ics.js')
const assert = require('assert');


describe('My function', () => {
  it('should return the sum of two numbers', () => {
    assert.equal(sum(2, 3), 5);
  });
});

describe('ICS Unit Tests', () => {
  it('test convertDays', () => {
    let registrationDays = "MWF";
    let answer = convertDays(registrationDays);
    assert.deepEqual(answer, "MO,WE,FR");

    registrationDays = "TTh";
    answer = convertDays(registrationDays);
    assert.deepEqual(answer, "TU,TH");

    registrationDays = "TThF";
    answer = convertDays(registrationDays);
    assert.deepEqual(answer, "TU,TH,FR");
  });

  it('test convertTime', () => {
    let registrationTime = "1030-1120";
    let answer = convertTime(registrationTime);
    assert.deepEqual(answer, ["103000", "112000"]);

    registrationTime = "1130-1220";
    answer = convertTime(registrationTime);
    assert.deepEqual(answer, ["113000", "122000"]);

    registrationTime = "1230- 120";
    answer = convertTime(registrationTime);
    assert.deepEqual(answer, ["123000", "132000"]);

    registrationTime = " 230- 320";
    answer = convertTime(registrationTime);
    assert.deepEqual(answer, ["143000", "152000"]);

    registrationTime = " 630- 720";
    answer = convertTime(registrationTime);
    assert.deepEqual(answer, ["183000", "192000"]);
  });
});