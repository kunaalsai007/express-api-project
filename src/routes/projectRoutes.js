const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/authMiddleware");

const {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

// Protect routes with authentication middleware
router.post("/", authenticateToken, createProject);   // Create a project
router.get("/", authenticateToken, getProjects);      // List all projects
router.put("/:id", authenticateToken, updateProject); // Update a project
router.delete("/:id", authenticateToken, deleteProject); // Delete a project

module.exports = router;
