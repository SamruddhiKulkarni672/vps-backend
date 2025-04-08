const express = require("express");
const app = require("./app");
const sequelize = require("./database/database");

const PORT = process.env.PORT || 5000;

const Parent = require("./modals/parentModel");
const Student = require("./modals/studentModel");
const Attendance = require("./modals/attendenceModel");
const Progress = require("./modals/progressModel");
const Payment = require("./modals/paymentModel");
const User = require("./modals/userModel");
const School = require("./modals/schoolModel");
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

module.exports = {
  sequelize,
  Parent,
  Student,
  Attendance,
  Progress,
  Payment,
  User,
  School,
};
