const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Create a user
const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: { name, email },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "Error creating user", details: error.message });
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users", details: error.message });
  }
};

// Update a user
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const user = await prisma.user.update({
      where: { id },
      data: { name, email },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: "Error updating user", details: error.message });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.user.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Error deleting user", details: error.message });
  }
};

module.exports = { createUser, getUsers, updateUser, deleteUser };
