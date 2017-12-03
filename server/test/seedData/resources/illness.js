const rp = require('request-promise');
const helpers = require('../../helpers/');
const illnessData = require('../data/illness.json');


const createIllness = (illness) => {
  const options = {
    method: 'POST',
    uri: `${helpers.CONSUMER_URL}/illness`,
    headers: {
      'content-type': 'application/json',
    },
    body: illness,
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

const seedIllness = () => {
  illnessData.forEach((illness) => {
    createIllness(illness);
  });
};

module.exports = {
  seedIllness,
};
