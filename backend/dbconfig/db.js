const mongoose = require("mongoose");
const dotenv = require("dotenv");

//configuration of dotenv
dotenv.config();
const MONGO_URI = process.env.MONGO_URI;
// console.log(`mongo uri is ${MONGO_URI}`);

const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI).then(() => {
      console.log("database connected sucessfully");
    });
  } catch (err) {
    console.log(`Error while connecting to database ${err}`);
    //exit the process
    process.exit(1);
  }
};

module.exports = { connectDb };
