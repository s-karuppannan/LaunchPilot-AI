# LaunchPilot AI - Service Layer Design

## Overview
This document defines the service layer architecture, responsibilities, and orchestration patterns for LaunchPilot AI.

---

## Service Architecture Pattern

**Pattern**: Service-Oriented Architecture (SOA)
- **Flow**: Routes → Controllers → Services → Models
- **Principle**: Business logic encapsulated in service layer
- **Benefits**: Clear separation of concerns, testable business logic, reusable services

---

## Backend Services

### 1. BlueprintGenerationService

#### Purpose
Intelligent blueprint generation with conditional logic based on user inputs.

#### Responsibilities
- Analyze startup idea and extract meaningful keywords
- Detect industry and business type from idea description
- Generate all 9 blueprint analysis sections with contextual intelligence
- Apply conditional logic based on target audience, budget, and platform
- Orchestrate complete blueprint generation workflow
- Return structured blueprint data

#### Service Interface

```javascript
class BlueprintGenerationService {
  /**
   * Main orchestration method
   * @param {Object} inputData - User input data
   * @param {string} inputData.startupIdea - Startup concept description
   * @param {string} inputData.targetAudience - Target audience segment
   * @param {string} inputData.budgetRange - Budget tier
   * @param {string} inputData.platformType - Platform type (web, mobile, hybrid)
   * @returns {Promise<Blueprint>} Complete blueprint analysis
   */
  async generateBlueprint(inputData)
  
  /**
   * Extract keywords from startup idea
   * @param {string} startupIdea - Startup concept description
   * @returns {string[]} Array of keywords
   */
  extractKeywords(startupIdea)
  
  /**
   * Detect industry from idea and keywords
   * @param {string} startupIdea - Startup concept description
   * @param {string[]} keywords - Extracted keywords
   * @returns {string} Industry classification
   */
  detectIndustry(startupIdea, keywords)
  
  /**
   * Generate product overview section
   * @param {string} startupIdea - Startup concept
   * @param {string[]} keywords - Keywords
   * @param {string} industry - Industry type
   * @returns {Object} Product overview analysis
   */
  generateProductOverview(startupIdea, keywords, industry)
  
  /**
   * Generate core features section
   * @param {string} startupIdea - Startup concept
   * @param {string} platformType - Platform type
   * @param {string} budgetRange - Budget tier
   * @param {string[]} keywords - Keywords
   * @returns {Array} Core features list
   */
  generateCoreFeatures(startupIdea, platformType, budgetRange, keywords)
  
  /**
   * Generate recommended website pages
   * @param {string} startupIdea - Startup concept
   * @param {string} platformType - Platform type
   * @param {string} industry - Industry type
   * @returns {Array} Website pages list
   */
  generateWebsitePages(startupIdea, platformType, industry)
  
  /**
   * Generate technology stack recommendations
   * @param {string} platformType - Platform type
   * @param {string} budgetRange - Budget tier
   * @param {string} complexity - Complexity level
   * @returns {Object} Technology stack
   */
  generateTechnologyStack(platformType, budgetRange, complexity)
  
  /**
   * Generate database structure
   * @param {string} startupIdea - Startup concept
   * @param {Array} features - Core features
   * @param {string} industry - Industry type
   * @returns {Object} Database structure
   */
  generateDatabaseStructure(startupIdea, features, industry)
  
  /**
   * Generate monetization strategy
   * @param {string} targetAudience - Target audience
   * @param {string} budgetRange - Budget tier
   * @param {string} industry - Industry type
   * @returns {Object} Monetization strategy
   */
  generateMonetizationStrategy(targetAudience, budgetRange, industry)
  
  /**
   * Generate AWS deployment plan
   * @param {Object} techStack - Technology stack
   * @param {string} budgetRange - Budget tier
   * @param {string} scalability - Scalability needs
   * @returns {Object} AWS deployment plan
   */
  generateAWSDeploymentPlan(techStack, budgetRange, scalability)
  
  /**
   * Generate development roadmap
   * @param {Array} features - Core features
   * @param {string} complexity - Complexity level
   * @param {string} budgetRange - Budget tier
   * @returns {Object} Development roadmap
   */
  generateDevelopmentRoadmap(features, complexity, budgetRange)
  
  /**
   * Generate success metrics
   * @param {string} industry - Industry type
   * @param {string} targetAudience - Target audience
   * @param {Object} monetization - Monetization strategy
   * @returns {Object} Success metrics
   */
  generateSuccessMetrics(industry, targetAudience, monetization)
  
  /**
   * Assess complexity level
   * @param {Array} features - Core features
   * @param {string} platformType - Platform type
   * @returns {string} Complexity level (low, medium, high)
   */
  assessComplexity(features, platformType)
  
  /**
   * Apply conditional logic to content
   * @param {any} baseContent - Base content
   * @param {Object} conditions - Conditional parameters
   * @returns {any} Modified content
   */
  applyConditionalLogic(baseContent, conditions)
}
```

#### Conditional Logic Strategy

**Industry Detection Logic**:
- E-commerce: Keywords like "shop", "store", "marketplace", "buy", "sell"
- SaaS: Keywords like "software", "platform", "tool", "service", "automation"
- FinTech: Keywords like "payment", "finance", "banking", "investment", "crypto"
- HealthTech: Keywords like "health", "medical", "fitness", "wellness", "doctor"
- EdTech: Keywords like "education", "learning", "course", "training", "student"
- Social: Keywords like "social", "community", "network", "connect", "share"

**Budget-Based Adjustments**:
- Low Budget ($0-$10k): Recommend cost-effective tech, MVP features, serverless
- Medium Budget ($10k-$50k): Balanced tech stack, core features, scalable architecture
- High Budget ($50k+): Premium tech, comprehensive features, enterprise architecture

**Platform-Based Adjustments**:
- Web: Focus on responsive design, browser compatibility, web technologies
- Mobile: Focus on native/hybrid frameworks, app store optimization, mobile UX
- Hybrid: Recommend cross-platform frameworks, unified codebase strategies

**Audience-Based Adjustments**:
- B2B: Enterprise features, integrations, security, compliance
- B2C: User experience, social features, payment processing, marketing
- Niche: Specialized features, community building, targeted marketing

#### Orchestration Flow

```
generateBlueprint()
  ├─> extractKeywords(startupIdea)
  ├─> detectIndustry(startupIdea, keywords)
  ├─> generateProductOverview(startupIdea, keywords, industry)
  ├─> generateCoreFeatures(startupIdea, platformType, budgetRange, keywords)
  ├─> generateWebsitePages(startupIdea, platformType, industry)
  ├─> assessComplexity(features, platformType)
  ├─> generateTechnologyStack(platformType, budgetRange, complexity)
  ├─> generateDatabaseStructure(startupIdea, features, industry)
  ├─> generateMonetizationStrategy(targetAudience, budgetRange, industry)
  ├─> generateAWSDeploymentPlan(techStack, budgetRange, scalability)
  ├─> generateDevelopmentRoadmap(features, complexity, budgetRange)
  └─> generateSuccessMetrics(industry, targetAudience, monetization)
```

---

### 2. BlueprintStorageService

#### Purpose
Handle all blueprint database operations with encapsulated data access logic.

#### Responsibilities
- Save generated blueprints to MongoDB
- Retrieve blueprints by ID
- Retrieve blueprint history by session ID
- Update blueprint save status
- Handle database errors gracefully
- Provide clean service interface to controllers

#### Service Interface

```javascript
class BlueprintStorageService {
  /**
   * Save blueprint to database
   * @param {Object} blueprintData - Blueprint data to save
   * @param {string} sessionId - User session ID
   * @returns {Promise<Blueprint>} Saved blueprint document
   * @throws {DatabaseError} If save operation fails
   */
  async saveBlueprint(blueprintData, sessionId)
  
  /**
   * Get blueprint by ID
   * @param {string} blueprintId - Blueprint document ID
   * @returns {Promise<Blueprint>} Blueprint document
   * @throws {NotFoundError} If blueprint not found
   */
  async getBlueprintById(blueprintId)
  
  /**
   * Get blueprint history for session
   * @param {string} sessionId - User session ID
   * @returns {Promise<Blueprint[]>} Array of saved blueprints
   */
  async getBlueprintHistory(sessionId)
  
  /**
   * Mark blueprint as saved by user
   * @param {string} blueprintId - Blueprint document ID
   * @returns {Promise<Blueprint>} Updated blueprint
   * @throws {NotFoundError} If blueprint not found
   */
  async markBlueprintAsSaved(blueprintId)
  
  /**
   * Delete blueprint (optional)
   * @param {string} blueprintId - Blueprint document ID
   * @returns {Promise<boolean>} Success status
   */
  async deleteBlueprint(blueprintId)
}
```

#### Data Access Patterns

**Save Blueprint**:
```javascript
// Create new blueprint document
const blueprint = await BlueprintModel.create({
  sessionId,
  startupIdea,
  targetAudience,
  budgetRange,
  platformType,
  generatedAnalysis,
  isSaved: false,
  createdAt: new Date()
})
```

**Get Blueprint History**:
```javascript
// Query saved blueprints for session
const blueprints = await BlueprintModel.find({
  sessionId,
  isSaved: true
}).sort({ savedAt: -1 })
```

**Mark as Saved**:
```javascript
// Update save status
const blueprint = await BlueprintModel.findByIdAndUpdate(
  blueprintId,
  { isSaved: true, savedAt: new Date() },
  { new: true }
)
```

---

### 3. SessionService

#### Purpose
Manage session lifecycle and validation for simple session-based tracking.

#### Responsibilities
- Validate session ID format and existence
- Generate new session IDs when needed
- Track session activity (optional)
- Provide session utilities to other services

#### Service Interface

```javascript
class SessionService {
  /**
   * Validate session ID
   * @param {string} sessionId - Session ID to validate
   * @returns {boolean} Validation result
   */
  validateSessionId(sessionId)
  
  /**
   * Generate new session ID
   * @returns {string} New unique session ID
   */
  generateSessionId()
  
  /**
   * Track session activity (optional)
   * @param {string} sessionId - Session ID
   * @param {string} action - Action type
   * @returns {void}
   */
  trackActivity(sessionId, action)
  
  /**
   * Check if session is valid
   * @param {string} sessionId - Session ID
   * @returns {Promise<boolean>} Validity status
   */
  async isSessionValid(sessionId)
}
```

#### Session ID Generation Strategy

**Format**: UUID v4 or similar
```javascript
// Example: "550e8400-e29b-41d4-a716-446655440000"
const sessionId = uuidv4()
```

**Storage**: localStorage on frontend
```javascript
// Frontend storage
localStorage.setItem('launchpilot_session_id', sessionId)
```

**Validation**: Format check + optional database lookup
```javascript
// Validate format (UUID v4)
const isValidFormat = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(sessionId)
```

---

## Frontend Services

### 4. ApiService (Frontend)

#### Purpose
Centralized API client for all backend communication.

#### Responsibilities
- Make HTTP requests to backend API endpoints
- Handle request/response formatting
- Manage API error handling
- Provide typed API methods
- Handle loading states
- Retry logic for failed requests (optional)

#### Service Interface

```javascript
const apiService = {
  /**
   * Generate blueprint
   * @param {Object} formData - User input data
   * @returns {Promise<Blueprint>} Generated blueprint
   * @throws {ApiError} If request fails
   */
  async generateBlueprint(formData) {
    const response = await fetch('/api/generateBlueprint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    return handleResponse(response)
  },
  
  /**
   * Save blueprint
   * @param {string} blueprintId - Blueprint ID
   * @param {string} sessionId - Session ID
   * @returns {Promise<Object>} Save result
   */
  async saveBlueprint(blueprintId, sessionId) {
    const response = await fetch('/api/saveBlueprint', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ blueprintId, sessionId })
    })
    return handleResponse(response)
  },
  
  /**
   * Get blueprint history
   * @param {string} sessionId - Session ID
   * @returns {Promise<Blueprint[]>} Blueprint history
   */
  async getBlueprintHistory(sessionId) {
    const response = await fetch(`/api/getBlueprintHistory?sessionId=${sessionId}`)
    return handleResponse(response)
  },
  
  /**
   * Health check
   * @returns {Promise<Object>} Health status
   */
  async healthCheck() {
    const response = await fetch('/api/health')
    return handleResponse(response)
  }
}

// Helper functions
async function handleResponse(response) {
  if (!response.ok) {
    const error = await response.json()
    throw new ApiError(error.message, response.status)
  }
  return response.json()
}

class ApiError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
    this.name = 'ApiError'
  }
}
```

---

## Service Interaction Patterns

### Pattern 1: Blueprint Generation Flow

```
Frontend (InputForm)
  └─> apiService.generateBlueprint(formData)
      └─> Backend (POST /api/generateBlueprint)
          └─> BlueprintController.generateBlueprint()
              └─> BlueprintGenerationService.generateBlueprint()
                  ├─> Extract keywords
                  ├─> Detect industry
                  ├─> Generate all sections
                  └─> Return blueprint
              └─> BlueprintStorageService.saveBlueprint()
                  └─> BlueprintModel.create()
              └─> Return blueprint to frontend
```

### Pattern 2: Save Blueprint Flow

```
Frontend (DashboardPage)
  └─> apiService.saveBlueprint(blueprintId, sessionId)
      └─> Backend (POST /api/saveBlueprint)
          └─> BlueprintController.saveBlueprint()
              └─> SessionService.validateSessionId()
              └─> BlueprintStorageService.markBlueprintAsSaved()
                  └─> BlueprintModel.findByIdAndUpdate()
              └─> Return success response
```

### Pattern 3: Get History Flow

```
Frontend (HistoryPage)
  └─> apiService.getBlueprintHistory(sessionId)
      └─> Backend (GET /api/getBlueprintHistory)
          └─> BlueprintController.getBlueprintHistory()
              └─> SessionService.validateSessionId()
              └─> BlueprintStorageService.getBlueprintHistory()
                  └─> BlueprintModel.find({ sessionId, isSaved: true })
              └─> Return blueprints array
```

---

## Service Dependencies

### BlueprintGenerationService
- **Dependencies**: None (pure business logic)
- **Used By**: BlueprintController

### BlueprintStorageService
- **Dependencies**: BlueprintModel (Mongoose)
- **Used By**: BlueprintController

### SessionService
- **Dependencies**: None (utility service)
- **Used By**: BlueprintController, BlueprintStorageService

### ApiService (Frontend)
- **Dependencies**: Fetch API
- **Used By**: All frontend components

---

## Error Handling in Services

### Service-Level Error Handling

```javascript
class BlueprintGenerationService {
  async generateBlueprint(inputData) {
    try {
      // Validate input
      if (!inputData.startupIdea || inputData.startupIdea.length < 10) {
        throw new ValidationError('Startup idea must be at least 10 characters')
      }
      
      // Generate blueprint
      const blueprint = {
        // ... generation logic
      }
      
      return blueprint
      
    } catch (error) {
      // Log error
      console.error('Blueprint generation failed:', error)
      
      // Re-throw with context
      throw new ServiceError('Failed to generate blueprint', error)
    }
  }
}
```

### Custom Error Classes

```javascript
class ServiceError extends Error {
  constructor(message, originalError) {
    super(message)
    this.name = 'ServiceError'
    this.originalError = originalError
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ValidationError'
  }
}

class DatabaseError extends Error {
  constructor(message, originalError) {
    super(message)
    this.name = 'DatabaseError'
    this.originalError = originalError
  }
}

class NotFoundError extends Error {
  constructor(resource) {
    super(`${resource} not found`)
    this.name = 'NotFoundError'
  }
}
```

---

## Service Testing Strategy

### Unit Testing Services

```javascript
// Example: Testing BlueprintGenerationService
describe('BlueprintGenerationService', () => {
  describe('generateBlueprint', () => {
    it('should generate complete blueprint with all sections', async () => {
      const inputData = {
        startupIdea: 'AI-powered meal planning app',
        targetAudience: 'Young Professionals',
        budgetRange: '$10k-$50k',
        platformType: 'Web + Mobile'
      }
      
      const blueprint = await service.generateBlueprint(inputData)
      
      expect(blueprint).toHaveProperty('productOverview')
      expect(blueprint).toHaveProperty('coreFeatures')
      // ... assert all sections
    })
  })
  
  describe('detectIndustry', () => {
    it('should detect HealthTech industry', () => {
      const industry = service.detectIndustry(
        'fitness tracking app',
        ['fitness', 'health', 'tracking']
      )
      expect(industry).toBe('HealthTech')
    })
  })
})
```

---

## Service Performance Considerations

### Caching Strategy (Optional)
- Cache industry detection results
- Cache technology stack templates
- Cache common blueprint patterns

### Async Operations
- All service methods return Promises
- Support concurrent section generation
- Handle timeouts gracefully

### Resource Management
- Limit blueprint generation time (3-5 seconds target)
- Optimize database queries with indexes
- Use connection pooling for MongoDB

---

**Document Version**: 1.0  
**Last Updated**: 2026-05-05  
**Status**: Complete
