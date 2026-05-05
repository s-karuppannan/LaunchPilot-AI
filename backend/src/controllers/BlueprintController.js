const BlueprintGenerationService = require('../services/BlueprintGenerationService');
const BlueprintStorageService = require('../services/BlueprintStorageService');
const SessionService = require('../services/SessionService');

/**
 * BlueprintController
 * Handles blueprint-related HTTP requests
 */
class BlueprintController {
  /**
   * Generate blueprint
   * POST /api/generateBlueprint
   */
  async generateBlueprint(req, res, next) {
    try {
      const { startupIdea, targetAudience, budgetRange, platformType, sessionId } = req.body;

      // Validate required fields
      if (!startupIdea || !targetAudience || !budgetRange || !platformType) {
        return res.status(400).json({
          error: 'ValidationError',
          message: 'Missing required fields: startupIdea, targetAudience, budgetRange, platformType'
        });
      }

      // Validate startup idea length
      if (startupIdea.length < 10 || startupIdea.length > 1000) {
        return res.status(400).json({
          error: 'ValidationError',
          message: 'Startup idea must be between 10 and 1000 characters'
        });
      }

      // Validate session ID if provided
      if (sessionId && !SessionService.validateSessionId(sessionId)) {
        return res.status(400).json({
          error: 'ValidationError',
          message: 'Invalid session ID format'
        });
      }

      // Generate intelligent blueprint analysis
      const generatedAnalysis = await BlueprintGenerationService.generateBlueprint({
        startupIdea,
        targetAudience,
        budgetRange,
        platformType
      });

      let blueprint;

      // Try database save, but continue even if DB fails
      try {
        blueprint = await BlueprintStorageService.saveBlueprint(
          {
            startupIdea,
            targetAudience,
            budgetRange,
            platformType,
            generatedAnalysis
          },
          sessionId || SessionService.generateSessionId()
        );

        SessionService.trackActivity(blueprint.sessionId, 'blueprint_generated');
      } catch (dbError) {
        console.log('⚠ Database save skipped, running in demo mode');

        blueprint = {
          startupIdea,
          targetAudience,
          budgetRange,
          platformType,
          generatedAnalysis,
          sessionId: sessionId || SessionService.generateSessionId(),
          createdAt: new Date()
        };
      }

      res.status(200).json({
        blueprint
      });
    } catch (error) {
      console.error('❌ Generate Blueprint Controller Error:', error);
      next(error);
    }
  }

  /**
   * Save blueprint
   * POST /api/saveBlueprint
   */
  async saveBlueprint(req, res, next) {
    try {
      const { blueprintId, sessionId } = req.body;

      if (!blueprintId || !sessionId) {
        return res.status(400).json({
          error: 'ValidationError',
          message: 'Missing required fields: blueprintId, sessionId'
        });
      }

      if (!SessionService.validateSessionId(sessionId)) {
        return res.status(400).json({
          error: 'ValidationError',
          message: 'Invalid session ID format'
        });
      }

      const blueprint = await BlueprintStorageService.markBlueprintAsSaved(blueprintId);

      SessionService.trackActivity(sessionId, 'blueprint_saved');

      res.status(200).json({
        success: true,
        message: 'Blueprint saved successfully',
        blueprint
      });
    } catch (error) {
      console.error('❌ Save Blueprint Controller Error:', error);
      next(error);
    }
  }

  /**
   * Get blueprint history
   * GET /api/getBlueprintHistory
   */
  async getBlueprintHistory(req, res, next) {
    try {
      const { sessionId } = req.query;

      if (!sessionId) {
        return res.status(400).json({
          error: 'ValidationError',
          message: 'Missing required query parameter: sessionId'
        });
      }

      if (!SessionService.validateSessionId(sessionId)) {
        return res.status(400).json({
          error: 'ValidationError',
          message: 'Invalid session ID format'
        });
      }

      let blueprints = [];

      try {
        blueprints = await BlueprintStorageService.getBlueprintHistory(sessionId);
      } catch (dbError) {
        console.log('⚠ Blueprint history unavailable in demo mode');
      }

      res.status(200).json({
        blueprints
      });
    } catch (error) {
      console.error('❌ Get Blueprint History Controller Error:', error);
      next(error);
    }
  }
}

module.exports = new BlueprintController();