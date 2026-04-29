const sequelize = require('../config/db');
const User = require('./User');
const Meter = require('./Meter');
const Factura = require('./Factura');
const Measure = require('./Measure');
const Group = require('./Group');
const UserTokens = require('./UserTokens');

// Relations
Meter.belongsTo(User, { foreignKey: 'owner_meter', as: 'owner' });
User.hasMany(Meter, { foreignKey: 'owner_meter', as: 'meters' });

Factura.belongsTo(Meter, { foreignKey: 'meterid', as: 'meter' });
Meter.hasMany(Factura, { foreignKey: 'meterid', as: 'facturas' });

Factura.belongsTo(User, { foreignKey: 'userid', as: 'user' });
User.hasMany(Factura, { foreignKey: 'userid', as: 'facturas' });

Measure.belongsTo(User, { foreignKey: 'take_by', as: 'taker' });
User.hasMany(Measure, { foreignKey: 'take_by', as: 'measures' });

Measure.belongsTo(Meter, { foreignKey: 'meter', as: 'measured_meter' });
Meter.hasMany(Measure, { foreignKey: 'meter', as: 'measures' });

User.belongsToMany(Group, { through: 'Users_groups', foreignKey: 'userid', otherKey: 'groupid', timestamps: false });
Group.belongsToMany(User, { through: 'Users_groups', foreignKey: 'groupid', otherKey: 'userid', timestamps: false });

UserTokens.belongsTo(User, { foreignKey: 'userid', as: 'user' });
User.hasMany(UserTokens, { foreignKey: 'userid', as: 'tokens' });

module.exports = {
  sequelize,
  User,
  Meter,
  Factura,
  Measure,
  Group,
  UserTokens
};
