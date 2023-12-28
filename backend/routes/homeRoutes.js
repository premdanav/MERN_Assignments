const express = require("express");
const home = require("../controllers/homeController");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

//verify token before home
router.get("/home", verifyToken, home);
module.exports = router;
