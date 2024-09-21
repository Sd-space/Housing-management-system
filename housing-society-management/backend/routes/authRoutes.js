// routes/authRoutes.js
const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const router = express.Router();

// Register a new user
router.post("/register", registerUser);

// Login user and get a token
router.post("/login", loginUser);

module.exports = router;
