const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const User = require("./userModel");

const Child = sequelize.define("Child", {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    parentId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: User, key: "id" },
    },
});

module.exports = Child;
