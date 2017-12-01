const models = require('../models');

module.exports = {
  get: (req, res) => {
    models.pharmacy.findAll()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  post: (req, res) => {
    const pharmacy = req.body;

    models.pharmacy.create(pharmacy)
      .then((data) => {
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(404).send('Error Occurred');
        throw err;
      });
  },
};
