const { v4: uuidv4 } = require('uuid');

/**
 * SessionService
 * Handles session validation and management
 */
class SessionService {
  /**
   * Validate session ID format (UUID v4)
   */
  validateSessionId(sessionId) {
    if (!sessionId) {
      return false;
    }
    
    const uuidV4Regex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidV4Regex.test(sessionId);
  }
  
  /**
   * Generate new session ID
   */
  generateSessionId() {
    return uuidv4();
  }
  
  /**
   * Track session activity (optional - for future use)
   */
  trackActivity(sessionId, action) {
    // Log session activity for analytics
    console.log(`Session ${sessionId}: ${action}`);
  }
  
  /**
   * Check if session is valid
   */
  async isSessionValid(sessionId) {
    return this.validateSessionId(sessionId);
  }
}

module.exports = new SessionService();
