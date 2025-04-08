const School = require("../../modals/schoolModel.js");

// http://localhost:5000/school/school/createschool
const createSchool = async (req, res) => {
  try {
    const {
      name,
      location,
      city,
      state,
      postal_code,
      country,
      establish_year,
      school_id,
      udis_no,
    } = req.body;

    const existingSchool = await School.findOne({ where: { udis_no } });
    if (existingSchool) {
      return res.status(400).json({ message: "school already exists" });
    }

    const createSchool = await School.create(req.body);

    return res.status(201).json({
      message: "school created successfully",
      school: createSchool,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "error creating school" });
  }
};

// http://localhost:5000/school/school/123
const getSchool = async (req, res) => {
  const { udis_no } = req.params.sid;
  try {
    const existingSchool = await School.findOne({ where: udis_no });
    if (!existingSchool) {
      return res.status(400).json({ message: "school not found" });
    }

    const school = await School.findOne(udis_no);

    return res.status(200).json({
      message: "school found successfully",
      school: school,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "error getting school" });
  }
};

//http:localhost:5000/school/school/getallschools
const getAllSchools = async (req, res) => {
  try {
    const existingSchools = await School.findAll();
    console.log("all schools");
    console.log(existingSchools);
    if (!existingSchools) {
      return res.status(400).json({ message: "schools not found" });
    }

    return res.status(200).json({
      message: "school found successfully",
      school: existingSchools,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "error getting school" });
  }
};

// http://localhost:5000/school/school/123
const deleteSchool = async (req, res) => {
  const udis_no = req.params.sid;

  try {
    const existingSchool = await School.findOne({ where: { udis_no } });
    if (!existingSchool) {
      return res.status(404).json({ message: "School not found" });
    }

    await School.destroy({ where: { udis_no } });

    return res.status(200).json({
      message: "School deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error while deleting school" });
  }
};

module.exports = { createSchool, getSchool, getAllSchools, deleteSchool };
