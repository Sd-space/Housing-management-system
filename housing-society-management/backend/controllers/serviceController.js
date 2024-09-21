// controllers/serviceController.js
const Service = require("../models/Service");

// Request a service (user)
exports.requestService = async (req, res) => {
  const { serviceType, details } = req.body;

  try {
    const service = new Service({
      user: req.user.id,
      serviceType,
      details,
    });

    await service.save();
    res.status(201).json(service);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Get all services for the logged-in user
exports.getUserServices = async (req, res) => {
  try {
    const services = await Service.find({ user: req.user.id });
    res.json(services);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Manage service status (admin)
exports.manageService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ msg: "Service not found" });

    service.status = req.body.status || service.status;
    await service.save();
    res.json(service);
  } catch (err) {
    res.status(500).send("Server error");
  }
};
