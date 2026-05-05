const Blueprint = require('../models/Blueprint');

/**
 * BlueprintStorageService
 * Handles all blueprint database operations
 */
class BlueprintStorageService {
  /**
   * Save blueprint to database
   */
  async saveBlueprint(blueprintData, sessionId) {
    try {
      const blueprint = await Blueprint.create({
        sessionId,
        startupIdea: blueprintData.startupIdea,
        targetAudience: blueprintData.targetAudience,
        budgetRange: blueprintData.budgetRange,
        platformType: blueprintData.platformType,
        generatedAnalysis: blueprintData.generatedAnalysis,
        isSaved: false,
        createdAt: new Date()
      });
      
      return blueprint;
    } catch (error) {
      console.error('Error saving blueprint:', error);
      throw new Error('Failed to save blueprint to database');
    }
  }
  
  /**
   * Get blueprint by ID
   */
  async getBlueprintById(blueprintId) {
    try {
      const blueprint = await Blueprint.findById(blueprintId);
      
      if (!blueprint) {
        throw new Error('Blueprint not found');
      }
      
      return blueprint;
    } catch (error) {
      console.error('Error fetching blueprint:', error);
      throw new Error('Failed to fetch blueprint');
    }
  }
  
  /**
   * Get blueprint history for session
   */
  async getBlueprintHistory(sessionId) {
    try {
      const blueprints = await Blueprint.findSavedBlueprints(sessionId);
      return blueprints;
    } catch (error) {
      console.error('Error fetching blueprint history:', error);
      throw new Error('Failed to fetch blueprint history');
    }
  }
  
  /**
   * Mark blueprint as saved by user
   */
  async markBlueprintAsSaved(blueprintId) {
    try {
      const blueprint = await Blueprint.findById(blueprintId);
      
      if (!blueprint) {
        throw new Error('Blueprint not found');
      }
      
      await blueprint.markAsSaved();
      return blueprint;
    } catch (error) {
      console.error('Error marking blueprint as saved:', error);
      throw new Error('Failed to mark blueprint as saved');
    }
  }
  
  /**
   * Delete blueprint (optional)
   */
  async deleteBlueprint(blueprintId) {
    try {
      const result = await Blueprint.findByIdAndDelete(blueprintId);
      return !!result;
    } catch (error) {
      console.error('Error deleting blueprint:', error);
      throw new Error('Failed to delete blueprint');
    }
  }
}

module.exports = new BlueprintStorageService();
