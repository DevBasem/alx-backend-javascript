const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  describe('GET /', () => {
    it('should return correct response', (done) => {
      request.get(`${API_URL}/`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/:id', () => {
    it('should return correct response for valid id', (done) => {
      request.get(`${API_URL}/cart/12`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Payment methods for cart 12');
        done();
      });
    });

    it('should return 404 for invalid id', (done) => {
      request.get(`${API_URL}/cart/hello`, (_err, res, _body) => {
        expect(res.statusCode).to.be.equal(404);
        done();
      });
    });
  });

  describe('GET /available_payments', () => {
    it('should return the correct payment methods object', (done) => {
      request.get(`${API_URL}/available_payments`, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
        });
        done();
      });
    });
  });

  describe('POST /login', () => {
    it('should return welcome message with username', (done) => {
      request.post({
        url: `${API_URL}/login`,
        body: JSON.stringify({ userName: 'Betty' }),
        headers: { 'Content-Type': 'application/json' }
      }, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome Betty');
        done();
      });
    });
  });
});
