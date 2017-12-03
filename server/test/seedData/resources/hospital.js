const rp = require('request-promise');
const helpers = require('../../helpers/');
const hospitals = require('../data/hospitals.json');


const createHospital = (hospital) => {
  const options = {
    method: 'POST',
    uri: `${helpers.CONSUMER_URL}/hospital`,
    headers: {
      'content-type': 'application/json',
    },
    body: hospital,
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

const seedHospital = () => {
  hospitals.forEach((hospital) => {
    createHospital(hospital);
  });
};


module.exports = {
  seedHospital,
};
