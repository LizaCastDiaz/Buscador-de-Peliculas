'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
      id_movies: {
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
      release_date: {
        type: Sequelize.DATE
      },
      rating: {
        type: Sequelize.INTEGER
      },
      synopsis: {
        type: Sequelize.TEXT
      },
      director: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      in_theters: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Movies');
  }
};