const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const User = require("../modals/userModel")


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
        type: DataTypes.ENUM("parent", "teacher", "Parent"),
        defaultValue: "parent",
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: "id",
        },
        onDelete: "CASCADE",
      },

   
});
User.hasOne(Parent, { foreignKey: "userId" });
Parent.belongsTo(User, { foreignKey: "userId" });

module.exports = Parent;
