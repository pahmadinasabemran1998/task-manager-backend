const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Security headers
app.use(helmet());

// CORS configuration (allow only frontend origin)
app.use(cors({
    origin: process.env.FRONTEND_URL || "*", // set your frontend URL in .env
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

// Rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,                  // limit each IP to 100 requessts per window
    message: "Too many requests from this IP, please try again later",
});

app.use(limiter);

// Body parser
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

// Health check
app.get("/health", (req, res) => res.status(200).json({ status: "OK" }));

// Error handler (last)
app.use(errorHandler);

module.exports = app;