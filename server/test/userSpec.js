process.env.PORT = 3001;

const server = require('../index.js');
const supertest = require('supertest');
const setup = require('../database/setup');

const request = supertest.agent(server);

describe('Server User Spec', () => {
  before((done) => {
    setup.sync()
      .then(() => {
        done();
      });
  });

  it('should get all user', (done) => {
    request
      .get('/user')
      .expect(200, done);
  });

  it('should create user', (done) => {
    const userParams = {
      username: 'nandakishore',
      email: 'nsaboo@pharmeasy.in',
      mobile: 919980499811,
    };

    request
      .post('/user')
      .send(userParams)
      .set('Accept', 'application/json')
      .expect(201, done);
  });
});
