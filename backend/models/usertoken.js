'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserToken extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserToken.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  UserToken.init({
    token: DataTypes.TEXT,
    expires_at: DataTypes.DATE,
    is_revoked: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserToken',
  });
  return UserToken;
};