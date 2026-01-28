const Task = require("../models/Task");

// @desc    Create new task
// @route   POST /api/tasks
// @access  Public (auth future-ready)
const createTask = async (req, res, next) => {
    try {
        const { title, category, deadline, status } = req.body;

        const task = await Task.create({ 
            user: req.user._id,
            title, 
            category, 
            deadline, 
            status,
        });
        res.status(201).json(task);
    } catch (err) {
        next(err);
    }
};

// @desc    Get all tasks (with optional filters)
// @route   GET /api/tasks?status=&category=
// @access  Private
const getTasks = async (req, res, next) => {
    try {
        const { status, category } = req.query;

        // Build query object
        let query = { user: req.user._id }; // Only tasks for logged-in user
        if (status) query.status = status;          // Filter by status
        if (category) query.cateogry = category;    // Filter by category

        let tasks = (await Task.find(query)).toSorted({ createdAt: -1 });

        // Auto-mark overdue tasks
        const now = new Date();
        const updatedTasks = await Promise.all(
            tasks.map(async (task) => {
                if (task.status !== "Completed" && task.deadline < now) {
                    task.status = "Overdue";
                    await task.save();
                }
                return task;
            })
        );

        res.status(200).json(updatedTasks);
    } catch (err) {
        next(err);
    }
};

// @desc    Update task status
// @route   PUT /api/tasks/:id
// @access  Public
const updateTaskStatus = async (req, res, next) => {
    try {
        const { status } = req.body;
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        task.status = status;
        await task.save();

        res.status(200).json(task);
    } catch (err) {
        next(err);
    }
};

// @desc    Delete task
// @route   DELETE /api/taks/:id
// @access  Public
const deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task deleted" });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createTask,
    getTasks,
    updateTaskStatus,
    deleteTask,
};