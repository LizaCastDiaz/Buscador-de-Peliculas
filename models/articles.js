'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Articles.belongsToMany(models.Rental, { foreignKey: 'id_rental'} );   
      Article.hasOne(models.Movies, { foreignKey: 'id_movies' });
      Article.hasOne(models.Series, { foreignKey: 'id_series' })
    }
  }
  Article.init({
    id_articles: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,


    },
  },
    {
      sequelize,
      modelName: 'Articles',

    });
  return Article;
};
