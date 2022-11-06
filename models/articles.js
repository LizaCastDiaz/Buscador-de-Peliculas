'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Articles.belongsToMany(models.Rental, { through: 'articlesRental', foreignKey: "article_id_article"}); 
      // Articles.belongsToMany(models.Rental
    //   Articles.hasOne(models.Movies, {
    //     foreignKey: "id_movies"
    //   });
    //   Articles.hasOne(models.Series, {
    //     foreignKey: "id_series"
    //   });
    //
    Articles.belongsToMany(models.Rental);
    Articles.hasOne(models.Movies);
    Articles.hasOne(models.Series)
   }
  }
  Articles.init({
    id_articles: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
  }, 
  {
    sequelize,
    modelName: 'Articles',

  });
  return Articles;
};
module.exports = Articles