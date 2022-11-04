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
    id_series: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    series_title: DataTypes.STRING,
    genre: DataTypes.STRING,
    release_date: DataTypes.DATEONLY,
    rating: DataTypes.INTEGER,
    id_articles: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'articles',
        key: 'id_article'
      }
    }
  },
  
  {
    sequelize,
    modelName: 'series',
    freezeTableName: true,
    timestamps: false
  });
  return series;
};


module.exports=series