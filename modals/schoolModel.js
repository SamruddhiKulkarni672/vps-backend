const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const School = sequelize.define("School", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  postal_code: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  establish_year: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1800,
      max: new Date().getFullYear(),
    },
  },
  school_logo: {
    type: DataTypes.BLOB("long"),
    allowNull: true,
  },
  school_id: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  udis_no: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
  },
});

module.exports = School;
