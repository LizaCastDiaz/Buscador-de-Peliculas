'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rentals', {
      id_rental: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        
      },
      // id_user: {
      //   type: Sequelize.INTEGER
      // },
      return_date: {
        type: Sequelize.DATE
      },
      rental_date: {
        type: Sequelize.DATE
      },
      rental_price: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      id_user: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",//borrar s
          key: "id_user"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
    }
    });
    // await queryInterface.addConstraint('Rentals', {
    //   fields: ['id_user'],
    //   type: 'foreign key',
    //   name: 'fk_rental_users',
    //   references: {
    //     table: 'User',
    //     field: 'id_user'
    //   },
    //   onDelete: 'cascade',
    //   onUpdate: 'cascade'
    // }) 
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rentals');
  }
};