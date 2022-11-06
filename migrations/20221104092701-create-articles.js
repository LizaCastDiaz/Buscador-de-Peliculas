'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Articles', {
      id_articles: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
  
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    //   id_rental: {
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: "Rental",
    //       key: "id_rental"
    //     },
    //     onDelete: "cascade",
    //     onUpdate: "cascade"
    // }
     });
    
  },


  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Articles');
  }
};