const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Child = require("./childModel");

const Progress = sequelize.define("Progress", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  childId: { 
    type: DataTypes.UUID, 
    allowNull: false, 
    references: { model: Child, key: "id" } 
  },
  subject: { type: DataTypes.STRING, allowNull: false },
  grade: { type: DataTypes.STRING, allowNull: false },
  remarks: { type: DataTypes.TEXT },
});

module.exports = Progress;
