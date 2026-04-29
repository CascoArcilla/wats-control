const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Factura = sequelize.define('Factura', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },

  estimated_amount: { type: DataTypes.DOUBLE, allowNull: false },

  watts_consumed: { type: DataTypes.DOUBLE, allowNull: false },

  created: { type: DataTypes.DATEONLY, allowNull: false, defaultValue: DataTypes.NOW },

  start_date: { type: DataTypes.DATEONLY, allowNull: false },

  end_date: { type: DataTypes.DATEONLY, allowNull: false },

  meterid: { type: DataTypes.INTEGER, allowNull: false },

  userid: { type: DataTypes.INTEGER, allowNull: false }
},
  { tableName: 'Factura', timestamps: false });

module.exports = Factura;
