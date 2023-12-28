const bcrypt = require("bcrypt");
const Customer = require("../models/customerModel");

const register = async (req, res) => {
  try {
    const { username, email, password, age, favouriteDish } = req.body;
    //encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10);

    //customer with encrypted password
    const hashedCustomer = new Customer({
      username,
      email,
      password: encryptedPassword,
      age,
      favouriteDish,
    });

    //saving in db
    await hashedCustomer.save();
    res.status(201).json({ message: "customer created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = register;
