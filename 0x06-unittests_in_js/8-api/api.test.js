const request = require('request');
const app = require('./api');
const chai = require('chai');
const expect = chai.expect;

const PORT = 7865;

describe('Index page', function() {
  let server;

  before(function(done) {
    server = app.listen(PORT, done);
  });

  after(function(done) {
    server.close(done);
  });

  it('should return status code 200', function(done) {
    request(`http://localhost:${PORT}`, function(error, response, body) {
      if (error) return done(error);
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', function(done) {
    request(`http://localhost:${PORT}`, function(error, response, body) {
      if (error) return done(error);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
