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
      user.hasMany(models.rental);
      user.belongsTo(models.roles);
      
    }
  }
  user.init({
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    document: {
      type:DataTypes.STRING,
      unique: true,
    },
    email: {
      type:DataTypes.STRING,
      unique:true,
      allowNull:false,

    },
    password: DataTypes.STRING ,
    
    role_id_role:{
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'roles',
          key: 'id_role'
      }
  },
  },
  
  {
    sequelize,
    modelName: 'user',
    freezeTableName: true,
    timestamps: false
  });
  return user;
};