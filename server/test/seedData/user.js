const rp = require('request-promise');
const helpers = require('../helpers/');
const users = require('./data/users.json');


const createUser = (user) => {
  const options = {
    method: 'POST',
    uri: `${helpers.CONSUMER_URL}/user`,
    headers: {
      'content-type': 'application/json',
    },
    body: user,
    json: true,
  };

  rp(options)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const seedUser = () => {
  users.forEach((user) => {
    createUser(user);
  });
};

seedUser();

module.exports = {
  seedUser,
};
