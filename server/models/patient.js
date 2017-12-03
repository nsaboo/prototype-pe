const { Sequelize, sequelize } = require('../database');
const { PatientHistory } = require('./patientHistory');
const { DoctorReview } = require('./doctorReview');
const { Prescription } = require('./prescription');

const Patient = sequelize.define('patients', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
  gender: {
    type: Sequelize.INTEGER,
  },
  email: {
    type: Sequelize.STRING,
  },
  mobile: {
    type: Sequelize.STRING,
  },
  relation: {
    type: Sequelize.INTEGER,
  },
  bloodGroup: {
    type: Sequelize.STRING,
  },
});

Patient.hasMany(Patient);
Patient.hasMany(PatientHistory);
Patient.hasMany(DoctorReview);
Patient.hasMany(Prescription);

const create = patient => Patient.create(patient);

const findAll = params => Patient.findAll({ where: params });

const sync = () => Patient.sync();

module.exports = {
  Patient,
  create,
  findAll,
  sync,
};
