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
    await queryInterface.addConstraint('rentals', {
      fields: ['id_user'],
      type: 'foreign key',
      name: 'fk_rental_users',
      references: {
        table: 'user',
        field: 'id_user'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }) 
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rentals');
  }
};