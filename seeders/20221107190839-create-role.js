'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [
      {
        id_role: "Admin"
      },
      {
        id_role: "User"
      },
    ], {});

  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Role', null, {});
  }
};
