'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Series', {
      id_series: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      rating: {
        type: Sequelize.INTEGER
      },
      seasons: {
        type: Sequelize.INTEGER
      },
      episodes: {
        type: Sequelize.INTEGER
      },
      new_episode: {
        type: Sequelize.BOOLEAN
      },
      overview: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Series');
  }
};