const { Sequelize, sequelize } = require('../database');

const Insurer = sequelize.define('insurers', {
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

const create = insurer => Insurer.create(insurer);

const findAll = () => Insurer.findAll();

const sync = () => Insurer.sync();

module.exports = {
  Insurer,
  create,
  findAll,
  sync,
};
