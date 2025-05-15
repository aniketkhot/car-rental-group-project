
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

const registerUser = async (req, res) => {
  const { name, email, password, role, securityQuestion, securityAnswer } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = new User({ 
      name, 
      email, 
      password, 
      role,
      securityQuestion,
      securityAnswer 
    });
    
    await user.save();
        res.status(201).json({ id: user.id, name: user.name, email: user.email, token: generateToken(user.id) });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,   
        token: generateToken(user._id)
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProfile = async (req, res) => {
    try {
      const user = await User.findById(req.user.id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({
        name: user.name,
        email: user.email,
        university: user.university,
        address: user.address,
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };

const updateUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        const { name, email, university, address } = req.body;
        user.name = name || user.name;
        user.email = email || user.email;
        user.university = university || user.university;
        user.address = address || user.address;

        const updatedUser = await user.save();
        res.json({ id: updatedUser.id, name: updatedUser.name, email: updatedUser.email, university: updatedUser.university, address: updatedUser.address, token: generateToken(updatedUser.id) });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const verifySecurityAnswer = async (req, res) => {
    const { email, securityQuestion, securityAnswer } = req.body;

    try {
        const user = await User.findOne({ email, securityQuestion });
        if (!user) {
            return res.status(400).json({ message: 'user invaild or question not vaild' });
        }

        const isAnswerCorrect = await user.compareSecurityAnswer(securityAnswer);
        if (!isAnswerCorrect) {
            return res.status(400).json({ message: 'answer no correct' });
        }

        
        res.json({ message: 'succeess', userId: user._id });
    } catch (error) {
        res.status(500).json({ message: 'server error' });
    }
};

const resetPassword = async (req, res) => {
  const { userId, newPassword } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: 'Invalid user' });
    }

    user.password = newPassword; // 會經由 pre save 進行 hash
    await user.save();

    res.json({ message: 'Password reset successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
module.exports = { registerUser, loginUser, updateUserProfile, getProfile, verifySecurityAnswer, resetPassword };
