'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  movies.init({
    id_movies: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    movie_title: DataTypes.STRING,
    genre: DataTypes.STRING,
    release_date: DataTypes.DATEONLY,
    rating: DataTypes.INTEGER,
    synopsis: DataTypes.STRING,
    director: DataTypes.STRING,
    id_articles: DataTypes.INTEGER
  }, 
  {
    sequelize,
    modelName: 'movies',
    freezeTableName: true,
    timestamps: false
  });
  return movies;
};