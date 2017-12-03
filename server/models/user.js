const { Sequelize, sequelize } = require('../database');
const { Prescription } = require('./prescription');


const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  usertype: {
    type: Sequelize.STRING,
  },
});

User.hasMany(Prescription);

const create = user => User.create(user);

const findAll = params => User.findAll({ where: params });

const sync = () => User.sync();

module.exports = {
  User,
  create,
  findAll,
  sync,
};
