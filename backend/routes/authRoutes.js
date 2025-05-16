
const express = require('express');
const { registerUser, loginUser, updateUserProfile, getProfile,  verifySecurityAnswer, resetPassword, getSecurityQuestion } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateUserProfile);
router.get('/security-question', getSecurityQuestion); 
router.post('/verify-security-answer', verifySecurityAnswer); 
router.post('/reset-password', resetPassword);
module.exports = router;
