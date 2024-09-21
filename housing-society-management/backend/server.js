// app.js
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");
const billRoutes = require("./routes/billRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const issueRoutes = require("./routes/issueRoutes");
const voteRoutes = require("./routes/voteRoutes");

// Load environment variables
dotenv.config();

// Initialize the app
const app = express();

// Middleware
app.use(express.json()); // Body parser to handle JSON requests
app.use(cors()); // Enable CORS to allow cross-origin resource sharing

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// API routes
app.use("/api/auth", authRoutes);        // Authentication routes
app.use("/api/events", eventRoutes);     // Event management routes
app.use("/api/bills", billRoutes);       // Bill payment routes
app.use("/api/services", serviceRoutes); // Home services routes
app.use("/api/issues", issueRoutes);     // Issue reporting routes
app.use("/api/votes", voteRoutes);       // Voting system routes

// Default route for testing
app.get("/", (req, res) => {
  res.send("Housing Management System API is running.");
});

// Server configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
