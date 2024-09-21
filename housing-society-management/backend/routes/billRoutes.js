// routes/billRoutes.js
const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { getBills, createBill, payBill } = require("../controllers/billController");
const router = express.Router();

// Get user bills
router.get("/", protect, getBills);

// Create new bill (admin)
router.post("/", protect, createBill);  // Admin only

// Pay bill
router.put("/pay/:id", protect, payBill); // User

module.exports = router;
