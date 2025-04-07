const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Student = require("./studentModel");

const Progress = sequelize.define("Progress", {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    StudentId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: Student, key: "id" },
    },
    subject: { type: DataTypes.STRING, allowNull: false },
    grade: { type: DataTypes.STRING, allowNull: false },
    remarks: { type: DataTypes.TEXT },
});

module.exports = Progress;
