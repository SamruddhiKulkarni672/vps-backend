const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Admin = sequelize.define("Parent", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  gender: {
    type: DataTypes.ENUM("male", "female", "other"),

    allowNull: false,
  },
});

module.exports = Admin;
