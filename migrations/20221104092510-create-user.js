'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id_user: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      document: {
        type: Sequelize.STRING
      },
      email:  { type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },


      
      id_role: {
        type: Sequelize.INTEGER,
        references: {
          model: "Role",
          key: "id_role"
        },
        onDelete: "cascade",
        onUpdate: "cascade"
    },
  //   id_articles: { //borrar
  //     type: Sequelize.INTEGER,
  //     references: {
  //       model: "Articles",
  //       key: "id_articles"
  //     },
  //     onDelete: "cascade",
  //     onUpdate: "cascade"
  // }
    });
    
    // await queryInterface.addConstraint('Role', {
    //   fields: ['id_role'],
    //   type: 'foreign key',
    //   name: 'fk_user_role',
    //   references: {
    //     table: 'Role',
    //     field: 'id_role'
    //   },
    //   onDelete: 'cascade',
    //   onUpdate: 'cascade'
    // }) 
  
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};