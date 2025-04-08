const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const parent = require("./parentModel");

const Student = sequelize.define("Student", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  firstname: { type: DataTypes.STRING(50), allowNull: false },
  middlename: { type: DataTypes.STRING(50), allowNull: false },
  lastname: { type: DataTypes.STRING(50), allowNull: false },

  parentId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: { model: parent, key: "id" },
  },
  class: { type: DataTypes.STRING(10), allowNull: false },
  division: { type: DataTypes.STRING(5), allowNull: false },

  profileImage: { type: DataTypes.BLOB("long"), allowNull: true },

  motherName: { type: DataTypes.STRING(100), allowNull: true },
  dob: { type: DataTypes.STRING, allowNull: true }, // changed from STRING to DATEONLY

  email: {
    type: DataTypes.STRING(100),
    allowNull: true,
    validate: { isEmail: true },
  },

  gender: { type: DataTypes.ENUM("male", "female", "other"), allowNull: false },

  religion: {
    type: DataTypes.ENUM(
      "Hinduism",
      "Islam",
      "Christianity",
      "Sikhism",
      "Buddhism",
      "Jainism",
      "Zoroastrianism",
      "Judaism",
      "Bahá'í",
      "Atheist",
      "Other"
    ),
    allowNull: false,
  },

  cast: { type: DataTypes.STRING(50), allowNull: false },
  nationality: { type: DataTypes.STRING(50), allowNull: false },
  birth_place: { type: DataTypes.STRING(100), allowNull: false },

  admission_date: { type: DataTypes.DATEONLY, allowNull: false }, // changed from STRING to DATEONLY

  address: { type: DataTypes.TEXT, allowNull: false }, // changed from STRING to TEXT
});

parent.hasMany(Student, { foreignKey: "parentId" });
Student.belongsTo(parent, { foreignKey: "parentId" });

module.exports = Student;
