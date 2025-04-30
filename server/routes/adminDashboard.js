const express = require('express');
const verifyAdmin = require('../middleware/auth'); // Verify admin middleware
const router = express.Router();

// Protected admin dashboard route
router.get('/dashboard', verifyAdmin, (req, res) => {
  res.json({ message: 'Welcome to the admin dashboard!' });
});

module.exports = router;
