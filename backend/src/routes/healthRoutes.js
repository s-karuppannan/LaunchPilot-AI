const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

/**
 * Health Check Route
 * GET /api/health
 */
router.get('/health', (req, res) => {
  const health = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
  };
  
  res.status(200).json(health);
});

module.exports = router;
