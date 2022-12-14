'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Movie.belongsTo(models.Articles);
    }
  }
  Movie.init({
    id_movies: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    release_date: DataTypes.DATE,
    rating: DataTypes.INTEGER,
    synopsis: DataTypes.TEXT,
    director: DataTypes.STRING,
    duration: DataTypes.STRING,
    in_theters: DataTypes.BOOLEAN
  },
    {
      sequelize,
      modelName: 'Movies',
      timestamps: false


    });
  return Movie;
};
