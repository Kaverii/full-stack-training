const db = require("../models");
const User = db.users;
const bcrypt = require("bcryptjs");

// Create and Save a new User
exports.register = async (req, res) => {
  try {
    // Validate request
    if (!req.body.username || !req.body.email || !req.body.password) {
      res.status(400).send({
        message: "Username, email and password are required!"
      });
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a User
    const user = {
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    };

    // Save User in the database
    const data = await User.create(user);
    
    // Send response without password
    res.send({
      id: data.id,
      username: data.username,
      email: data.email,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt
    });
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(400).send({
        message: "Username or email already exists!"
      });
    } else {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User."
      });
    }
  }
};
