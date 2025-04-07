const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const parent = require("./parentModel");

const Student = sequelize.define("Student", {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    parentId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: parent, key: "id" },
    },
    class :{type:DataTypes.STRING, allowNull:false},
    division:{type: DataTypes.STRING, allowNull:false},
    profileImage:{type: DataTypes.BLOB, },
    fatherName:{type: DataTypes.STRING},
    motherName:{type : DataTypes.STRING},
    dOb:{type: DataTypes.STRING},
    emergency_contact:{type:DataTypes.STRING},

});

parent.hasMany(Student, { foreignKey: "parentId" });
Student.belongsTo(parent, { foreignKey: "parentId" });

module.exports = Student;
