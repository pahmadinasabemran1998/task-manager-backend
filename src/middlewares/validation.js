const { body, validationResult } = require("express-validator");

// Validation rules for task creation
const validateTask = [
    body("title")
        .notEmpty()
        .withMessage("Title is required")
        .isLength({ max: 100 })
        .withMessage("Title must be at most 100 characters"),
    
    body("category")
        .notEmpty()
        .withMessage("Category is required")
        .isIn(["Work", "Personal", "Study", "Other"])
        .withMessage("Invalid category"),
    
    body("deadline")
        .notEmpty()
        .withMessage("Deadline is required")
        .isISO8601()
        .withMessage("Deadline must be a valid date"),
    
    body("status")
        .optional()
        .isIn(["In Progress", "Completed", "Overdue"])
        .withMessage("Invalid status"),
    
    // Middleware to handle validation result
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

module.exports = { validateTask };