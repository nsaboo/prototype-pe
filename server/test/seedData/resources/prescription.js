const rp = require('request-promise');
const helpers = require('../../helpers/');
const prescriptions = require('../data/prescriptions.json');


const createPrescription = (prescription) => {
  const options = {
    method: 'POST',
    uri: `${helpers.CONSUMER_URL}/prescription`,
    headers: {
      'content-type': 'application/json',
    },
    body: prescription,
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

const seedPrescription = () => {
  prescriptions.forEach((prescription) => {
    createPrescription(prescription);
  });
};

module.exports = {
  seedPrescription,
};
