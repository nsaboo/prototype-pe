const models = require('../models');

module.exports = {
  get: (req, res) => {
    models.user.findAll()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  post: (req, res) => {
    const user = req.body;

    models.user.create(user)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(404).send('Error Occurred');
        throw err;
      });
  },
};
