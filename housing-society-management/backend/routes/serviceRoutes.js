// routes/serviceRoutes.js
const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { requestService, getUserServices, manageService } = require("../controllers/serviceController");
const router = express.Router();

// Request a service (user)
router.post("/", protect, requestService);

// Get services for a user
router.get("/", protect, getUserServices);

// Manage service status (admin)
router.put("/:id", protect, manageService); // Admin only

module.exports = router;
