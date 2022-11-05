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
      rental.belongsToMany(models.articles, { through: 'articlesRental'})
      rental.belongsTo(models.user);

      
    }
  }
  rental.init({
    id_rental: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    return_date: DataTypes.DATE,
    rental_date: DataTypes.DATE,
    rental_price: DataTypes.INTEGER,
    
    user_id_user: {
      type: DataTypes.INTEGER,
      
        references: {
          model: 'users',
          key: 'id_user'
        },
    }, 
  }, 


  
  {
    sequelize,
    modelName: 'rental',
    freezeTableName: true,
    timestamps: false
  });
  return rental;
};