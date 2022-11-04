'use strict';
const {
  Model
} = require('sequelize');
const { FOREIGNKEYS } = require('sequelize/types/query-types');
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Articles, {
        foreignKey: 'movies_id'
      });
    }
  }
  Movies.init({
    movie_title: DataTypes.STRING,
    genre: DataTypes.STRING,
    release_date: DataTypes.DATEONLY,
    rating: DataTypes.INTEGER,
    synopsis: DataTypes.STRING,
    director: DataTypes.STRING, 
  }, 

  {
    sequelize,
    modelName: 'Movies',
    freezeTableName: true,
    timestamps: false
  });
  return Movies;
};