const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Student = require("./studentModel");

const Attendance = sequelize.define("Attendance", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  StudentId: { 
    type: DataTypes.UUID, 
    allowNull: false, 
    references: { model: Student, key: "id" } 
  },
  date: { type: DataTypes.DATEONLY, allowNull: false },
  status: { 
    type: DataTypes.ENUM("present", "absent", "late"), 
    allowNull: false 
  },
});

module.exports = Attendance;
