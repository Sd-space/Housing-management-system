const Announcement = require('../models/Announcement');

// Create Announcement (Admin)
exports.createAnnouncement = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newAnnouncement = new Announcement({
      title,
      description,
      createdBy: req.user.userId,
    });
    await newAnnouncement.save();
    res.status(201).json(newAnnouncement);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get All Announcements (Public)
exports.getAllAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find().populate('createdBy', 'name');
    res.status(200).json(announcements);
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};
