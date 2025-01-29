const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create a project
const createProject = async (req, res) => {
  const { name, description, status, userId } = req.body;
  try {
    const project = await prisma.project.create({
      data: { name, description, status, userId },
    });
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: "Error creating project", details: error.message });
  }
};

// Get all projects
const getProjects = async (req, res) => {
  try {
    const projects = await prisma.project.findMany({ include: { user: true } });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: "Error fetching projects", details: error.message });
  }
};

// Update a project
const updateProject = async (req, res) => {
  const { id } = req.params;
  const { name, description, status } = req.body;
  try {
    const project = await prisma.project.update({
      where: { id },
      data: { name, description, status },
    });
    res.status(200).json(project);
  } catch (error) {
    res.status(400).json({ error: "Error updating project", details: error.message });
  }
};

// Delete a project
const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.project.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Error deleting project", details: error.message });
  }
};

module.exports = { createProject, getProjects, updateProject, deleteProject };
