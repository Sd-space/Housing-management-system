const User = require('../models/User');

// Get All Members (Admin)
exports.getAllMembers = async (req, res) => {
  try {
    const members = await User.find({ role: 'member' }).select('-password');
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get Member Profile (Member)
exports.getMemberProfile = async (req, res) => {
  try {
    const member = await User.findById(req.user.userId).select('-password');
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};
