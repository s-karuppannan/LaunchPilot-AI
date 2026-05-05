/**
 * Blueprint Type Definitions
 * Complete blueprint data structure
 */

/**
 * @typedef {Object} Blueprint
 * @property {string} _id - MongoDB document ID
 * @property {string} sessionId - User session identifier
 * @property {string} startupIdea - Original user input
 * @property {string} targetAudience - Selected audience segment
 * @property {string} budgetRange - Selected budget tier
 * @property {string} platformType - Selected platform type
 * @property {GeneratedAnalysis} generatedAnalysis - Complete blueprint analysis
 * @property {boolean} isSaved - User-saved flag
 * @property {Date} createdAt - Generation timestamp
 * @property {Date} [savedAt] - Save timestamp (optional)
 */

/**
 * @typedef {Object} GeneratedAnalysis
 * @property {ProductOverview} productOverview
 * @property {Feature[]} coreFeatures
 * @property {Page[]} websitePages
 * @property {TechnologyStack} technologyStack
 * @property {DatabaseStructure} databaseStructure
 * @property {MonetizationStrategy} monetizationStrategy
 * @property {AWSDeploymentPlan} awsDeploymentPlan
 * @property {DevelopmentRoadmap} developmentRoadmap
 * @property {SuccessMetrics} successMetrics
 */

/**
 * @typedef {Object} ProductOverview
 * @property {string} summary - 1-2 sentence overview
 * @property {string} valueProp - 2-3 key benefits
 * @property {string} problemSolution - 1-2 paragraph problem/solution fit
 */

/**
 * @typedef {Object} Feature
 * @property {string} name - Feature name
 * @property {string} description - What it does and why
 * @property {('high'|'medium'|'low')} priority - Feature priority
 */

/**
 * @typedef {Object} Page
 * @property {string} name - Page name
 * @property {string} purpose - Page purpose
 * @property {string[]} sections - Key sections on page
 */

/**
 * @typedef {Object} TechnologyStack
 * @property {string[]} frontend - Frontend technologies
 * @property {string[]} backend - Backend technologies
 * @property {string[]} database - Database technologies
 * @property {string[]} infrastructure - Infrastructure/deployment
 * @property {string[]} tools - Development tools
 */

/**
 * @typedef {Object} DatabaseStructure
 * @property {Model[]} models - Data models
 * @property {Relationship[]} relationships - Entity relationships
 */

/**
 * @typedef {Object} Model
 * @property {string} name - Model name
 * @property {string[]} fields - Key fields
 * @property {string} description - Model purpose
 */

/**
 * @typedef {Object} Relationship
 * @property {string} from - Source model
 * @property {string} to - Target model
 * @property {('one-to-one'|'one-to-many'|'many-to-many')} type - Relationship type
 */

/**
 * @typedef {Object} MonetizationStrategy
 * @property {string[]} revenueModels - Revenue model types
 * @property {string} pricingStrategy - Pricing approach
 * @property {string} businessModel - Overall business model description
 */

/**
 * @typedef {Object} AWSDeploymentPlan
 * @property {string} architecture - Architecture description
 * @property {string[]} services - AWS services used
 * @property {string} deploymentStrategy - Deployment approach
 */

/**
 * @typedef {Object} DevelopmentRoadmap
 * @property {Phase[]} phases - Development phases
 * @property {Milestone[]} milestones - Key milestones
 * @property {string} timeline - Overall timeline
 */

/**
 * @typedef {Object} Phase
 * @property {string} name - Phase name
 * @property {string[]} features - Features in phase
 * @property {string} duration - Phase duration
 */

/**
 * @typedef {Object} Milestone
 * @property {string} name - Milestone name
 * @property {string} description - What's achieved
 * @property {string} phase - Associated phase
 */

/**
 * @typedef {Object} SuccessMetrics
 * @property {string[]} kpis - Key performance indicators
 * @property {string[]} analytics - Analytics to track
 * @property {string} measurement - Measurement strategy
 */

module.exports = {};
