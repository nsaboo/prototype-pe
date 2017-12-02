const { Sequelize, sequelize } = require('../database');

const Company = sequelize.define('companies', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
});

const create = company => Company.create(company);

const findAll = () => Company.findAll();

const sync = () => Company.sync();

module.exports = {
  Company,
  create,
  findAll,
  sync,
};
