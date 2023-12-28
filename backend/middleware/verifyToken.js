const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

//dot env config
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
  //getting token from headers
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  //if token not found
  if (!token) {
    return res.status(401).json({ message: "Unauthorized Customer" });
  }
  console.log("token received");
  jwt.verify(token, SECRET_KEY, (error, customer) => {
    //if token not verified
    if (error) {
      console.log(`error while verifyling ${error}`);
      return res.status(403).json({ message: "Forbidden" });
    }
    req.customer = customer;
    //without next the middleware would not pass it to the controller
    next();
  });
};
module.exports = verifyToken;
