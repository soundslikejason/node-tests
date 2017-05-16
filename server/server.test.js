const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
  
  describe('GET /', () => {
    it('should return hello world response', (done) => {
      request(app)
      .get('/')
      .expect(404)
      .expect((res) => {
        expect(res.body).toInclude({
          error: 'Page not found.'
        });
      })
      .end(done);
    });
  });
  
  describe('GET /users', () => {
    // Make a new test
    // assert 200
    // assert that 'Joey' exists in users array
    it('should return a user object', (done) => {
      request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body).toInclude({
          name: 'Joey',
          age: 32
        });
      })
      .end(done);
    });
  });
});

