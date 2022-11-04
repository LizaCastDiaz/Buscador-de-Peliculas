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
      this.belongsTo(models.Users, {
        foreignKey: 'id_rental'
      });
      this.belongsToMany(models.Articles, {
        foreignKey: 'id_rental'
      })
    
      
    }
  }
  Rental.init({
    payment_method: DataTypes.STRING,
    return_date: DataTypes.DATE,
    rental_date: DataTypes.DATE,
    rental_price: DataTypes.INTEGER,

    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id_user'
      }
    },
    articles_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Articles',
        key: 'id_articles'
      }
      
      
    }
  }, 
  {
    sequelize,
    modelName: 'Rental',
    freezeTableName: true,
    timestamps: false
  });
  return Rental;
};