process.env.PORT = 3001;

const server = require('../index.js');
const supertest = require('supertest');
const setup = require('../database/setup');

const request = supertest.agent(server);

describe('Server City Spec', () => {
  before((done) => {
    setup.sync()
      .then(() => {
        done();
      });
  });

  it('should get all city', (done) => {
    request
      .get('/api/city')
      .expect(200, done);
  });

  it('should create city', (done) => {
    const cityParams = {
      city: 'Mumbai',
    };

    request
      .post('/api/city')
      .send(cityParams)
      .set('Accept', 'application/json')
      .expect(201, done);
  });
});
