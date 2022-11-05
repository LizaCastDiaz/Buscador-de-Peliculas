'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class series extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      series.belongsTo(models.articles);
    }
  }
  series.init({
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
    article_id_article: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'articles',
        key: 'id_article'
      }}},
  {
    sequelize,
    modelName: 'series',
    timestamps: false
  });
  return series;
};


// module.exports=series