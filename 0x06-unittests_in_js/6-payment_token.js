// 6-payment_token.js

/**
 * Simulates fetching a payment token from an API.
 * @param {boolean} success - Determines if the API call is successful.
 * @returns {Promise<object>} - A promise that resolves with the response if successful.
 */
function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    }
    // If success is false, the promise neither resolves nor rejects.
  });
}

module.exports = getPaymentTokenFromAPI;
