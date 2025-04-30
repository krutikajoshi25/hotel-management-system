const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Registration Route
router.post('/', async (req, res) => {
  const { name, email, password, phone, city, country } = req.body;

  if (
    !name?.trim() ||
    !email?.trim() ||
    !password?.trim() ||
    !phone?.trim() ||
    !city?.trim() ||
    !country?.trim()
  ) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const newUser = new User({ name, email, password, phone, city, country });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'Registration successful!', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

module.exports = router;
