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
      articles.hasOne(models.id_movie);
      articles.hasOne(models.id_series);
      articles.hasOne(models.id_user);
      articles.belongsToMany(models.id_rental);
      
    }
  }
  articles.init({
    id_article: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
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