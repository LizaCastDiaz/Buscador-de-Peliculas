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
      return_date: {
        type: Sequelize.DATE
      },
      rental_date: {
        type: Sequelize.DATE
      },


      id_user: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id_user"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      },
      id_articles: {
        type: Sequelize.INTEGER,
        references: {
          model: "Articles",
          key: "id_articles"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
      }

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rental');
  }
};