const { Sequelize, sequelize } = require('../database');
const { DoctorReview } = require('./doctorReview');
const { HospitalDoctor } = require('./hospitalDoctor');
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
Doctor.hasMany(Prescription);

const create = doctor => Doctor.create(doctor);

const findAll = params => Doctor.findAll({ where: params });

const update = (u, w) => Doctor.update(u, { where: w });

const sync = () => Doctor.sync();

module.exports = {
  Doctor,
  create,
  findAll,
  update,
  sync,
};
