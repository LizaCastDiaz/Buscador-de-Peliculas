'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies', {
      id_movies: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_articles: {
        type: Sequelize.INTEGER
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
      synopsis: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
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
    await queryInterface.addConstraint('movies', {
      fields: ['id_articles'],
      type: 'foreign key',
      name: 'fk_movies_articles',
      references: {
        table: 'articles',
        field: 'id_articles'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }) 
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies');
  }
};