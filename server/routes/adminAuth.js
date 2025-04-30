const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin'); // If you want to use DB for admin credentials

const router = express.Router();

// Hardcoded credentials (for simplicity)
const ADMIN_EMAIL = 'admin@example.com';
const ADMIN_PASSWORD = 'admin123'; // Normally, this should be hashed and stored securely

// Login route for admin
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Step 1: Validate the input
  if (!email || !password) {
    return res.status(400).json({ message: 'Please enter both email and password' });
  }

  // Step 2: Check if the admin credentials match
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    // Step 3: Generate JWT token
    const token = jwt.sign({ email: ADMIN_EMAIL, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Return token
    return res.json({
      message: 'Login successful!',
      token,
    });
  } else {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
});

module.exports = router;
