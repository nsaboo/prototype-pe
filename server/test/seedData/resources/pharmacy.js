const rp = require('request-promise');
const helpers = require('../../helpers/');
const pharmacies = require('../data/pharmacies.json');


const createPharmacy = (pharmacy) => {
  const options = {
    method: 'POST',
    uri: `${helpers.CONSUMER_URL}/pharmacy`,
    headers: {
      'content-type': 'application/json',
    },
    body: pharmacy,
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

const seedPharmacy = () => {
  pharmacies.forEach((pharmacy) => {
    createPharmacy(pharmacy);
  });
};

module.exports = {
  seedPharmacy,
};
