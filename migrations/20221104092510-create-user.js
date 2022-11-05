'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
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
      id_role: {
        type: Sequelize.INTEGER,
    },
   
      // id_rental: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: 'Rental',
      //     key: 'id_rental'
      //   }
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint('user', {
      fields: ['id_role'],
      type: 'foreign key',
      name: 'fk_user_role',
      references: {
        table: 'role',
        field: 'id_role'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    }) 
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};