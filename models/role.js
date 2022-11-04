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
      this.hasMany(models.User, {
        foreignKey: 'id_role'
      })
    }
  }
  Role.init({
    name: DataTypes.STRING
  }, 
  
  
  {
    sequelize,
    modelName: 'Role',
    freezeTableName: true,
    timestamps: false
  });
  return Role;
};