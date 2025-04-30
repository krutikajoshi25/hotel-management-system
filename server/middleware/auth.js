const jwt = require('jsonwebtoken');

const verifyAdmin = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Check if the user is an admin
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden. Admin access required.' });
    }

    req.admin = decoded; // Attach admin info to request object
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

module.exports = verifyAdmin;
