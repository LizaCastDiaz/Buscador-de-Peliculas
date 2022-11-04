'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsTo(models.roles);
      user.hasMany(models.rental);
    }
  }
  user.init({
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    } ,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    document: DataTypes.STRING,
    email:  DataTypes.STRING,
    password: DataTypes.STRING,
    id_role: {
      type: DataTypes.STRING,
      references: {
        model: 'roles',
        key: 'id_role'
      }

    },
    id_rental: { 
      type: DataTypes.INTEGER,
      references: {
        model: 'rental',
        key:'id_rental'
      }
    }
  },
  
  {
    sequelize,
    modelName: 'user',
    freezeTableName: true,
    timestamps: false
  });
  return user;
};