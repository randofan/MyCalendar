// TODO Nothing in this file works. Don't write anything here.

const sum = require('./../src/test_example.js');
const assert = require('assert');


describe('My function', () => {
  it('should return the sum of two numbers', () => {
    assert.equal(sum(2, 3), 5);
  });
});