const express = require("express");
const cors = require("cors");

const app = express();

// Core middleware
app.use(cors());
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK" });
});

module.exports = app;