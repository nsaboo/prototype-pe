const { Sequelize, sequelize } = require('../database');

const PatientHistory = sequelize.define('patientHistory', {
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
      fields: ['patientId', 'doctorId', 'rating'],
    },
  ],
});

const sync = () => PatientHistory.sync();

const findAll = () => PatientHistory.findAll();

const create = patientParams => PatientHistory.create(patientParams);

module.exports = {
  PatientHistory,
  sync,
  create,
  findAll,
};
