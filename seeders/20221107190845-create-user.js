'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        id_user: 1,
        name: "Raphael",
        surname: "Franco",
        document: "32234322",
        email: "franco@gmail.com",
        password: "12345660",
        RoleIdRole: "Admin",
      }, {
        id_user: 2,
        name: "Jose",
        surname: "Picon",
        document: "12309845",
        email: "jose@gmail.com",
        password: "12300909",
        RoleIdRole: "User",
      }, {
        id_user: 3,
        name: "Andres",
        surname: "Pulgarin",
        document: "12300009",
        email: "andres@gmail.com",
        password: "32339283",
        RoleIdRole: "User",
      }, {
        id_user: 4,
        name: "Sebastian",
        surname: "Duque",
        document: "129933884",
        email: "sebastian@gmail.com",
        password: "112833382",
        RoleIdRole: "User",
      }, {
        id_user: 5,
        name: "Carlos",
        surname: "Pelaez",
        document: "544337288",
        email: "carlos@gmail.com",
        password: "338448557",
        RoleIdRole: "User",
      }, {
        id_user: 6,
        name: "Liza",
        surname: "Castrillon",
        document: "2238443644",
        email: "liza@gmail.com",
        password: "222833374",
        RoleIdRole: "User",
      }, {
        id_user: 7,
        name: "Salome",
        surname: "Diaz",
        document: "333948438",
        email: "salome@gmail.com",
        password: "33484547",
        RoleIdRole: "User",
      }, {
        id_user: 8,
        name: "Indira",
        surname: "Vanegas",
        document: "33394833",
        email: "indira@gmail.com",
        password: "30329432",
        RoleIdRole: "User",
      }, {
        id_user: 9,
        name: "Judy",
        surname: "Cecil",
        document: "3323928",
        email: "judy@gmail.com",
        password: "2338374",
        RoleIdRole: "User",
      }, {
        id_user: 10,
        name: "Esperanza",
        surname: "Cuartas",
        document: "33928347",
        email: "esperanza@gmail.com",
        password: "33384363",
        RoleIdRole: "User",
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
