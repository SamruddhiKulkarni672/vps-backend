const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Student = require("./studentModel");

const Payment = sequelize.define("Payment", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  StudentId: { 
    type: DataTypes.UUID, 
    allowNull: false, 
    references: { model: Student, key: "id" } 
  },
  amount: { type: DataTypes.FLOAT, allowNull: false },
  status: { 
    type: DataTypes.ENUM("paid", "pending"), 
    allowNull: false 
  },
  dueDate: { type: DataTypes.DATEONLY },
});

module.exports = Payment;
