const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            required: true,
            enum: ["Work", "Personal", "Study", "Other"],
        },
        deadline: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            enum: ["In Progress", "Completed", "Overdue"],
            default: "In Progress",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Task", taskSchema);