// controllers/voteController.js
const Vote = require("../models/Vote");

// Create a new decision (admin)
exports.createVote = async (req, res) => {
  const { decision } = req.body;

  try {
    const vote = new Vote({
      decision,
      createdBy: req.user.id,
    });

    await vote.save();
    res.status(201).json(vote);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Cast a vote (user)
exports.castVote = async (req, res) => {
  try {
    const vote = await Vote.findById(req.params.id);
    if (!vote) return res.status(404).json({ msg: "Decision not found" });

    const { voteFor } = req.body; // voteFor = true or false
    if (voteFor) {
      vote.votesFor += 1;
    } else {
      vote.votesAgainst += 1;
    }

    await vote.save();
    res.json(vote);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Get all votes (for users)
exports.getVotes = async (req, res) => {
  try {
    const votes = await Vote.find();
    res.json(votes);
  } catch (err) {
    res.status(500).send("Server error");
  }
};
