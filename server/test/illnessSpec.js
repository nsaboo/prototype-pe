process.env.PORT = 3001;

const server = require('../index.js');
const supertest = require('supertest');
const setup = require('../database/setup');

const request = supertest.agent(server);

describe('Server Illness Spec', () => {
  before((done) => {
    setup.sync()
      .then(() => {
        done();
      });
  });

  it('should get all illness', (done) => {
    request
      .get('/illness')
      .expect(200, done);
  });

  it('should create illness', (done) => {
    const illnessParams = {
      category: 'Fever',
    };

    request
      .post('/illness')
      .send(illnessParams)
      .set('Accept', 'application/json')
      .expect(201, done);
  });
});
