const Admin = require("../../modals/adminModel.js");
const User = require("../../modals/userModel.js");
const School = require("../../modals/schoolModel.js");



const createAdmin = async (req, res) => {
    try {
        const { mobileNumber, firstname, lastname, gender, email, role } = req.body;
        const school_id= req.params.school_id;
        const existingSchool = await School.findOne({where:{school_id}})
        if (!existingSchool){
            return res.status(400).json({message: "school not found"})
        }

        const existingUser = await User.findOne({ where: { mobileNumber } });
   
        if (existingUser) {
            return res.status(400).json({ message: "Mobile Number already exists" });
        }

        const user = await User.create({
            mobileNumber,
            role,
        });

        const newAdmin = await Admin.create({
             userId: user.id,
            firstname ,
            lastname ,
            email,
            phone: mobileNumber,
            gender,
            schoolId: school_id
        });
       console.log("newadmin", newAdmin)
        return res.status(201).json({
            message: "Admin created successfully",
            user: user,
            admin: newAdmin,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Somthing Went Wrong..", error });
    }
};

const getAdmins = async (req, res) => {
    try {
      
  
      const result = await Admin.findAll({});
      // console.log(result)
  
       
      if (result.length === 0) {
        return res.status(404).json({ message: "No Admins found" });
      }
  
       
      return res.status(200).json({
        result,
         
      });
  
    } catch (error) {
      console.error('Error in getAdmins:', error);
      return res.status(500).json({ message: "Server error", error: error.message });
    }
  };



module.exports = {createAdmin, getAdmins};



