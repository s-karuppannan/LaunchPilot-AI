/**
 * Form Data Type Definitions
 * User input form data structure
 */

/**
 * @typedef {Object} FormData
 * @property {string} startupIdea - Startup concept description (10-1000 chars)
 * @property {string} targetAudience - Target audience segment
 * @property {string} budgetRange - Budget tier
 * @property {string} platformType - Platform type (web, mobile, hybrid)
 */

/**
 * @typedef {Object} FormErrors
 * @property {string} [startupIdea] - Startup idea validation error
 * @property {string} [targetAudience] - Target audience validation error
 * @property {string} [budgetRange] - Budget range validation error
 * @property {string} [platformType] - Platform type validation error
 */

module.exports = {};
