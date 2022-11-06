'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // User.hasMany(models.Rental, {
      //   foreignKey:" id_rental"
      // });
      // User.belongsTo(models.Role,  {
      //   foreignKey:"id_role"
      // });
      User.hasMany(models.Rental);
      User.belongsTo(models.Role);
    }
  }
  User.init({
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
    
    id_role: {
      type: DataTypes.INTEGER,
      references: {
        model: "Role",
        key: "id_role"
      },
      onDelete: "cascade",
      onUpdate: "cascade"
  }
  },
  
  {
    sequelize,
    modelName: 'User',
    // freezeTableName: true,
    // timestamps: false
  });
   return User;
};

module.exports = User