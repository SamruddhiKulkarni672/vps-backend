require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const secret_key = process.env.SECRET_KEY;
  const time = {
    expiresIn: "24h",
  };

  const token = jwt.sign(user, secret_key, time);
  return token;
};



const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // console.log(decoded);
    return { success: true, user: decoded };
  } catch (error) {
    return { success: false, error: error.message };
  }
};



const authenticateToken = (req, res, next) => {
  let token;
  const authHeader =
    req.headers["authorization"] || req.headers["Authorization"];

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Token is not provided" });
    }
  }

  const result = verifyToken(token);
  if (!result.success) {
    return res.status(403).json({ message: result.error });
  }
  req.user = result.user;
  next();
};

module.exports = { generateToken, authenticateToken, verifyToken };