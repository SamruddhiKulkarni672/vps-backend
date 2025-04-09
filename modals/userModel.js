const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,  
        autoIncrement: true,
        allowNull: false,
      },


    mobileNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    role: {
        type: DataTypes.ENUM("parent", "admin", "teacher", "school", "superAdmin", "student"),
        defaultValue: "parent",
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
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

module.exports = User;
