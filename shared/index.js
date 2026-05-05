/**
 * LaunchPilot Shared Package
 * Main entry point for shared types, constants, and utilities
 */

// Type definitions (JSDoc types - no runtime exports needed)
require('./types/Blueprint');
require('./types/FormData');
require('./types/ApiTypes');

// Constants
const {
  TARGET_AUDIENCES,
  BUDGET_RANGES,
  PLATFORM_TYPES,
  INDUSTRY_TYPES,
  PRIORITY_LEVELS,
  BUDGET_TIER_LABELS,
  PLATFORM_TYPE_LABELS
} = require('./constants/dropdownOptions');

const {
  STARTUP_IDEA_RULES,
  TARGET_AUDIENCE_RULES,
  BUDGET_RANGE_RULES,
  PLATFORM_TYPE_RULES,
  SESSION_ID_RULES,
  BLUEPRINT_ID_RULES,
  GENERAL_RULES
} = require('./constants/validationRules');

// Utilities
const {
  validateStartupIdea,
  validateTargetAudience,
  validateBudgetRange,
  validatePlatformType,
  validateSessionId,
  validateBlueprintId,
  validateFormData
} = require('./utils/validation');

const {
  formatDate,
  formatDateShort,
  formatRelativeTime,
  truncateText,
  capitalizeFirst,
  toTitleCase,
  formatBudgetRange,
  formatPlatformType,
  generateInitials,
  formatNumber,
  formatCurrency
} = require('./utils/formatting');

// Export all
module.exports = {
  // Constants
  TARGET_AUDIENCES,
  BUDGET_RANGES,
  PLATFORM_TYPES,
  INDUSTRY_TYPES,
  PRIORITY_LEVELS,
  BUDGET_TIER_LABELS,
  PLATFORM_TYPE_LABELS,
  
  // Validation Rules
  STARTUP_IDEA_RULES,
  TARGET_AUDIENCE_RULES,
  BUDGET_RANGE_RULES,
  PLATFORM_TYPE_RULES,
  SESSION_ID_RULES,
  BLUEPRINT_ID_RULES,
  GENERAL_RULES,
  
  // Validation Utilities
  validateStartupIdea,
  validateTargetAudience,
  validateBudgetRange,
  validatePlatformType,
  validateSessionId,
  validateBlueprintId,
  validateFormData,
  
  // Formatting Utilities
  formatDate,
  formatDateShort,
  formatRelativeTime,
  truncateText,
  capitalizeFirst,
  toTitleCase,
  formatBudgetRange,
  formatPlatformType,
  generateInitials,
  formatNumber,
  formatCurrency
};
