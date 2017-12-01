const { Sequelize, sequelize } = require('../database');

const Prescription = sequelize.define('prescriptions', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  mobile: {
    type: Sequelize.STRING,
  },
});

const create = prescription => Prescription.create(prescription);

const findAll = () => Prescription.findAll();

const sync = () => Prescription.sync();

module.exports = {
  Prescription,
  create,
  findAll,
  sync,
};
