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
      this.hasOne(models.id_movie);
      this.hasOne(models.id_series);
      this.hasOne(models.id_user);
      this.belongsToMany(models.id_rental);
      
    }
  }
  Articles.init({
    id_article: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
  }, 
  {
    sequelize,
    modelName: 'Articles',
    freezeTableName: true,
    timestamps: false
  });
  return Articles;
};