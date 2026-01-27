const express = require("express");
const router = express.Router();

// Placeholder routes
router.get("/", (req, res) => {
    res.status(200).json({ message: "Tasks endpoint" });
});

module.exports = router;