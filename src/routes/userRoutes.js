const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/authMiddleware");

const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// User routes
router.post("/", authenticateToken, createUser);
router.get("/", authenticateToken, getUsers);
router.put("/:id",authenticateToken, updateUser);
router.delete("/:id", authenticateToken, deleteUser);

module.exports = router;
