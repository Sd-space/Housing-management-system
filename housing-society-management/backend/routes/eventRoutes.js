// routes/eventRoutes.js
const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { getEvents, createEvent, updateEvent, deleteEvent } = require("../controllers/eventController");
const router = express.Router();

// User Routes (view events)
router.get("/", protect, getEvents);

// Admin Routes (create, update, delete events)
router.post("/", protect, createEvent);      // Admin only
router.put("/:id", protect, updateEvent);    // Admin only
router.delete("/:id", protect, deleteEvent); // Admin only

module.exports = router;
