const { Sequelize, sequelize } = require('../database');
const { HospitalDoctor } = require('./hospitalDoctor');


const Hospital = sequelize.define('hospitals', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  contact: {
    type: Sequelize.STRING,
  },
});

Hospital.hasMany(HospitalDoctor);

const create = hospital => Hospital.create(hospital);

const findAll = () => Hospital.findAll();

const sync = () => Hospital.sync();

module.exports = {
  Hospital,
  create,
  findAll,
  sync,
};
