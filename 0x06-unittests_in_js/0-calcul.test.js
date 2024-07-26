// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 for inputs 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 for inputs 1 and 3.7', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 for inputs 1.2 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 for inputs 1.5 and 3.7', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return 0 for inputs 0 and 0', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should return -4 for inputs -1.2 and -2.7', () => {
    assert.strictEqual(calculateNumber(-1.2, -2.7), -4);
  });

  it('should return 1 for inputs -0.5 and 0.5', () => {
    assert.strictEqual(calculateNumber(-0.5, 0.5), 1);
  });
});
