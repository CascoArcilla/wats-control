const { Sequelize } = require('sequelize');
const path = require('path');
// Load .env from the root directory
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const sequelize = new Sequelize(
  process.env.EC_DB_NAME || 'control_watts',
  process.env.EC_DB_USER || 'root',
  process.env.EC_DB_PASSWORD || '12345678',
  {
    host: process.env.EC_DB_HOST || 'localhost',
    port: process.env.EC_DB_PORT || 3306,
    dialect: 'mysql',
    logging: false,
  }
);

module.exports = sequelize;
