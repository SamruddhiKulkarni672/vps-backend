const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Student = require("./studentModel.js");

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

Student.hasMany(Payment, { foreignKey: "StudentId" });
Payment.belongsTo(Student, { foreignKey: "StudentId" });

module.exports = Payment;
