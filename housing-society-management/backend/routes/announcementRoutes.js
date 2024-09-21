const express = require('express');
const { createAnnouncement, getAllAnnouncements } = require('../controllers/announcementController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

// @route   POST /api/announcements
// @desc    Create announcement (Admin only)
router.post('/', auth, createAnnouncement);

// @route   GET /api/announcements
// @desc    Get all announcements
router.get('/', getAllAnnouncements);

module.exports = router;
