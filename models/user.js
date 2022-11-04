'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.roles, {
        foreignKey: 'id_user'
      });
      this.hasMany(models.rental, {
        foreignKey: 'id_user'
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    document: DataTypes.STRING,
    email:  DataTypes.STRING,
    password: DataTypes.STRING 
  },
  
  {
    sequelize,
    modelName: 'User',
    freezeTableName: true,
    timestamps: false
  });
  return User;
};