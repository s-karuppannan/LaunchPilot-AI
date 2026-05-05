/**
 * API Request/Response Type Definitions
 */

/**
 * @typedef {Object} GenerateBlueprintRequest
 * @property {string} startupIdea - Startup concept description
 * @property {string} targetAudience - Target audience segment
 * @property {string} budgetRange - Budget tier
 * @property {string} platformType - Platform type
 * @property {string} [sessionId] - Optional session ID
 */

/**
 * @typedef {Object} GenerateBlueprintResponse
 * @property {import('./Blueprint').Blueprint} blueprint - Generated blueprint
 */

/**
 * @typedef {Object} SaveBlueprintRequest
 * @property {string} blueprintId - Blueprint document ID
 * @property {string} sessionId - User session ID
 */

/**
 * @typedef {Object} SaveBlueprintResponse
 * @property {boolean} success - Success status
 * @property {string} message - Success message
 * @property {import('./Blueprint').Blueprint} blueprint - Updated blueprint
 */

/**
 * @typedef {Object} GetBlueprintHistoryRequest
 * @property {string} sessionId - User session ID (query parameter)
 */

/**
 * @typedef {Object} GetBlueprintHistoryResponse
 * @property {import('./Blueprint').Blueprint[]} blueprints - Array of saved blueprints
 */

/**
 * @typedef {Object} HealthCheckResponse
 * @property {string} status - Health status
 * @property {string} timestamp - Current timestamp
 * @property {number} uptime - Server uptime in seconds
 * @property {string} database - Database connection status
 */

/**
 * @typedef {Object} ApiError
 * @property {string} error - Error type
 * @property {string} message - Error message
 * @property {number} statusCode - HTTP status code
 * @property {string} [stack] - Stack trace (development only)
 */

module.exports = {};
