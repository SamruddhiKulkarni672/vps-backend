const express = require("express");
const app = require("./app");
const sequelize  = require("./database/database");

const PORT = process.env.PORT || 5000;

 
const User = require("./modals/parentModel");
const Student = require("./modals/studentModel");
const Attendance = require("./modals/attendenceModel");
const Progress = require("./modals/progressModel");
const Payment = require("./modals/payementModel");

 
 

Student.hasMany(Attendance, { foreignKey: "StudentId" });
Attendance.belongsTo(Student, { foreignKey: "StudentId" });

Student.hasMany(Progress, { foreignKey: "StudentId" });
Progress.belongsTo(Student, { foreignKey: "StudentId" });

Student.hasMany(Payment, { foreignKey: "StudentId" });
Payment.belongsTo(Student, { foreignKey: "StudentId" });

 
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

module.exports = { sequelize, User, Student, Attendance, Progress, Payment };
