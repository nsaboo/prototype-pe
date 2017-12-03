const { Sequelize, sequelize } = require('../database');
const { Patient } = require('./patient');
const { Hospital } = require('./hospital');
const { Doctor } = require('./doctor');
const { Laboratory } = require('./laboratory');
const { Pharmacy } = require('./pharmacy');


const City = sequelize.define('cities', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
});

City.hasMany(Patient);
City.hasMany(Hospital);
City.hasMany(Doctor);
City.hasMany(Laboratory);
City.hasMany(Pharmacy);

const create = city => City.create(city);

const findAll = params => City.findAll({ where: params });

const update = (u, w) => City.update(u, { where: w });

const sync = () => City.sync();

module.exports = {
  City,
  create,
  findAll,
  update,
  sync,
};
