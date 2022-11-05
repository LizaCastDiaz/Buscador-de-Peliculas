'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('series', {
      id_series: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_articles: {
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING
      },
      genre: {
        type: Sequelize.STRING
      },
      release_date: {
        type: Sequelize.DATEONLY
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
      next_episode: {
        type: Sequelize.INTEGER
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
    await queryInterface.addConstraint('series', {
      fields: ['id_articles'],
      type: 'foreign key',
      name: 'fk_series_articles',
      references: {
        table: 'articles',
        field: 'id_articles'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }) 
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('series');
  }
};