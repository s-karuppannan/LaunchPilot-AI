# Backend Unit - Business Logic Model

## Overview
This document defines the core business logic for the LaunchPilot AI backend, focusing on intelligent blueprint generation with moderate conditional logic based on industry, budget, and platform.

---

## Blueprint Generation Orchestration Flow

### Main Orchestration Algorithm

```
generateBlueprint(inputData):
  1. Extract keywords from startup idea
  2. Detect industry from keywords and idea text
  3. Assess complexity level based on platform and features
  4. Generate Product Overview (industry-aware)
  5. Generate Core Features (industry + budget + platform)
  6. Generate Website Pages (industry + platform)
  7. Generate Technology Stack (platform + budget)
  8. Generate Database Structure (industry + features)
  9. Generate Monetization Strategy (industry + budget)
  10. Generate AWS Deployment Plan (platform + budget)
  11. Generate Development Roadmap (complexity + budget)
  12. Generate Success Metrics (industry)
  13. Return complete blueprint object
```

### Keyword Extraction Algorithm

**Purpose**: Extract meaningful keywords from startup idea for industry detection

**Algorithm**:
```
extractKeywords(startupIdea):
  1. Convert to lowercase
  2. Remove common stop words (the, a, an, is, for, etc.)
  3. Split into words
  4. Filter words with length >= 3
  5. Identify key business terms (nouns, verbs related to business)
  6. Return array of keywords (max 10-15 most relevant)
```

**Example**:
- Input: "AI-powered meal planning app for busy professionals"
- Output: ["ai", "powered", "meal", "planning", "app", "busy", "professionals"]

### Industry Detection Logic

**Purpose**: Classify startup into one of 10-12 industry categories

**Classification Rules**:

| Industry | Primary Keywords | Secondary Keywords | Characteristics |
|----------|-----------------|-------------------|-----------------|
| **E-commerce** | shop, store, marketplace, buy, sell, retail, product | cart, checkout, inventory, shipping | Buying/selling goods online |
| **SaaS** | software, platform, tool, service, automation, cloud | subscription, dashboard, workflow | Software as a service |
| **FinTech** | payment, finance, banking, investment, crypto, wallet | transaction, money, trading | Financial technology |
| **HealthTech** | health, medical, fitness, wellness, doctor, patient | diagnosis, treatment, exercise | Healthcare technology |
| **EdTech** | education, learning, course, training, student, teacher | lesson, curriculum, study | Educational technology |
| **Social** | social, community, network, connect, share, chat | friends, messaging, feed | Social networking |
| **FoodTech** | food, restaurant, meal, recipe, delivery, dining | menu, order, kitchen | Food and dining |
| **TravelTech** | travel, booking, hotel, flight, trip, vacation | destination, itinerary, tourism | Travel and hospitality |
| **PropTech** | property, real estate, rental, housing, apartment | lease, tenant, landlord | Property technology |
| **MarketingTech** | marketing, advertising, campaign, analytics, seo | promotion, brand, engagement | Marketing technology |
| **HRTech** | hr, recruitment, hiring, employee, talent, job | resume, applicant, onboarding | Human resources tech |
| **General** | (fallback) | (fallback) | No specific industry match |

**Detection Algorithm**:
```
detectIndustry(startupIdea, keywords):
  1. Initialize industry scores (all = 0)
  2. For each keyword:
     - Check against primary keywords (score +3)
     - Check against secondary keywords (score +1)
  3. Check startup idea text for characteristic phrases (score +2)
  4. Return industry with highest score
  5. If all scores = 0, return "General"
```

**Example**:
- Input: "AI-powered meal planning app for busy professionals"
- Keywords: ["ai", "meal", "planning", "app", "professionals"]
- Scores: FoodTech = 5 (meal +3, planning +1, app +1), SaaS = 2 (app +1, platform +1)
- Result: "FoodTech"

---

## Conditional Content Generation Logic

### Budget-Based Adjustments

**Budget Tiers**:
- **Low Budget**: $0 - $10,000
- **Medium Budget**: $10,000 - $50,000
- **High Budget**: $50,000+

**Impact on Content**:

| Section | Low Budget | Medium Budget | High Budget |
|---------|-----------|---------------|-------------|
| **Core Features** | 3-5 MVP features | 5-8 core features | 8-12 comprehensive features |
| **Technology Stack** | Cost-effective (React, Node, MongoDB, Serverless) | Balanced (React, Node, PostgreSQL, Containers) | Premium (Next.js, NestJS, PostgreSQL, Kubernetes) |
| **AWS Deployment** | Lambda + API Gateway + DynamoDB | ECS Fargate + RDS + CloudFront | EKS + Aurora + Full CDN + Multi-region |
| **Development Roadmap** | 2-3 phases, 3-6 months | 3-4 phases, 6-12 months | 4-5 phases, 12-18 months |
| **Monetization** | Freemium, ads | Subscription tiers | Enterprise licensing, custom pricing |

### Platform-Based Adjustments

**Platform Types**:
- **Web**: Browser-based application
- **Mobile**: iOS/Android native or hybrid
- **Hybrid**: Web + Mobile

**Impact on Content**:

| Section | Web | Mobile | Hybrid |
|---------|-----|--------|--------|
| **Core Features** | Responsive design, browser features | Native features, offline mode | Cross-platform, sync |
| **Website Pages** | Full site structure | Landing page + app stores | Web portal + app |
| **Technology Stack** | React, Vue, Angular | React Native, Flutter, Swift/Kotlin | React + React Native |
| **Database** | Relational or NoSQL | Local + cloud sync | Unified backend |
| **Deployment** | Static hosting, CDN | App stores, OTA updates | Multi-platform deployment |

### Industry-Based Content Templates

**Product Overview Templates**:

Each industry has a template structure:
```
{
  summary: "[Industry-specific value proposition]",
  valueProp: "[Key benefits for industry]",
  problemSolution: "[Industry pain points and solutions]"
}
```

**Example - FoodTech**:
```
summary: "A meal planning platform that helps busy professionals eat healthier by providing personalized meal plans, recipes, and grocery lists."
valueProp: "Save time on meal planning, reduce food waste, and maintain a healthy diet with AI-powered recommendations tailored to your dietary preferences and schedule."
problemSolution: "Busy professionals struggle to plan healthy meals and often resort to unhealthy fast food. This platform solves that by automating meal planning and providing quick, healthy recipes."
```

**Example - SaaS**:
```
summary: "A cloud-based software platform that streamlines [specific workflow] for [target users], increasing productivity and reducing manual work."
valueProp: "Automate repetitive tasks, improve team collaboration, and gain insights through analytics - all in one intuitive platform."
problemSolution: "Teams waste hours on manual processes and disconnected tools. This platform centralizes workflows and automates routine tasks, freeing up time for strategic work."
```

---

## Section Generation Algorithms

### 1. Product Overview Generation

```
generateProductOverview(startupIdea, keywords, industry):
  1. Load industry template
  2. Extract core concept from startup idea
  3. Identify target users from idea
  4. Generate summary (1-2 sentences)
  5. Generate value proposition (2-3 key benefits)
  6. Generate problem/solution fit (1-2 paragraphs)
  7. Return ProductOverview object
```

### 2. Core Features Generation

```
generateCoreFeatures(startupIdea, platformType, budgetRange, keywords, industry):
  1. Determine feature count based on budget (low=3-5, medium=5-8, high=8-12)
  2. Load industry-specific feature templates
  3. Extract implied features from startup idea
  4. Add platform-specific features (web: responsive, mobile: offline, hybrid: sync)
  5. Prioritize features (high/medium/low)
  6. Return Feature[] array
```

**Feature Structure**:
```javascript
{
  name: "Feature Name",
  description: "What the feature does and why it's valuable",
  priority: "high" | "medium" | "low"
}
```

### 3. Website Pages Generation

```
generateWebsitePages(startupIdea, platformType, industry):
  1. Start with core pages (Home, About, Contact)
  2. Add industry-specific pages (e.g., FoodTech: Recipes, Meal Plans)
  3. Add platform-specific pages (Web: full site, Mobile: landing only)
  4. Add common pages (Pricing, FAQ, Blog, Terms, Privacy)
  5. Return Page[] array with purpose and sections
```

### 4. Technology Stack Generation

```
generateTechnologyStack(platformType, budgetRange, complexity):
  1. Select frontend based on platform (Web: React, Mobile: React Native, Hybrid: both)
  2. Select backend based on budget (Low: Serverless, Medium: Node+Express, High: NestJS)
  3. Select database based on complexity (Low: MongoDB, Medium: PostgreSQL, High: Aurora)
  4. Select infrastructure based on budget (Low: Serverless, Medium: Containers, High: Kubernetes)
  5. Add tools (Git, CI/CD, monitoring)
  6. Return TechnologyStack object
```

### 5. Database Structure Generation

```
generateDatabaseStructure(startupIdea, features, industry):
  1. Identify core entities from features (User, Product, Order, etc.)
  2. Add industry-specific entities (FoodTech: Recipe, MealPlan; SaaS: Workspace, Project)
  3. Define relationships (one-to-many, many-to-many)
  4. Add common entities (Session, Audit, Notification)
  5. Return DatabaseStructure with models and relationships
```

### 6. Monetization Strategy Generation

```
generateMonetizationStrategy(targetAudience, budgetRange, industry):
  1. Determine primary revenue model based on industry
     - E-commerce: Transaction fees, commissions
     - SaaS: Subscription tiers
     - FoodTech: Subscription + marketplace fees
  2. Add budget-appropriate pricing strategy
     - Low: Freemium, ads
     - Medium: Tiered subscriptions
     - High: Enterprise licensing
  3. Add industry-specific monetization options
  4. Return MonetizationStrategy object
```

### 7. AWS Deployment Plan Generation

```
generateAWSDeploymentPlan(techStack, budgetRange, scalability):
  1. Select compute based on budget
     - Low: Lambda functions
     - Medium: ECS Fargate
     - High: EKS (Kubernetes)
  2. Select database service
     - Low: DynamoDB
     - Medium: RDS
     - High: Aurora
  3. Add CDN (CloudFront)
  4. Add storage (S3)
  5. Add monitoring (CloudWatch)
  6. Return AWSDeploymentPlan object
```

### 8. Development Roadmap Generation

```
generateDevelopmentRoadmap(features, complexity, budgetRange):
  1. Determine phase count based on budget (low=2-3, medium=3-4, high=4-5)
  2. Group features into phases
     - Phase 1: MVP core features
     - Phase 2: Enhanced features
     - Phase 3: Advanced features
     - Phase 4+: Scaling and optimization
  3. Estimate timeline based on complexity
     - Low: 3-6 months
     - Medium: 6-12 months
     - High: 12-18 months
  4. Add milestones for each phase
  5. Return DevelopmentRoadmap object
```

### 9. Success Metrics Generation

```
generateSuccessMetrics(industry, targetAudience, monetization):
  1. Add industry-specific KPIs
     - E-commerce: Conversion rate, AOV, cart abandonment
     - SaaS: MRR, churn rate, user engagement
     - FoodTech: Meal plans created, recipes viewed, retention
  2. Add common metrics (DAU, MAU, retention, NPS)
  3. Add monetization metrics (revenue, ARPU, LTV)
  4. Add growth metrics (user acquisition, viral coefficient)
  5. Return SuccessMetrics object
```

---

## Complexity Assessment Algorithm

```
assessComplexity(features, platformType):
  1. Initialize complexity score = 0
  2. Add points for feature count (1 point per feature)
  3. Add points for platform (Web=1, Mobile=2, Hybrid=3)
  4. Add points for advanced features (AI=3, Real-time=2, Payments=2)
  5. Determine complexity level:
     - Score 0-5: Low
     - Score 6-12: Medium
     - Score 13+: High
  6. Return complexity level
```

---

## Error Handling Logic

### Input Validation

**Startup Idea Validation**:
```
validateStartupIdea(startupIdea):
  - Must not be empty
  - Must be at least 10 characters
  - Must be at most 1000 characters
  - Must contain at least 3 words
  - Throw ValidationError if invalid
```

**Filter Validation**:
```
validateFilters(targetAudience, budgetRange, platformType):
  - targetAudience must be in allowed list
  - budgetRange must be in allowed list
  - platformType must be in allowed list
  - Throw ValidationError if invalid
```

### Service Error Handling

**Blueprint Generation Errors**:
- ValidationError: Invalid input (400)
- ServiceError: Generation failed (500)
- DatabaseError: Save failed (500)

**Error Response Format**:
```javascript
{
  error: "ErrorType",
  message: "User-friendly error message",
  statusCode: 400 | 500
}
```

---

## Performance Considerations

### Target Performance
- Blueprint generation: 3-5 seconds
- Database save: < 500ms
- API response: < 6 seconds total

### Optimization Strategies
- Parallel section generation where possible
- Efficient keyword extraction (limit to 15 keywords)
- Cached industry templates
- Indexed database queries

---

**Document Version**: 1.0  
**Last Updated**: 2026-05-05  
**Status**: Complete
