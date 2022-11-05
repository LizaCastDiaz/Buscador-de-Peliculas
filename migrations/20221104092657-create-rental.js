'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rentals', {
      id_rental: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        
      },
      return_date: {
        type: Sequelize.DATE
      },
      rental_date: {
        type: Sequelize.DATE
      },
      rental_price: {
        type: Sequelize.INTEGER
      },

      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id_user'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },




  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rentals');
  }
};