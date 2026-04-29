const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Measure = sequelize.define('Measure', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  watts: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date_taken: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  take_by: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  meter: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'Measure',
  timestamps: false
});

module.exports = Measure;
