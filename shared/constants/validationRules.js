/**
 * Validation Rules Constants
 * Shared validation rules for frontend and backend
 */

/**
 * Startup Idea Validation Rules
 */
const STARTUP_IDEA_RULES = {
  MIN_LENGTH: 10,
  MAX_LENGTH: 1000,
  MIN_WORDS: 3,
  ERROR_MESSAGES: {
    REQUIRED: 'Startup idea is required',
    TOO_SHORT: 'Startup idea must be at least 10 characters',
    TOO_LONG: 'Startup idea must be at most 1000 characters',
    TOO_FEW_WORDS: 'Startup idea must contain at least 3 words'
  }
};

/**
 * Target Audience Validation Rules
 */
const TARGET_AUDIENCE_RULES = {
  REQUIRED: true,
  ERROR_MESSAGES: {
    REQUIRED: 'Target audience is required',
    INVALID: 'Invalid target audience selection'
  }
};

/**
 * Budget Range Validation Rules
 */
const BUDGET_RANGE_RULES = {
  REQUIRED: true,
  ERROR_MESSAGES: {
    REQUIRED: 'Budget range is required',
    INVALID: 'Invalid budget range selection'
  }
};

/**
 * Platform Type Validation Rules
 */
const PLATFORM_TYPE_RULES = {
  REQUIRED: true,
  ERROR_MESSAGES: {
    REQUIRED: 'Platform type is required',
    INVALID: 'Invalid platform type selection'
  }
};

/**
 * Session ID Validation Rules
 */
const SESSION_ID_RULES = {
  PATTERN: /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
  ERROR_MESSAGES: {
    REQUIRED: 'Session ID is required',
    INVALID: 'Invalid session ID format (must be UUID v4)'
  }
};

/**
 * Blueprint ID Validation Rules
 */
const BLUEPRINT_ID_RULES = {
  PATTERN: /^[0-9a-f]{24}$/i, // MongoDB ObjectId pattern
  ERROR_MESSAGES: {
    REQUIRED: 'Blueprint ID is required',
    INVALID: 'Invalid blueprint ID format'
  }
};

/**
 * General Validation Rules
 */
const GENERAL_RULES = {
  REQUIRED_FIELD: 'This field is required',
  INVALID_FORMAT: 'Invalid format',
  SERVER_ERROR: 'An error occurred. Please try again.'
};

module.exports = {
  STARTUP_IDEA_RULES,
  TARGET_AUDIENCE_RULES,
  BUDGET_RANGE_RULES,
  PLATFORM_TYPE_RULES,
  SESSION_ID_RULES,
  BLUEPRINT_ID_RULES,
  GENERAL_RULES
};
