'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rental', [

      {
        id_rental: 1,
        email: "jose@gmail.com",
        return_date: "2022-09-01",
        rental_date: "2022-10-01",
        id_user: 2,
        id_articles: 1

      },
      {
        id_rental: 2,
        email: "andres@gmail.com",
        return_date: "2022-09-01",
        rental_date: "2022-10-01",
        id_user: 3,
        id_articles: 2

      },
      {
        id_rental: 3,
        email: "sebastian@gmail.com",
        return_date: "2022-09-01",
        rental_date: "2022-10-01",
        id_user: 4,
        id_articles: 4

      },
      {
        id_rental: 5,
        email: "liza@gmail.com",
        return_date: "2022-09-01",
        rental_date: "2022-10-01",
        id_user: 6,
        id_articles: 12

      },
      {
        id_rental: 6,
        email: "salome@gmail.com",
        return_date: "2022-09-01",
        rental_date: "2022-10-01",
        id_user: 7,
        id_articles: 11

      },
    ], {});


  },


  async down(queryInterface, Sequelize) {

  }
};
