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
      User.hasMany(models.Rentals);
      User.belongsTo(models.Role);
    }
  }
  // Model attributes are defined here
  User.init({
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    document: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,

    },
    password: DataTypes.STRING,


  },

    {
      sequelize,
      modelName: 'Users',
    });
  return User;
};

