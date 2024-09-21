const express = require('express');
const { getAllMembers, getMemberProfile } = require('../controllers/memberController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

// @route   GET /api/members
// @desc    Get all members (Admin)
router.get('/', auth, getAllMembers);

// @route   GET /api/members/profile
// @desc    Get member profile (Member)
router.get('/profile', auth, getMemberProfile);

module.exports = router;
