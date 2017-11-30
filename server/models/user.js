const { Sequelize, sequelize } = require('../database');

const User = sequelize.define('users', {
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

const create = user => User.create(user);

const findAll = () => User.findAll();

const sync = () => User.sync();

module.exports = {
  User,
  create,
  findAll,
  sync,
};
