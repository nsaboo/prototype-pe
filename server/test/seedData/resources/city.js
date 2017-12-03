const rp = require('request-promise');
const helpers = require('../../helpers/');
const cities = require('../data/cities.json');


const createCity = (city) => {
  const options = {
    method: 'POST',
    uri: `${helpers.CONSUMER_URL}/city`,
    headers: {
      'content-type': 'application/json',
    },
    body: city,
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

const seedCity = () => {
  cities.forEach((city) => {
    createCity(city);
  });
};

module.exports = {
  seedCity,
};
