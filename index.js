const express = require("express");
const app = require("./app");
const sequelize  = require("./database/database");

const PORT = process.env.PORT || 5000;

 
const User = require("./modals/userModel");
const Child = require("./modals/childModel");
const Attendance = require("./modals/attendenceModel");
const Progress = require("./modals/progressModel");
const Payment = require("./modals/payementModel");

 
User.hasMany(Child, { foreignKey: "parentId" });
Child.belongsTo(User, { foreignKey: "parentId" });

Child.hasMany(Attendance, { foreignKey: "childId" });
Attendance.belongsTo(Child, { foreignKey: "childId" });

Child.hasMany(Progress, { foreignKey: "childId" });
Progress.belongsTo(Child, { foreignKey: "childId" });

Child.hasMany(Payment, { foreignKey: "childId" });
Payment.belongsTo(Child, { foreignKey: "childId" });

 
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to the database successfully.");

    await sequelize.sync({ alter: true });  

   
    const tables = await sequelize.getQueryInterface().showAllTables();
    console.log("Tables in DB:", tables);

    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error", error);
    console.error("Unable to start the server:", error);
  }
})();

module.exports = { sequelize, User, Child, Attendance, Progress, Payment };
