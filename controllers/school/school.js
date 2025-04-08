const School = require("../../modals/schoolModel.js");

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
  udis_no = req.params.sid;
  try {
    const existingSchool = await School.findOne({ where: { udis_no } });
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
const getAllSchools = async (req, res) => {
  try {
    const existingSchool = await School.findAll();
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

module.exports = { createSchool, getSchool };
