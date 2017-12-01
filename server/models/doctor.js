const { Sequelize, sequelize } = require('../database');
const { DoctorReview } = require('./doctorReview');
const { HospitalDoctor } = require('./hospitalDoctor');
const { PatientHistory } = require('./patientHistory');
const { Prescription } = require('./prescription');

const Doctor = sequelize.define('doctors', {
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
});

Doctor.hasMany(DoctorReview);
Doctor.hasMany(HospitalDoctor);
Doctor.hasMany(PatientHistory);
Doctor.hasMany(Prescription);

const create = doctor => Doctor.create(doctor);

const findAll = () => Doctor.findAll();

const sync = () => Doctor.sync();

module.exports = {
  Doctor,
  create,
  findAll,
  sync,
};
