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
      articles.hasOne(models.movies);
      articles.hasOne(models.series);
      articles.belongsToMany(models.rental, { through: 'articlesRental'}); 
    }
  }
  articles.init({
    id_article: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
  }, 
  {
    sequelize,
    modelName: 'articles',
    timestamps: false
  });
  return articles;
};