'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 1. Cambiar tipo de dato de 'created_by' en la tabla 'Bills'
    await queryInterface.changeColumn('Bills', 'created_by', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true
    });

    // 2. Cambiar tipo de dato de 'meterid' en la tabla 'Bills'
    await queryInterface.changeColumn('Bills', 'meterid', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Meters',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true
    });
  },

  async down(queryInterface, Sequelize) {
    // 1. Cambiar tipo de dato de 'created_by' en la tabla 'Bills'
    await queryInterface.changeColumn('Bills', 'created_by', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false
    });

    // 2. Cambiar tipo de dato de 'meterid' en la tabla 'Bills'
    await queryInterface.changeColumn('Bills', 'meterid', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Meters',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false
    });
  }
};
