const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const UserTokens = sequelize.define('UserTokens', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  token: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  expires_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  is_revoked: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  userid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'User_tokens',
  timestamps: false
});

module.exports = UserTokens;
