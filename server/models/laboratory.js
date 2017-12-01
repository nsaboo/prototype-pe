const { Sequelize, sequelize } = require('../database');

const Laboratory = sequelize.define('laboratories', {
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

const create = laboratory => Laboratory.create(laboratory);

const findAll = () => Laboratory.findAll();

const sync = () => Laboratory.sync();

module.exports = {
  Laboratory,
  create,
  findAll,
  sync,
};
