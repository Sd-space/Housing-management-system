// routes/issueRoutes.js
const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { reportIssue, getUserIssues, manageIssue } = require("../controllers/issueController");
const router = express.Router();

// Report an issue (user)
router.post("/", protect, reportIssue);

// Get all issues for the logged-in user
router.get("/", protect, getUserIssues);

// Manage issue status (admin)
router.put("/:id", protect, manageIssue); // Admin only

module.exports = router;
