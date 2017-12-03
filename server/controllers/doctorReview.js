const models = require('../models');

module.exports = {
  get: (req, res) => {
    const reqParams = req.query;

    models.doctorReview.findAll(reqParams)
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

    models.doctorReview.update(updateParams, whereParams)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  post: (req, res) => {
    const doctorReview = req.body;

    models.doctorReview.create(doctorReview)
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(404).send('Error Occurred');
        throw err;
      });
  },
};
