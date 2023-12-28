const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Customer = require("../models/customerModel");
const dotenv = require("dotenv");

//dotenv configuration
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //find customer
    const customer = await Customer.findOne({ email });
    console.log(`customer after finding is ${customer}`);

    //if customer does not exists
    if (!customer) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    const decryptedPassword = await bcrypt.compare(password, customer.password);

    //if password is not correct or doest not exists
    if (!decryptedPassword) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    //assign token
    const token = jwt.sign({ customerId: customer._id }, SECRET_KEY);

    //send response data
    const responseData = {
      token,
      customer: {
        username: customer.username,
        email: customer.email,
        age: customer.age,
        favouriteDish: customer.favouriteDish,
      },
    };

    console.log(`resonse data is ${responseData}`);
    res.status(200).json(responseData);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = login;
