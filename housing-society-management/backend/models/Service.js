// models/Service.js
const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  serviceType: { type: String, required: true }, // maid, delivery
  details: { type: String, required: true }, // Description of the service
  status: { type: String, default: "pending" }, // pending, completed
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Service", ServiceSchema);
