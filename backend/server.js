const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const homeRoutes = require("./routes/homeRoutes");
const { connectDb } = require("./dbconfig/db");

//express app
const app = express();

//environment variable configuration
dotenv.config();
const PORT = process.env.PORT;
// console.log(PORT);

//securities
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use("/auth", authRoutes);
app.use("/rest", homeRoutes);
//conneting with db
connectDb();

//starting server
app.listen(PORT, () => {
  console.log("server is listening on " + PORT);
});
