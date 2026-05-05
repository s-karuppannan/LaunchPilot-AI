require('dotenv').config();
const express = require('express');
const { connectDatabase } = require('./config/database');
const corsMiddleware = require('./middleware/corsMiddleware');
const { errorMiddleware, notFoundMiddleware } = require('./middleware/errorMiddleware');
const blueprintRoutes = require('./routes/blueprintRoutes');
const healthRoutes = require('./routes/healthRoutes');

/**
 * Initialize Express App
 */
const app = express();
const PORT = process.env.PORT || 5000;

/**
 * Middleware
 */
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Routes
 */
app.use('/api', blueprintRoutes);
app.use('/api', healthRoutes);

/**
 * Error Handling
 */
app.use(notFoundMiddleware);
app.use(errorMiddleware);

/**
 * Start Server
 */
const startServer = async () => {
  try {
    // Connect to database
    await connectDatabase();
    
    // Start listening
    app.listen(PORT, () => {
      console.log('🚀 LaunchPilot AI Backend Server');
      console.log(`📡 Server running on port ${PORT}`);
      console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`🔗 API: http://localhost:${PORT}/api`);
      console.log(`❤️  Health: http://localhost:${PORT}/api/health`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

// Start the server
startServer();

module.exports = app;
