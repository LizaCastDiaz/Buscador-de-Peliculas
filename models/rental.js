'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Rental.belongsToMany(models.Articles, { through: 'articlesRental', foreignKey: "rental_id_rental"})
      // Rental.belongsTo(models.User, {foreignKey: "id_user"});

      Rental.belongsTo(models.User);
    }
  }
  Rental.init({
    id_rental: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    return_date: DataTypes.DATE,
    rental_date: DataTypes.DATE,
    rental_price: DataTypes.INTEGER,
    
    id_user: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id_user"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
  }
   }, 

  
  {
    sequelize,
    modelName: 'Rental',

  });
  return Rental;
};
module.exports = Rental