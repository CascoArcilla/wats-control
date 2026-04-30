'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Meters table: owner_meter -> userId
    await queryInterface.renameColumn('Meters', 'owner_meter', 'userId');

    // Bills table: meterid -> meterId, created_by -> userId
    await queryInterface.renameColumn('Bills', 'meterid', 'meterId');
    await queryInterface.renameColumn('Bills', 'created_by', 'userId');

    // Measures table: meter -> meterId, take_by -> userId
    await queryInterface.renameColumn('Measures', 'meter', 'meterId');
    await queryInterface.renameColumn('Measures', 'take_by', 'userId');
  },

  async down (queryInterface, Sequelize) {
    // Reverse changes
    await queryInterface.renameColumn('Meters', 'userId', 'owner_meter');
    await queryInterface.renameColumn('Bills', 'meterId', 'meterid');
    await queryInterface.renameColumn('Bills', 'userId', 'created_by');
    await queryInterface.renameColumn('Measures', 'meterId', 'meter');
    await queryInterface.renameColumn('Measures', 'userId', 'take_by');
  }
};
