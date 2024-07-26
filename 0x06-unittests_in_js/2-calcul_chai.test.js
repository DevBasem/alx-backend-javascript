// 2-calcul_chai.test.js
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 for inputs 1.4 and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 0 for inputs -0.4 and 0.4', () => {
      expect(calculateNumber('SUM', -0.4, 0.4)).to.equal(0);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 for inputs 1.4 and 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 0 for inputs 0.4 and 0.4', () => {
      expect(calculateNumber('SUBTRACT', 0.4, 0.4)).to.equal(0);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 for inputs 1.4 and 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return Error for inputs 1.4 and 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return Error for inputs 1.4 and 0.2', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.equal('Error');
    });
  });

  describe('Invalid type', () => {
    it('should throw an error for invalid type', () => {
      expect(() => calculateNumber('INVALID', 1, 2)).to.throw('Invalid operation type');
    });
  });
});
