const models = require('../models');

module.exports = {
  get: (req, res) => {
    const reqParams = req.query;

    models.hospitalDoctor.findAll(reqParams)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  post: (req, res) => {
    const hospitalDoctor = req.body;

    models.hospitalDoctor.create(hospitalDoctor)
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(404).send('Error Occurred');
        throw err;
      });
  },
};
