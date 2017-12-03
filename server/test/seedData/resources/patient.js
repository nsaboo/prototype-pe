const rp = require('request-promise');
const helpers = require('../../helpers/');
const patients = require('../data/patients.json');


const createPatient = (patient) => {
  const options = {
    method: 'POST',
    uri: `${helpers.CONSUMER_URL}/patient`,
    headers: {
      'content-type': 'application/json',
    },
    body: patient,
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

const seedPatient = () => {
  patients.forEach((patient) => {
    createPatient(patient);
  });
};


module.exports = {
  seedPatient,
};
