const { DataTypes } = require('sequelize');
const sequelize = require("../database/database");

const User = sequelize.define('User', {
  mobileNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  role: {
    type: DataTypes.ENUM(" parent", "admin", "teacher", "school","superAdmin","student"),
    defaultValue: "parent",
    allowNull: false
  },

  otp: {
    type: DataTypes.STRING,
    allowNull: true, 
  },

  otpCreatedAt: {
    type: DataTypes.DATE, 
    allowNull: true,
  },

  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  
});

module.exports = User;
