const { Sequelize, sequelize } = require('../database');
const { Prescription } = require('./prescription');

const Pharmacy = sequelize.define('pharmacies', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  mobile: {
    type: Sequelize.STRING,
  },
});

Pharmacy.hasMany(Prescription);

const create = pharmacy => Pharmacy.create(pharmacy);

const findAll = () => Pharmacy.findAll();

const sync = () => Pharmacy.sync();

module.exports = {
  Pharmacy,
  create,
  findAll,
  sync,
};
