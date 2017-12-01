const { Sequelize, sequelize } = require('../database');

const DoctorReview = sequelize.define('doctorReviews', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  review: {
    type: Sequelize.STRING,
  },
  rating: {
    type: Sequelize.INTEGER,
  },
}, {
  indexes: [
    {
      // unique: true,
      fields: ['doctorId', 'rating'],
    },
  ],
});

const sync = () => DoctorReview.sync();

const findAll = () => DoctorReview.findAll();

const create = doctorReview => DoctorReview.create(doctorReview);

module.exports = {
  DoctorReview,
  sync,
  create,
  findAll,
};
