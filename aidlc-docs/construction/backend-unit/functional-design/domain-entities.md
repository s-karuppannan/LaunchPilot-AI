# Backend Unit - Domain Entities

## Blueprint Entity (MongoDB Document)

```javascript
{
  _id: ObjectId,                    // MongoDB generated ID
  sessionId: String,                // User session identifier
  startupIdea: String,              // Original user input
  targetAudience: String,           // Selected audience segment
  budgetRange: String,              // Selected budget tier
  platformType: String,             // Selected platform type
  generatedAnalysis: {              // Complete blueprint analysis
    productOverview: ProductOverview,
    coreFeatures: Feature[],
    websitePages: Page[],
    technologyStack: TechnologyStack,
    databaseStructure: DatabaseStructure,
    monetizationStrategy: MonetizationStrategy,
    awsDeploymentPlan: AWSDeploymentPlan,
    developmentRoadmap: DevelopmentRoadmap,
    successMetrics: SuccessMetrics
  },
  isSaved: Boolean,                 // User-saved flag
  createdAt: Date,                  // Generation timestamp
  savedAt: Date                     // Save timestamp (optional)
}
```

## Analysis Section Entities

### ProductOverview
```javascript
{
  summary: String,          // 1-2 sentence overview
  valueProp: String,        // 2-3 key benefits
  problemSolution: String   // 1-2 paragraph problem/solution fit
}
```

### Feature
```javascript
{
  name: String,             // Feature name
  description: String,      // What it does and why
  priority: String          // "high" | "medium" | "low"
}
```

### Page
```javascript
{
  name: String,             // Page name
  purpose: String,          // Page purpose
  sections: String[]        // Key sections on page
}
```

### TechnologyStack
```javascript
{
  frontend: String[],       // Frontend technologies
  backend: String[],        // Backend technologies
  database: String[],       // Database technologies
  infrastructure: String[], // Infrastructure/deployment
  tools: String[]           // Development tools
}
```

### DatabaseStructure
```javascript
{
  models: Model[],          // Data models
  relationships: Relationship[]  // Entity relationships
}

Model: {
  name: String,             // Model name
  fields: String[],         // Key fields
  description: String       // Model purpose
}

Relationship: {
  from: String,             // Source model
  to: String,               // Target model
  type: String              // "one-to-many" | "many-to-many"
}
```

### MonetizationStrategy
```javascript
{
  revenueModels: String[],  // Revenue model types
  pricingStrategy: String,  // Pricing approach
  businessModel: String     // Overall business model description
}
```

### AWSDeploymentPlan
```javascript
{
  architecture: String,     // Architecture description
  services: String[],       // AWS services used
  deploymentStrategy: String // Deployment approach
}
```

### DevelopmentRoadmap
```javascript
{
  phases: Phase[],          // Development phases
  milestones: Milestone[],  // Key milestones
  timeline: String          // Overall timeline
}

Phase: {
  name: String,             // Phase name
  features: String[],       // Features in phase
  duration: String          // Phase duration
}

Milestone: {
  name: String,             // Milestone name
  description: String,      // What's achieved
  phase: String             // Associated phase
}
```

### SuccessMetrics
```javascript
{
  kpis: String[],           // Key performance indicators
  analytics: String[],      // Analytics to track
  measurement: String       // Measurement strategy
}
```

---

**Document Version**: 1.0  
**Last Updated**: 2026-05-05  
**Status**: Complete
