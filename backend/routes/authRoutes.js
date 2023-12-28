const express = require("express");
const register = require("../controllers/registerController");
const login = require("../controllers/loginController");
const router = express.Router();

//register router
router.post("/register", register);

//login router
router.post("/login", login);

module.exports = router;
