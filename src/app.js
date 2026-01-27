const express = require("express");
const cors = require("cors");

const app = express();

// Core middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", require("./routes/taskRoutes"));

// Health check
app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK" });
});

module.exports = app;