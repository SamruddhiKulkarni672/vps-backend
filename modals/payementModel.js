const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Child = require("./childModel");

const Payment = sequelize.define("Payment", {
  id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
  childId: { 
    type: DataTypes.UUID, 
    allowNull: false, 
    references: { model: Child, key: "id" } 
  },
  amount: { type: DataTypes.FLOAT, allowNull: false },
  status: { 
    type: DataTypes.ENUM("paid", "pending"), 
    allowNull: false 
  },
  dueDate: { type: DataTypes.DATEONLY },
});

module.exports = Payment;
