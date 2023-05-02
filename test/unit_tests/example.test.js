const sum = require('./../../src/popup/export.js');
const assert = require('assert');


describe('My function', () => {
  it('should return the sum of two numbers', () => {
    assert.equal(sum(2, 3));
  });
});