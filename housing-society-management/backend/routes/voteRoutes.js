// routes/voteRoutes.js
const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { createVote, castVote, getVotes } = require("../controllers/voteController");
const router = express.Router();

// Create a new decision (admin)
router.post("/", protect, createVote);

// Cast a vote (user)
router.put("/:id", protect, castVote);

// Get all decisions (for users and admin)
router.get("/", protect, getVotes);

module.exports = router;
