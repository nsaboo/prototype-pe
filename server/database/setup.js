const models = require('../models');
const { Sequelize, ENV_CONFIG_DB } = require('./index');

const PRE_DB_CONFIG = Object.assign({}, ENV_CONFIG_DB);
delete PRE_DB_CONFIG.database;

const sequelize = new Sequelize(PRE_DB_CONFIG);

const createDatabase = () => sequelize.query(`CREATE DATABASE IF NOT EXISTS ${ENV_CONFIG_DB.database}`);

const dropDatabase = () => sequelize.query(`DROP DATABASE IF EXISTS ${ENV_CONFIG_DB.database}`);

const sync = () => dropDatabase()
  .then(() => createDatabase())
  .then(() => models.user.sync())
  .catch((err) => {
    throw err;
  });

sync();

module.exports = {
  sync,
};
