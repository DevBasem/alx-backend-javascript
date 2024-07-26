// 6-payment_token.test.js

const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with the correct response when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        try {
          assert.deepStrictEqual(response, { data: 'Successful response from the API' });
          done();
        } catch (err) {
          done(err);
        }
      })
      .catch(done); // Catch unexpected errors
  });

  it('should not resolve or reject when success is false', function (done) {
    this.timeout(2000); // Increase timeout to ensure the test does not fail prematurely

    const timeout = setTimeout(() => {
      done(); // Test should pass if the promise neither resolves nor rejects within this timeout
    }, 1500); // Shorter than the default timeout to ensure the test completes

    getPaymentTokenFromAPI(false)
      .then(() => {
        clearTimeout(timeout);
        done(new Error('Expected promise to be neither resolved nor rejected'));
      })
      .catch(() => {
        clearTimeout(timeout);
        done(new Error('Expected promise to be neither resolved nor rejected'));
      });
  });
});
