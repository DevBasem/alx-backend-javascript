// 4-payment.test.js
const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;
  let calculateNumberStub;

  beforeEach(function () {
    // Stub Utils.calculateNumber to always return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log to check if it's being called correctly
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the stub and spy
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, and 20', function () {
    sendPaymentRequestToApi(100, 20);
    assert(calculateNumberStub.calledWith('SUM', 100, 20));
  });

  it('should log the correct message', function () {
    sendPaymentRequestToApi(100, 20);
    assert(consoleSpy.calledWith('The total is: 10'));
  });
});
