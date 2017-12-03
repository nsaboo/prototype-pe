const { Sequelize, sequelize } = require('../database');
const { Prescription } = require('./prescription');

const Laboratory = sequelize.define('laboratories', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  place: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
});

Laboratory.hasMany(Prescription);

const create = laboratory => Laboratory.create(laboratory);

const findAll = params => Laboratory.findAll({ where: params });

const sync = () => Laboratory.sync();

module.exports = {
  Laboratory,
  create,
  findAll,
  sync,
};
