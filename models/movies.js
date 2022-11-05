'use strict';
const {
  Model
} = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/types/query-types');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      movies.belongsTo(models.articles);
    }
  }
  movies.init({
    id_movies:{
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    release_date: DataTypes.DATEONLY,
    rating: DataTypes.INTEGER,
    synopsis: DataTypes.STRING,
    director: DataTypes.STRING,
    duration: DataTypes.STRING,  
    
    article_id_article: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'articles',
      key: 'id_article'
    }}},
    {
    sequelize,
    modelName: 'movies',
    timestamps: false
  });
  return movies;
};