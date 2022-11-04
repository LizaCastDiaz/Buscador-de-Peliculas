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
      this.belongsTo(models.articles,{
        foreignKey: 'id_series'
      });
    }
  }
  series.init({
    series_title: DataTypes.STRING,
    genre: DataTypes.STRING,
    release_date: DataTypes.DATEONLY,
    rating: DataTypes.INTEGER,

  },
  
  {
    sequelize,
    modelName: 'Series',
    freezeTableName: true,
    timestamps: false
  });
  return series;
};


module.exports=series