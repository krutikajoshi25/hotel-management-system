const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');


const adminAuthRoutes = require('./routes/adminAuth');
const adminDashboardRoutes = require('./routes/adminDashboard');


// Load environment variables
dotenv.config();

const registerRoutes = require('./routes/register');
const loginRoutes = require('./routes/login');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
console.log('MONGO_URI:', process.env.MONGO_URI);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// API Routes
app.use('/api/register', registerRoutes);
app.use('/api/login', loginRoutes);


app.use('/api/admin', adminAuthRoutes);
app.use('/api/admin', adminDashboardRoutes);

// Serve static frontend in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
