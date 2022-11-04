'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    id_user: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     allowNull: false

    } ,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    document: DataTypes.STRING,
    email: DataTypes.STRING,
    password:{
      type: DataTypes.STRING,
      validate: {
        len: [1,45]
      }
    } ,
    rental_id: DataTypes.INTEGER,
    id_articles: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
    freezeTableName: true,
    timestamps: false
  });
  return user;
};