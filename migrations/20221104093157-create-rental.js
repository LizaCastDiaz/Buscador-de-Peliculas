'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rentals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      payment_method: {
        type: Sequelize.STRING
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
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id_user'
        }
      },
      articles_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Article',
          key: 'id_article'
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
    await queryInterface.dropTable('Rentals');
  }
};