const rp = require('request-promise');
const helpers = require('../../helpers/');
const doctors = require('../data/doctors.json');


const createDoctor = (doctor) => {
  const options = {
    method: 'POST',
    uri: `${helpers.CONSUMER_URL}/doctor`,
    headers: {
      'content-type': 'application/json',
    },
    body: doctor,
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

const seedDoctor = () => {
  doctors.forEach((doctor) => {
    createDoctor(doctor);
  });
};


module.exports = {
  seedDoctor,
};
