const { Sequelize, sequelize } = require('../database');
const { PatientHistory } = require('./patientHistory');

const Prescription = sequelize.define('prescriptions', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  imageSrc: {
    type: Sequelize.STRING,
  },
  doctorNotes: {
    type: Sequelize.STRING,
  },
  patientNotes: {
    type: Sequelize.STRING,
  },
});

Prescription.hasMany(PatientHistory);

const create = prescription => Prescription.create(prescription);

const findAll = () => Prescription.findAll();

const sync = () => Prescription.sync();

module.exports = {
  Prescription,
  create,
  findAll,
  sync,
};
