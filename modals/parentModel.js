const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Parent = sequelize.define("Parent", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    role: {
        type: DataTypes.ENUM("parent", "teacher", "admin"),
        defaultValue: "parent",
        allowNull: false,
    },

    otp: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    otpCreatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
});

module.exports = Parent;
