'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) { 
      await queryInterface.bulkInsert('Rental', [
        
        {
          id_rental: 1,
          return_date: "2022-09-01",
          rental_date: "2022-10-01",
          id_user: 2,
          id_articles: 1

        },
        
      ], {});
  
    
    }, 
  

  async down (queryInterface, Sequelize) {
   
  }
};
