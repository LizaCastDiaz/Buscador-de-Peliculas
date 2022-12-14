'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id_user: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      document: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },

      RoleIdRole: {
        type: Sequelize.STRING,
        references: {
          model: "Role",
          key: "id_role"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
    });


  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};