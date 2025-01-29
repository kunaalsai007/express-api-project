const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/authMiddleware");

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

// Task routes
router.post("/:projectId/tasks", authenticateToken, createTask); // Create a task under a project
router.get("/:projectId/tasks", authenticateToken, getTasks);    // Get tasks for a project
router.put("/:taskId", authenticateToken, updateTask);           // Update a task
router.delete("/:taskId", authenticateToken, deleteTask);        // Delete a task

module.exports = router;
