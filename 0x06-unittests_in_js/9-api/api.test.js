const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  describe('Cart page', () => {
    it('GET /cart/:id should return correct response for valid id', (done) => {
      request.get(`${API_URL}/cart/12`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Payment methods for cart 12');
        done();
      });
    });

    it('GET /cart/:id should return 404 for invalid id', (done) => {
      request.get(`${API_URL}/cart/hello`, (_err, res) => {
        expect(res.statusCode).to.be.equal(404);
        done();
      });
    });
  });
});
