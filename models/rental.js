'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rental.init({
    id_rental: DataTypes.INTEGER,
    payment_method: DataTypes.STRING,
    return_date: DataTypes.DATE,
    rental_date: DataTypes.DATE,
    rental_price: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    articles_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'rental',
  });
  return rental;
};