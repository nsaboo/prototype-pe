const models = require('../models');

module.exports = {
  get: (req, res) => {
    const reqParams = req.query;

    models.illness.findAll(reqParams)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  put: (req, res) => {
    const updateParams = req.body;
    const whereParams = req.query;

    models.illness.update(updateParams, whereParams)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  post: (req, res) => {
    const illness = req.body;

    models.illness.create(illness)
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(404).send('Error Occurred');
        throw err;
      });
  },
};
