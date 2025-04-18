const express = require("express");
const {
  createSchool,
  getSchool,
  getAllSchools,
  deleteSchool,
} = require("../controllers/school/school.js");
const {signUp, signin}= require("../controllers/authContoller.js")
const { createAdmin, getAdmins,} = require("../controllers/admin/admin.js")
const router = express.Router();
 

// router.get("/school/:sid");
router.post("/createschool", createSchool);
router.get("/getallschools", getAllSchools);
router.get("/school/:sid", getSchool);
router.delete("/school/:sid", deleteSchool);
// router.put("/school/:sid");

// ! Admin routes

router.post("/createAdmin/:school_id",createAdmin);
router.get("/getadmins", getAdmins);
// router.get("/admin/:aid");
// router.delete("/admin/:aid");
// router.put("/admin/:aid");

// ! parent routes

// router.post("/createparent");
// router.get("/getallparent");
// router.get("/parent/:pid");
// router.delete("/parent/:pid");
// router.put("/parent/:pid");

// ! teacher routes

// router.post("/createteacher", );
// router.get("/getallteacher");
// router.get("/teacher/:tid");
// router.delete("/teacher/:tid");
// router.put("/teacher/:tid");

// ! students routes

// router.post("/createstudent");
// router.get("/getallstudents");
// router.get("/student/:sid");
// router.delete("/student/:sid");
// router.put("/student/:sid");

// ! auth routes
router.post("/signup" ,signUp)
router.post("/signin", signin)
// router.post("/send-otp");
// router.post("/verify-otp");
 

// ! attendance routes
// router.get("/attendance/year/:sid");
// router.get("/attendance/month/:sid");

// ! payment routes
// router.get("/payment/all/:sid");
// router.get("/payment/paid/:sid");

module.exports = router;
