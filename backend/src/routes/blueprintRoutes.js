  const express = require('express');
  const BlueprintController = require('../controllers/BlueprintController');

  const router = express.Router();

  /**
   * Blueprint Routes
   */

  // Generate blueprint
  router.post('/generateBlueprint', (req, res, next) => {
    BlueprintController.generateBlueprint(req, res, next);
  });

  // Save blueprint
  router.post('/saveBlueprint', (req, res, next) => {
    BlueprintController.saveBlueprint(req, res, next);
  });

  // Get blueprint history
  router.get('/getBlueprintHistory', (req, res, next) => {
    BlueprintController.getBlueprintHistory(req, res, next);
  });

  module.exports = router;
