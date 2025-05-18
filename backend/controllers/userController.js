const User = require("../models/User");

// Create a new User
exports.createUser = async (req, res) => {
  try {
    const User = new User(req.body);
    const savedUser = await User.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all Users
exports.getUsers = async (req, res) => {
  try {
    const Users = await User.find();
    res.json(Users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a User by ID
exports.getUserById = async (req, res) => {
  try {
    const User = await User.findById(req.params.id);
    if (!User) return res.status(404).json({ message: "User not found" });
    res.json(User);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a User
exports.deleteUser = async (req, res) => {
  try {
    console.log("in controller")
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
