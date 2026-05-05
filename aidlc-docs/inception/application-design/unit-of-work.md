# LaunchPilot AI - Unit of Work Definitions

## Overview
LaunchPilot AI is decomposed into **2 primary units of work** with a **shared code package**, organized in a monorepo structure for efficient development and workshop demonstration.

---

## Unit Decomposition Strategy

### Approach
**2-Unit Layer-Based Decomposition**:
- **Unit 1**: Frontend Unit (React + Tailwind CSS)
- **Unit 2**: Backend Unit (Express + MongoDB)
- **Shared**: Common types, interfaces, and utilities

### Rationale
- **Clear separation of concerns**: Frontend and backend have distinct technologies and responsibilities
- **Parallel development potential**: After backend API contracts are defined, frontend can develop independently
- **Minimal inter-unit dependencies**: Communication via well-defined REST API
- **Workshop-friendly**: Easy to demonstrate full stack architecture with clear boundaries
- **Efficient implementation**: Two focused units rather than over-fragmented smaller units

---

## Unit 1: Frontend Unit

### Unit ID
`frontend-unit`

### Unit Name
Frontend Application Unit

### Description
Complete React-based single-page application with premium dark futuristic UI, including homepage with input form and dashboard with blueprint analysis display.

### Responsibilities
- **User Interface**: All visual components and layouts
- **User Interactions**: Form handling, navigation, button clicks
- **State Management**: Global state with React Context API
- **API Communication**: HTTP requests to backend via ApiService
- **Session Management**: localStorage-based session ID management
- **Error Handling**: Error boundaries for React component errors
- **Routing**: Client-side routing between homepage and dashboard
- **Premium Design**: Dark futuristic SaaS theme with glassmorphism and gradients

### Components (42 total)
**Page Components (2)**:
- HomePage - Landing page with input form
- DashboardPage - Results dashboard with blueprint display

**Homepage Feature (3)**:
- HeroSection - Glowing hero title and subtitle
- InputForm - Startup idea and filter inputs
- FeatureCards - Three premium feature cards

**Dashboard Feature (14)**:
- Sidebar - Left navigation menu
- Toolbar - Top action bar
- HeroSummaryCard - Blueprint overview
- ProductOverviewSection - Business concept analysis
- CoreFeaturesSection - Essential features list
- WebsitePagesSection - Recommended pages
- TechnologyStackSection - Tech recommendations
- DatabaseStructureSection - Data models
- MonetizationStrategySection - Revenue models
- AWSDeploymentSection - Cloud architecture
- DevelopmentRoadmapSection - Implementation phases
- SuccessMetricsSection - KPIs and analytics
- AnalysisCard - Reusable analysis section card

**Shared Components (7)**:
- LoadingSpinner - Premium loading animation
- ErrorBoundary - Error handling wrapper
- Button - Reusable button component
- Card - Glassmorphism card container
- AppContext - Global state provider
- SessionProvider - Session management
- ApiService - HTTP client for backend

### Technology Stack
- **Framework**: React 18+
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Routing**: React Router
- **HTTP Client**: Fetch API
- **Build Tool**: Vite
- **Package Manager**: npm

### Key Features
- Premium dark futuristic SaaS design
- Glassmorphism card effects
- Neon blue and purple gradients
- Smooth animations and transitions
- Responsive layout
- Form validation
- Loading states
- Error handling with boundaries

### External Dependencies
- Backend API endpoints (defined in API contract)
- Shared types and interfaces (from shared package)

### Development Priority
**Priority**: 2 (Develop after Backend Unit establishes API contracts)

### Estimated Complexity
**Medium** - Well-defined React patterns, moderate component count, premium UI implementation

---

## Unit 2: Backend Unit

### Unit ID
`backend-unit`

### Unit Name
Backend API and Database Unit

### Description
Complete Express.js backend with intelligent blueprint generation service, MongoDB database integration, and RESTful API endpoints.

### Responsibilities
- **API Endpoints**: RESTful endpoints for blueprint operations
- **Business Logic**: Intelligent blueprint generation with conditional logic
- **Database Operations**: MongoDB CRUD operations via Mongoose
- **Session Validation**: Session ID validation and management
- **Error Handling**: Centralized error middleware
- **Request Validation**: Input validation middleware
- **CORS Configuration**: Cross-origin resource sharing setup
- **Blueprint Generation**: 9 analysis sections with industry/budget/platform logic

### Components (13 total)
**Routes (2)**:
- BlueprintRoutes - Blueprint API endpoints
- HealthRoutes - Health check endpoint

**Controllers (1)**:
- BlueprintController - Request handling and orchestration

**Services (3)**:
- BlueprintGenerationService - Intelligent blueprint generation
- BlueprintStorageService - Database operations
- SessionService - Session management

**Models (1)**:
- BlueprintModel - Mongoose schema and methods

**Middleware (3)**:
- ErrorMiddleware - Centralized error handling
- ValidationMiddleware - Request validation
- CorsMiddleware - CORS configuration

**Configuration (2)**:
- DatabaseConfig - MongoDB connection
- ServerConfig - Express app setup

**Entry Point (1)**:
- server.js - Application entry point

### Technology Stack
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: MongoDB
- **ODM**: Mongoose
- **Validation**: Custom middleware
- **Session**: UUID + localStorage (client-side)
- **Package Manager**: npm

### API Endpoints
1. **POST /api/generateBlueprint** - Generate complete startup blueprint
2. **POST /api/saveBlueprint** - Mark blueprint as saved
3. **GET /api/getBlueprintHistory** - Retrieve saved blueprints
4. **GET /api/health** - Health check

### Key Features
- Service-oriented architecture (Routes → Controllers → Services → Models)
- Intelligent blueprint generation with conditional logic
- Industry detection (E-commerce, SaaS, FinTech, HealthTech, EdTech, Social)
- Budget-based adjustments (Low, Medium, High)
- Platform-based adjustments (Web, Mobile, Hybrid)
- Audience-based adjustments (B2B, B2C, Niche)
- MongoDB integration with Mongoose ODM
- Centralized error handling
- Request validation
- CORS support

### External Dependencies
- MongoDB database (local or MongoDB Atlas)
- Shared types and interfaces (from shared package)

### Development Priority
**Priority**: 1 (Develop first to establish API contracts and database schema)

### Estimated Complexity
**Medium-High** - Complex business logic in BlueprintGenerationService, multiple services, database integration

---

## Shared Package

### Package ID
`shared-package`

### Package Name
Shared Types and Utilities

### Description
Common code shared between frontend and backend units, including TypeScript interfaces, type definitions, and utility functions.

### Responsibilities
- **Type Definitions**: Blueprint, FormData, API request/response types
- **Interfaces**: Shared interfaces for data structures
- **Constants**: Shared constants (dropdown options, validation rules)
- **Utilities**: Common utility functions (validation helpers, formatters)

### Contents
**Types**:
- `Blueprint` - Complete blueprint data structure
- `FormData` - User input form data
- `ProductOverview` - Product overview section type
- `Feature` - Core feature type
- `Page` - Website page type
- `TechnologyStack` - Tech stack type
- `DatabaseStructure` - Database structure type
- `MonetizationStrategy` - Monetization strategy type
- `AWSDeploymentPlan` - AWS deployment plan type
- `DevelopmentRoadmap` - Development roadmap type
- `SuccessMetrics` - Success metrics type

**Constants**:
- `TARGET_AUDIENCES` - Dropdown options for target audience
- `BUDGET_RANGES` - Dropdown options for budget range
- `PLATFORM_TYPES` - Dropdown options for platform type
- `VALIDATION_RULES` - Shared validation rules

**Utilities**:
- `validateStartupIdea()` - Validate startup idea input
- `formatDate()` - Date formatting utility
- `generateSessionId()` - Session ID generation (if shared)

### Technology
- **Language**: TypeScript (for type definitions)
- **Format**: ES modules
- **Location**: `shared/` directory in monorepo root

### Usage
- Frontend imports types for API calls and state management
- Backend imports types for request/response validation
- Both units import constants for consistency

---

## Code Organization Strategy

### Monorepo Structure

```
launchpilot-ai/                    # Monorepo root
├── frontend/                      # Frontend Unit
│   ├── src/
│   │   ├── homepage/              # Homepage feature
│   │   │   ├── HomePage.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── InputForm.jsx
│   │   │   └── FeatureCards.jsx
│   │   ├── dashboard/             # Dashboard feature
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Toolbar.jsx
│   │   │   ├── HeroSummaryCard.jsx
│   │   │   └── sections/
│   │   │       ├── ProductOverviewSection.jsx
│   │   │       ├── CoreFeaturesSection.jsx
│   │   │       ├── WebsitePagesSection.jsx
│   │   │       ├── TechnologyStackSection.jsx
│   │   │       ├── DatabaseStructureSection.jsx
│   │   │       ├── MonetizationStrategySection.jsx
│   │   │       ├── AWSDeploymentSection.jsx
│   │   │       ├── DevelopmentRoadmapSection.jsx
│   │   │       └── SuccessMetricsSection.jsx
│   │   ├── shared/                # Shared frontend components
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── ErrorBoundary.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── AnalysisCard.jsx
│   │   ├── context/               # Context providers
│   │   │   ├── AppContext.jsx
│   │   │   └── SessionProvider.jsx
│   │   ├── services/              # Frontend services
│   │   │   └── apiService.js
│   │   ├── App.jsx                # Root component
│   │   └── main.jsx               # Entry point
│   ├── public/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── backend/                       # Backend Unit
│   ├── src/
│   │   ├── routes/                # API routes
│   │   │   ├── blueprintRoutes.js
│   │   │   └── healthRoutes.js
│   │   ├── controllers/           # Controllers
│   │   │   └── BlueprintController.js
│   │   ├── services/              # Business logic services
│   │   │   ├── BlueprintGenerationService.js
│   │   │   ├── BlueprintStorageService.js
│   │   │   └── SessionService.js
│   │   ├── models/                # Mongoose models
│   │   │   └── Blueprint.js
│   │   ├── middleware/            # Express middleware
│   │   │   ├── errorMiddleware.js
│   │   │   ├── validationMiddleware.js
│   │   │   └── corsMiddleware.js
│   │   ├── config/                # Configuration
│   │   │   ├── database.js
│   │   │   └── server.js
│   │   └── server.js              # Entry point
│   ├── package.json
│   └── .env.example
│
├── shared/                        # Shared package
│   ├── types/
│   │   ├── Blueprint.ts
│   │   ├── FormData.ts
│   │   └── index.ts
│   ├── constants/
│   │   ├── dropdownOptions.ts
│   │   └── validationRules.ts
│   ├── utils/
│   │   ├── validation.ts
│   │   └── formatting.ts
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json                   # Root package.json (optional)
```

### Deployment Model
- **Frontend**: Static hosting (Netlify, Vercel, S3 + CloudFront)
- **Backend**: Node.js server (EC2, ECS, App Runner, Heroku)
- **Database**: MongoDB Atlas (managed cloud service)

---

## Development Sequence

### Phase 1: Backend Unit (Priority 1)
**Goal**: Establish API contracts, database schema, and business logic

**Steps**:
1. Set up Express server and MongoDB connection
2. Define Mongoose schema for Blueprint model
3. Implement BlueprintGenerationService with all 9 sections
4. Implement BlueprintStorageService and SessionService
5. Create API routes and controllers
6. Add middleware (error handling, validation, CORS)
7. Test API endpoints with Postman or similar
8. Document API contracts for frontend consumption

**Deliverables**:
- Working backend API with all endpoints
- Intelligent blueprint generation logic
- MongoDB integration
- API documentation

### Phase 2: Shared Package (Priority 1.5)
**Goal**: Define shared types and constants

**Steps**:
1. Create TypeScript type definitions for Blueprint and related types
2. Define constants for dropdown options
3. Create shared validation utilities
4. Export all types and utilities

**Deliverables**:
- Shared types package
- Constants for frontend and backend
- Utility functions

### Phase 3: Frontend Unit (Priority 2)
**Goal**: Build premium UI with API integration

**Steps**:
1. Set up React + Vite + Tailwind CSS
2. Create context providers (AppContext, SessionProvider)
3. Implement ApiService with backend integration
4. Build HomePage with InputForm
5. Build DashboardPage with all analysis sections
6. Implement shared UI components (Button, Card, LoadingSpinner)
7. Add error boundaries and error handling
8. Style with premium dark futuristic theme
9. Test complete user flows

**Deliverables**:
- Working React frontend
- Premium UI with glassmorphism and gradients
- Complete integration with backend API
- Session management

### Phase 4: Integration Testing (Priority 3)
**Goal**: Verify end-to-end functionality

**Steps**:
1. Test complete blueprint generation flow
2. Test save blueprint functionality
3. Test blueprint history retrieval
4. Test error scenarios
5. Verify premium UI animations and transitions
6. Performance testing (blueprint generation speed)

**Deliverables**:
- Fully integrated application
- Verified user flows
- Performance benchmarks

---

## Integration Strategy

### Approach
**Incremental Integration**: Integrate each unit as it's completed

### Integration Points

#### Backend → Frontend Integration
**Trigger**: After Backend Unit Phase 1 completes

**Integration Steps**:
1. Backend team provides API documentation and endpoint URLs
2. Frontend team implements ApiService with backend endpoints
3. Frontend team tests API calls with real backend
4. Teams collaborate on error handling and edge cases

**API Contract**:
- POST /api/generateBlueprint - Request/response format defined
- POST /api/saveBlueprint - Request/response format defined
- GET /api/getBlueprintHistory - Response format defined
- Error response format standardized

#### Shared Package Integration
**Trigger**: After Shared Package creation

**Integration Steps**:
1. Frontend imports types for API calls and state
2. Backend imports types for validation
3. Both units import constants for consistency
4. Teams verify type compatibility

---

## Unit Summary

| Unit | Components | Priority | Complexity | Dependencies |
|------|-----------|----------|------------|--------------|
| Backend Unit | 13 | 1 (First) | Medium-High | MongoDB, Shared Package |
| Shared Package | Types/Constants | 1.5 (Second) | Low | None |
| Frontend Unit | 42 | 2 (Third) | Medium | Backend API, Shared Package |

**Total Components**: 55 (42 frontend + 13 backend)  
**Total Units**: 2 primary units + 1 shared package  
**Development Approach**: Hybrid (Backend first, then parallel frontend with incremental integration)  
**Code Organization**: Monorepo with frontend/, backend/, shared/ directories  
**Integration Strategy**: Incremental integration as units complete

---

**Document Version**: 1.0  
**Last Updated**: 2026-05-05  
**Status**: Complete and Ready for Construction Phase
