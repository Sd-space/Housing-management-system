// controllers/eventController.js
const Event = require("../models/Event");

// Get all events (for users)
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Create a new event (admin)
exports.createEvent = async (req, res) => {
  const { title, description, date } = req.body;
  try {
    const event = new Event({
      title,
      description,
      date,
      createdBy: req.user.id,
    });

    await event.save();
    res.status(201).json(event);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Update an event (admin)
exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ msg: "Event not found" });

    // Update fields
    event.title = req.body.title || event.title;
    event.description = req.body.description || event.description;
    event.date = req.body.date || event.date;

    await event.save();
    res.json(event);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Delete an event (admin)
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ msg: "Event not found" });

    await event.remove();
    res.json({ msg: "Event removed" });
  } catch (err) {
    res.status(500).send("Server error");
  }
};
