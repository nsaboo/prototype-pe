const { Sequelize, sequelize } = require('../database');

const Insurer = sequelize.define('insurers', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
});

const create = insurer => Insurer.create(insurer);

const findAll = params => Insurer.findAll({ where: params });

const sync = () => Insurer.sync();

module.exports = {
  Insurer,
  create,
  findAll,
  sync,
};
