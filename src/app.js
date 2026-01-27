const express = require("express");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", require("./routes/taskRoutes"));

app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK" });
});

// Error handler (must be last)
app.use(errorHandler);

module.exports = app;