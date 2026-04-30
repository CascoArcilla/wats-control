'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Bill.belongsTo(models.Meter, { foreignKey: 'meterId' });
      Bill.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Bill.init({
    estimated_amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    watts_consumed: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    meterId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Bill',
  });
  return Bill;
};