'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Articles', [
      {
        id_articles: 1
      },
      {
        id_articles: 2
      },
      {
        id_articles: 3
      },
      {
        id_articles: 4
      },
      {
        id_articles: 5
      },
      {
        id_articles: 6
      },
      {
        id_articles: 7
      },
      {
        id_articles: 8
      },
      {
        id_articles: 9
      },
      {
        id_articles: 10
      },
      {
        id_articles: 11
      },
      {
        id_articles: 12
      },
      {
        id_articles: 13
      },
      {
        id_articles: 14
      },
      {
        id_articles: 15
      },
      {
        id_articles: 16
      },
      {
        id_articles: 17
      },
      {
        id_articles: 18
      },
      {
        id_articles: 19
      },
      {
        id_articles: 20
      },


    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Articles', null, {});

  }
};