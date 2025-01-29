const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");

// Auth routes
router.post("/register", register); // Register a new user
router.post("/login", login);       // Login user

module.exports = router;
