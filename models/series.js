'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Series extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Series.belongsTo(models.Articles);
    }
  }
  Series.init({
    id_series:{
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    year: DataTypes.DATEONLY,
    rating: DataTypes.INTEGER,
    seasons: DataTypes.INTEGER,
    episodes: DataTypes.INTEGER,
    next_episode: DataTypes.DATEONLY,
    
    
  },{  
    sequelize,
    modelName: 'Series',
  });
  return Series;
};
module.exports = Series


