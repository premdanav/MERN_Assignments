const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  age: {
    type: Number,
  },
  favouriteDish: {
    type: String,
  },
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
