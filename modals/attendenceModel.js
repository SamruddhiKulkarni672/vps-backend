const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Child = require("./childModel");

const Attendance = sequelize.define("Attendance", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  childId: { 
    type: DataTypes.UUID, 
    allowNull: false, 
    references: { model: Child, key: "id" } 
  },
  date: { type: DataTypes.DATEONLY, allowNull: false },
  status: { 
    type: DataTypes.ENUM("present", "absent", "late"), 
    allowNull: false 
  },
});

module.exports = Attendance;
