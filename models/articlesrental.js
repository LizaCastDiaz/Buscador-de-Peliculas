'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class articlesRental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  articlesRental.init({
    article_id_article: DataTypes.INTEGER, 
    rental_id_rental: DataTypes.INTEGER 
  },
   {
    sequelize,
    modelName: 'articlesRental',
  });
  return articlesRental;
};