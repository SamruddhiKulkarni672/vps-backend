const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const School= require("./schoolModel")
const User = require("./userModel")

const Admin = sequelize.define("Admin", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: true,
  },
  gender: {
    type: DataTypes.ENUM("male", "female", "other"),
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
    onDelete: "CASCADE",
    onUpdate: 'CASCADE',
  },

  schoolId:{
    type: DataTypes.STRING,
    references:{
      model:School,
      key:"school_id",
    }
  }

  

});
User.hasMany(Admin, { foreignKey: "userId" });
Admin.belongsTo(User, { foreignKey: "userId" });


School.hasMany(Admin, { foreignKey: "schoolId" });
Admin.belongsTo(School, { foreignKey: "schoolId" });



module.exports = Admin;
