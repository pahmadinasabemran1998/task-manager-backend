const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const { validateTask } = require("../middlewares/validate");
const { protect } = require("../middlewares/auth");

// Apply protect middleware
router.use(protect);

// CRUD routes
router.post("/", validateTask, taskController.createTask);
router.get("/", taskController.getTasks);
router.put("/:id", taskController.updateTaskStatus);
router.delete("/:id", taskController.deleteTask);

module.exports = router;