// controllers/issueController.js
const Issue = require("../models/Issue");

// Report an issue (user)
exports.reportIssue = async (req, res) => {
  const { issueType, description } = req.body;

  try {
    const issue = new Issue({
      user: req.user.id,
      issueType,
      description,
    });

    await issue.save();
    res.status(201).json(issue);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Get all issues for the logged-in user
exports.getUserIssues = async (req, res) => {
  try {
    const issues = await Issue.find({ user: req.user.id });
    res.json(issues);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Manage issue status (admin)
exports.manageIssue = async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) return res.status(404).json({ msg: "Issue not found" });

    issue.status = req.body.status || issue.status;
    await issue.save();
    res.json(issue);
  } catch (err) {
    res.status(500).send("Server error");
  }
};
