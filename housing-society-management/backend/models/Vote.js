// models/Vote.js
const mongoose = require("mongoose");

const VoteSchema = new mongoose.Schema({
  decision: { type: String, required: true },
  votesFor: { type: Number, default: 0 },
  votesAgainst: { type: Number, default: 0 },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Admin who created the vote
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Vote", VoteSchema);
