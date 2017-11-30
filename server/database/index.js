const Sequelize = require('sequelize');
const CONFIG = require('../config/mysql');

const NODE_ENV = process.env.NODE_ENV || 'dev';
const ENV_CONFIG_DB = CONFIG[NODE_ENV];

const sequelize = new Sequelize(ENV_CONFIG_DB);

module.exports = {
  ENV_CONFIG_DB,
  Sequelize,
  sequelize,
};
