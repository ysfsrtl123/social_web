// app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const apiRoutes = require('./routes'); // Assuming you have a routes/index.js for your API routes

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(morgan('dev')); // Logging middleware for development
app.use(express.json()); // Parse JSON request bodies

// API Routes
app.use('/api', apiRoutes);

// Default route
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the API!');
});

// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found!' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;
