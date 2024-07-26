// 5-payment.test.js
const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;

  beforeEach(function () {
    // Spy on console.log to check if it's being called correctly
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the spy
    consoleSpy.restore();
  });

  it('should log "The total is: 120" and called once for 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);
    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWith('The total is: 120'));
  });

  it('should log "The total is: 20" and called once for 10 and 10', function () {
    sendPaymentRequestToApi(10, 10);
    assert(consoleSpy.calledOnce);
    assert(consoleSpy.calledWith('The total is: 20'));
  });
});
