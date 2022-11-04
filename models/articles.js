'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  articles.init({
    id_articles: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    id_user: DataTypes.INTEGER,
    id_movie: DataTypes.INTEGER,
    id_series: DataTypes.INTEGER,
    id_rental: DataTypes.INTEGER
  }, 


  
  {
    sequelize,
    modelName: 'articles',
    freezeTableName: true,
    timestamps: false
  });
  return articles;
};