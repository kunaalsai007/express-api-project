require('dotenv').config(); 

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const userRoutes = require("./routes/userRoutes");
app.use("/users", userRoutes);

// For projects
const projectRoutes = require("./routes/projectRoutes");
app.use("/projects", projectRoutes); 

// For tasks
const taskRoutes = require("./routes/taskRoutes");
app.use("/tasks", taskRoutes);   

// Import routes
const authRoutes = require("./routes/authRoutes");

app.use(express.json());


// Use the auth routes
app.use("/auth", authRoutes); // Prefix `/auth` to the auth routes
