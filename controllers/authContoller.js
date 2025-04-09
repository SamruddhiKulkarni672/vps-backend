const User = require("../modals/userModel");
const generateOTP = require("../utils/generateOtp.js");
const { generateToken } = require("../utils/Token.js");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");



const signUp = async (req, res) => {
    try {
        const { mobileNumber, firstName, lastName, birthDate, email , role, password} = req.body;

        const existingUser = await User.findOne({
            where: { mobileNumber },
        });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = await User.create({
            mobileNumber,
            role,
            email,
            password

        });

        return res.status(201).json({
            message: "User created successfully",
            name: firstName,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Somthing Went Wrong..", error });
    }
};

const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user || user.role === "parent") {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // const match = await bcrypt.compare(password, user.password);

        const match = password==user.password

        
        if (!match) return res.status(401).json({ message: "Invalid credentials password" });

        // const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1d" });

        // res.json({ token });

        res.json({ message: " sign in success" })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Somthing Went Wrong..", error });
    }
};

module.exports = {signUp, signin};
