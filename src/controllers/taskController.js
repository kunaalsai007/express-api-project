const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create a task under a project
const createTask = async (req, res) => {
  const { projectId } = req.params;
  const { title, description, status, assignedUserId } = req.body;
  try {
    const task = await prisma.task.create({
      data: { title, description, status, projectId, assignedUserId },
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: "Error creating task", details: error.message });
  }
};

// Get tasks for a project
const getTasks = async (req, res) => {
  const { projectId } = req.params;
  try {
    const tasks = await prisma.task.findMany({
      where: { projectId },
      include: { assignedUser: true },
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error fetching tasks", details: error.message });
  }
};

// Update a task
const updateTask = async (req, res) => {
  const { taskId } = req.params;
  const { title, description, status, assignedUserId } = req.body;
  try {
    const task = await prisma.task.update({
      where: { id: taskId },
      data: { title, description, status, assignedUserId },
    });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: "Error updating task", details: error.message });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  const { taskId } = req.params;
  try {
    await prisma.task.delete({ where: { id: taskId } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Error deleting task", details: error.message });
  }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
