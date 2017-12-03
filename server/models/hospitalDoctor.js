const { Sequelize, sequelize } = require('../database');

const HospitalDoctor = sequelize.define('hospitalDoctors', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  review: {
    type: Sequelize.STRING,
  },
  rating: {
    type: Sequelize.INTEGER,
  },
}, {
  indexes: [
    {
      // unique: true,
      fields: ['review', 'rating'],
    },
  ],
});

const sync = () => HospitalDoctor.sync();

const findAll = params => HospitalDoctor.findAll({ where: params });

const create = hospitalDoctor => HospitalDoctor.create(hospitalDoctor);

module.exports = {
  HospitalDoctor,
  sync,
  create,
  findAll,
};
