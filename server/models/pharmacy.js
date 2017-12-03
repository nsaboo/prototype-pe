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

const findAll = params => Pharmacy.findAll({ where: params });

const update = (u, w) => Pharmacy.update(u, { where: w });

const sync = () => Pharmacy.sync();

module.exports = {
  Pharmacy,
  create,
  findAll,
  update,
  sync,
};
