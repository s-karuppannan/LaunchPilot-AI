/**
 * Validation Utilities
 * Shared validation functions for frontend and backend
 */

const { 
  STARTUP_IDEA_RULES, 
  SESSION_ID_RULES, 
  BLUEPRINT_ID_RULES 
} = require('../constants/validationRules');

const { 
  TARGET_AUDIENCES, 
  BUDGET_RANGES, 
  PLATFORM_TYPES 
} = require('../constants/dropdownOptions');

/**
 * Validate startup idea
 * @param {string} startupIdea - Startup idea to validate
 * @returns {{valid: boolean, error: string|null}}
 */
function validateStartupIdea(startupIdea) {
  if (!startupIdea || typeof startupIdea !== 'string') {
    return {
      valid: false,
      error: STARTUP_IDEA_RULES.ERROR_MESSAGES.REQUIRED
    };
  }
  
  const trimmed = startupIdea.trim();
  
  if (trimmed.length < STARTUP_IDEA_RULES.MIN_LENGTH) {
    return {
      valid: false,
      error: STARTUP_IDEA_RULES.ERROR_MESSAGES.TOO_SHORT
    };
  }
  
  if (trimmed.length > STARTUP_IDEA_RULES.MAX_LENGTH) {
    return {
      valid: false,
      error: STARTUP_IDEA_RULES.ERROR_MESSAGES.TOO_LONG
    };
  }
  
  const wordCount = trimmed.split(/\s+/).filter(word => word.length > 0).length;
  if (wordCount < STARTUP_IDEA_RULES.MIN_WORDS) {
    return {
      valid: false,
      error: STARTUP_IDEA_RULES.ERROR_MESSAGES.TOO_FEW_WORDS
    };
  }
  
  return { valid: true, error: null };
}

/**
 * Validate target audience
 * @param {string} targetAudience - Target audience to validate
 * @returns {{valid: boolean, error: string|null}}
 */
function validateTargetAudience(targetAudience) {
  if (!targetAudience) {
    return {
      valid: false,
      error: 'Target audience is required'
    };
  }
  
  if (!TARGET_AUDIENCES.includes(targetAudience)) {
    return {
      valid: false,
      error: 'Invalid target audience selection'
    };
  }
  
  return { valid: true, error: null };
}

/**
 * Validate budget range
 * @param {string} budgetRange - Budget range to validate
 * @returns {{valid: boolean, error: string|null}}
 */
function validateBudgetRange(budgetRange) {
  if (!budgetRange) {
    return {
      valid: false,
      error: 'Budget range is required'
    };
  }
  
  if (!BUDGET_RANGES.includes(budgetRange)) {
    return {
      valid: false,
      error: 'Invalid budget range selection'
    };
  }
  
  return { valid: true, error: null };
}

/**
 * Validate platform type
 * @param {string} platformType - Platform type to validate
 * @returns {{valid: boolean, error: string|null}}
 */
function validatePlatformType(platformType) {
  if (!platformType) {
    return {
      valid: false,
      error: 'Platform type is required'
    };
  }
  
  if (!PLATFORM_TYPES.includes(platformType)) {
    return {
      valid: false,
      error: 'Invalid platform type selection'
    };
  }
  
  return { valid: true, error: null };
}

/**
 * Validate session ID (UUID v4 format)
 * @param {string} sessionId - Session ID to validate
 * @returns {{valid: boolean, error: string|null}}
 */
function validateSessionId(sessionId) {
  if (!sessionId) {
    return {
      valid: false,
      error: SESSION_ID_RULES.ERROR_MESSAGES.REQUIRED
    };
  }
  
  if (!SESSION_ID_RULES.PATTERN.test(sessionId)) {
    return {
      valid: false,
      error: SESSION_ID_RULES.ERROR_MESSAGES.INVALID
    };
  }
  
  return { valid: true, error: null };
}

/**
 * Validate blueprint ID (MongoDB ObjectId format)
 * @param {string} blueprintId - Blueprint ID to validate
 * @returns {{valid: boolean, error: string|null}}
 */
function validateBlueprintId(blueprintId) {
  if (!blueprintId) {
    return {
      valid: false,
      error: BLUEPRINT_ID_RULES.ERROR_MESSAGES.REQUIRED
    };
  }
  
  if (!BLUEPRINT_ID_RULES.PATTERN.test(blueprintId)) {
    return {
      valid: false,
      error: BLUEPRINT_ID_RULES.ERROR_MESSAGES.INVALID
    };
  }
  
  return { valid: true, error: null };
}

/**
 * Validate complete form data
 * @param {Object} formData - Form data to validate
 * @param {string} formData.startupIdea
 * @param {string} formData.targetAudience
 * @param {string} formData.budgetRange
 * @param {string} formData.platformType
 * @returns {{valid: boolean, errors: Object}}
 */
function validateFormData(formData) {
  const errors = {};
  
  const ideaValidation = validateStartupIdea(formData.startupIdea);
  if (!ideaValidation.valid) {
    errors.startupIdea = ideaValidation.error;
  }
  
  const audienceValidation = validateTargetAudience(formData.targetAudience);
  if (!audienceValidation.valid) {
    errors.targetAudience = audienceValidation.error;
  }
  
  const budgetValidation = validateBudgetRange(formData.budgetRange);
  if (!budgetValidation.valid) {
    errors.budgetRange = budgetValidation.error;
  }
  
  const platformValidation = validatePlatformType(formData.platformType);
  if (!platformValidation.valid) {
    errors.platformType = platformValidation.error;
  }
  
  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}

module.exports = {
  validateStartupIdea,
  validateTargetAudience,
  validateBudgetRange,
  validatePlatformType,
  validateSessionId,
  validateBlueprintId,
  validateFormData
};
