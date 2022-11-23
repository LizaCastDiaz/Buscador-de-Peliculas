'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Serie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Serie.belongsTo(models.Articles);
    }
  }
  Serie.init({
    id_series:{
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    year: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    seasons: DataTypes.INTEGER,
    episodes: DataTypes.INTEGER,
    new_episode: DataTypes.BOOLEAN,
    Overview: DataTypes.TEXT
    
    
  },{  
    sequelize,
    modelName: 'Series',
    timestamps: false
  });
  return Serie;
};



