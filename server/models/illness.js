const { Sequelize, sequelize } = require('../database');
const { Prescription } = require('./prescription');


const Illness = sequelize.define('illness', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  category: {
    type: Sequelize.STRING,
  },
});

Illness.hasMany(Prescription);

const create = illness => Illness.create(illness);

const findAll = params => Illness.findAll({ where: params });

const sync = () => Illness.sync();

module.exports = {
  Illness,
  create,
  findAll,
  sync,
};
