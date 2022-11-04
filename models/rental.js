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
      rental.belongsTo(models.users);
      rental.belongsToMany(models.articles)
    
      
    }
  }
  rental.init({
    id_rental: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true,
     allowNull: false
    } ,
    payment_method: DataTypes.STRING,
    return_date: DataTypes.DATE,
    rental_date: DataTypes.DATE,
    rental_price: DataTypes.INTEGER,

    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id_user'
      }
    },
    articles_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'articles',
        key: 'id_articles'
      }
      
      
    }
  }, 
  {
    sequelize,
    modelName: 'rental',
    freezeTableName: true,
    timestamps: false
  });
  return rental;
};