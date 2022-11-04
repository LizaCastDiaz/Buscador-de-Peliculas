'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  role.init({
    id_role: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false

    } 
  }, 
  {
    sequelize,
    modelName: 'role',
    freezeTableName: true,
    timestamps: false
  });
  return role;
};