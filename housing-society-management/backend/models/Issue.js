// models/Issue.js
const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  issueType: { type: String, required: true }, // e.g., maintenance, complaint
  description: { type: String, required: true },
  status: { type: String, default: "open" }, // open, resolved
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Issue", IssueSchema);
