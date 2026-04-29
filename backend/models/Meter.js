const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Meter = sequelize.define('Meter', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  number_meter: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  owner_meter: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'Meter',
  timestamps: false
});

module.exports = Meter;
