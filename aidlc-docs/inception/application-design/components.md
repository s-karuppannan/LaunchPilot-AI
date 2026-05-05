# LaunchPilot AI - Component Definitions

## Overview
This document defines all components in the LaunchPilot AI application, organized by layer and feature area.

---

## Frontend Components (React + Tailwind CSS)

### Feature: Homepage

#### Component: HomePage
- **Type**: Page Component
- **Location**: `src/homepage/HomePage.jsx`
- **Purpose**: Main landing page with startup idea input form
- **Responsibilities**:
  - Render premium dark futuristic hero section
  - Display feature cards showcasing key capabilities
  - Collect user input (startup idea, target audience, budget, platform)
  - Validate form inputs before submission
  - Trigger blueprint generation and navigate to dashboard
  - Display premium loading animation during generation

#### Component: HeroSection
- **Type**: Layout Component
- **Location**: `src/homepage/HeroSection.jsx`
- **Purpose**: Hero section with glowing title and subtitle
- **Responsibilities**:
  - Render animated glowing title
  - Display compelling subtitle text
  - Apply premium gradient and glassmorphism effects

#### Component: InputForm
- **Type**: Form Component
- **Location**: `src/homepage/InputForm.jsx`
- **Purpose**: Collect startup concept and filter parameters
- **Responsibilities**:
  - Render startup idea textarea
  - Render target audience dropdown
  - Render budget range dropdown
  - Render platform type dropdown
  - Validate all required fields
  - Handle form submission
  - Display validation errors

#### Component: FeatureCards
- **Type**: Display Component
- **Location**: `src/homepage/FeatureCards.jsx`
- **Purpose**: Showcase three key platform features
- **Responsibilities**:
  - Render three premium feature cards
  - Apply glassmorphism card styling
  - Display feature icons, titles, and descriptions
  - Implement hover animations

### Feature: Dashboard

#### Component: DashboardPage
- **Type**: Page Component
- **Location**: `src/dashboard/DashboardPage.jsx`
- **Purpose**: Full-screen results dashboard displaying blueprint analysis
- **Responsibilities**:
  - Orchestrate dashboard layout (sidebar, toolbar, content)
  - Load blueprint data from context or API
  - Handle navigation between analysis sections
  - Manage save blueprint functionality
  - Display loading states and error messages

#### Component: Sidebar
- **Type**: Navigation Component
- **Location**: `src/dashboard/Sidebar.jsx`
- **Purpose**: Left sidebar navigation for analysis sections
- **Responsibilities**:
  - Render navigation menu with section links
  - Highlight active section
  - Enable smooth scrolling to sections
  - Apply premium dark theme styling

#### Component: Toolbar
- **Type**: Action Bar Component
- **Location**: `src/dashboard/Toolbar.jsx`
- **Purpose**: Top toolbar with actions and metadata
- **Responsibilities**:
  - Display blueprint metadata (timestamp, status)
  - Render "Save Blueprint" action button
  - Render "New Blueprint" action button
  - Handle toolbar actions

#### Component: HeroSummaryCard
- **Type**: Display Component
- **Location**: `src/dashboard/HeroSummaryCard.jsx`
- **Purpose**: High-level blueprint overview card
- **Responsibilities**:
  - Display startup idea summary
  - Show key metrics and highlights
  - Apply premium card styling with gradients

#### Component: AnalysisCard
- **Type**: Display Component
- **Location**: `src/dashboard/AnalysisCard.jsx`
- **Purpose**: Reusable card for each analysis section
- **Responsibilities**:
  - Render section title and icon
  - Display section content (text, lists, tables)
  - Apply consistent card styling
  - Support expandable/collapsible content

#### Component: ProductOverviewSection
- **Type**: Content Component
- **Location**: `src/dashboard/sections/ProductOverviewSection.jsx`
- **Purpose**: Display product overview analysis
- **Responsibilities**:
  - Render business concept summary
  - Display value proposition
  - Show problem/solution fit analysis

#### Component: CoreFeaturesSection
- **Type**: Content Component
- **Location**: `src/dashboard/sections/CoreFeaturesSection.jsx`
- **Purpose**: Display core features analysis
- **Responsibilities**:
  - Render list of essential product features
  - Display feature descriptions and priorities

#### Component: WebsitePagesSection
- **Type**: Content Component
- **Location**: `src/dashboard/sections/WebsitePagesSection.jsx`
- **Purpose**: Display recommended website pages
- **Responsibilities**:
  - Render suggested site structure
  - Display page hierarchy and navigation

#### Component: TechnologyStackSection
- **Type**: Content Component
- **Location**: `src/dashboard/sections/TechnologyStackSection.jsx`
- **Purpose**: Display technology stack recommendations
- **Responsibilities**:
  - Render frontend, backend, database technologies
  - Display infrastructure and tooling recommendations

#### Component: DatabaseStructureSection
- **Type**: Content Component
- **Location**: `src/dashboard/sections/DatabaseStructureSection.jsx`
- **Purpose**: Display database structure analysis
- **Responsibilities**:
  - Render data models and schemas
  - Display entity relationships

#### Component: MonetizationStrategySection
- **Type**: Content Component
- **Location**: `src/dashboard/sections/MonetizationStrategySection.jsx`
- **Purpose**: Display monetization strategy analysis
- **Responsibilities**:
  - Render revenue models
  - Display pricing strategies and business model

#### Component: AWSDeploymentSection
- **Type**: Content Component
- **Location**: `src/dashboard/sections/AWSDeploymentSection.jsx`
- **Purpose**: Display AWS deployment plan
- **Responsibilities**:
  - Render cloud architecture recommendations
  - Display AWS services and deployment strategy

#### Component: DevelopmentRoadmapSection
- **Type**: Content Component
- **Location**: `src/dashboard/sections/DevelopmentRoadmapSection.jsx`
- **Purpose**: Display development roadmap
- **Responsibilities**:
  - Render phased implementation plan
  - Display milestones and timelines

#### Component: SuccessMetricsSection
- **Type**: Content Component
- **Location**: `src/dashboard/sections/SuccessMetricsSection.jsx`
- **Purpose**: Display success metrics analysis
- **Responsibilities**:
  - Render KPIs and analytics framework
  - Display measurement strategies

### Feature: Shared

#### Component: LoadingSpinner
- **Type**: UI Component
- **Location**: `src/shared/LoadingSpinner.jsx`
- **Purpose**: Premium loading animation
- **Responsibilities**:
  - Render animated loading spinner
  - Display loading message
  - Apply premium animation effects

#### Component: ErrorBoundary
- **Type**: Error Handling Component
- **Location**: `src/shared/ErrorBoundary.jsx`
- **Purpose**: Catch and display React errors gracefully
- **Responsibilities**:
  - Catch component errors
  - Display user-friendly error message
  - Provide recovery options

#### Component: Button
- **Type**: UI Component
- **Location**: `src/shared/Button.jsx`
- **Purpose**: Reusable premium button component
- **Responsibilities**:
  - Render styled button with variants (primary, secondary)
  - Handle click events
  - Support loading and disabled states
  - Apply hover animations

#### Component: Card
- **Type**: UI Component
- **Location**: `src/shared/Card.jsx`
- **Purpose**: Reusable glassmorphism card component
- **Responsibilities**:
  - Render card container with premium styling
  - Support different card sizes and variants
  - Apply glassmorphism effects

### Context Providers

#### Component: AppContext
- **Type**: Context Provider
- **Location**: `src/context/AppContext.jsx`
- **Purpose**: Global application state management
- **Responsibilities**:
  - Manage session ID state
  - Manage current blueprint state
  - Provide state to all child components
  - Handle state updates

#### Component: SessionProvider
- **Type**: Context Provider
- **Location**: `src/context/SessionProvider.jsx`
- **Purpose**: Session management
- **Responsibilities**:
  - Initialize session ID from localStorage
  - Generate new session ID if needed
  - Persist session ID to localStorage
  - Provide session utilities

### Services (Frontend)

#### Component: ApiService
- **Type**: Service Module
- **Location**: `src/services/apiService.js`
- **Purpose**: Frontend API client for backend communication
- **Responsibilities**:
  - Make HTTP requests to backend API
  - Handle request/response formatting
  - Manage API error handling
  - Provide typed API methods

---

## Backend Components (Node.js + Express)

### Routes

#### Component: BlueprintRoutes
- **Type**: Express Router
- **Location**: `src/routes/blueprintRoutes.js`
- **Purpose**: Define blueprint-related API endpoints
- **Responsibilities**:
  - Define POST /api/generateBlueprint endpoint
  - Define POST /api/saveBlueprint endpoint
  - Define GET /api/getBlueprintHistory endpoint
  - Route requests to appropriate controllers

#### Component: HealthRoutes
- **Type**: Express Router
- **Location**: `src/routes/healthRoutes.js`
- **Purpose**: Health check endpoints
- **Responsibilities**:
  - Define GET /api/health endpoint
  - Return server status

### Controllers

#### Component: BlueprintController
- **Type**: Controller Class
- **Location**: `src/controllers/BlueprintController.js`
- **Purpose**: Handle blueprint-related HTTP requests
- **Responsibilities**:
  - Handle generateBlueprint requests
  - Handle saveBlueprint requests
  - Handle getBlueprintHistory requests
  - Validate request payloads
  - Delegate to service layer
  - Format HTTP responses
  - Handle controller-level errors

### Services

#### Component: BlueprintGenerationService
- **Type**: Service Class
- **Location**: `src/services/BlueprintGenerationService.js`
- **Purpose**: Intelligent blueprint generation with conditional logic
- **Responsibilities**:
  - Analyze startup idea and extract keywords
  - Detect industry and business type
  - Generate Product Overview based on idea
  - Generate Core Features based on platform and budget
  - Generate Recommended Website Pages
  - Generate Technology Stack recommendations
  - Generate Database Structure based on data needs
  - Generate Monetization Strategy based on audience and budget
  - Generate AWS Deployment Plan
  - Generate Development Roadmap with phases
  - Generate Success Metrics and KPIs
  - Apply conditional logic based on inputs
  - Orchestrate complete blueprint generation

#### Component: BlueprintStorageService
- **Type**: Service Class
- **Location**: `src/services/BlueprintStorageService.js`
- **Purpose**: Blueprint database operations
- **Responsibilities**:
  - Save blueprint to database
  - Retrieve blueprint by ID
  - Retrieve blueprint history by session ID
  - Update blueprint save status
  - Handle database errors

#### Component: SessionService
- **Type**: Service Class
- **Location**: `src/services/SessionService.js`
- **Purpose**: Session management and validation
- **Responsibilities**:
  - Validate session ID format
  - Generate new session ID if needed
  - Track session activity
  - Clean up expired sessions (optional)

### Models

#### Component: BlueprintModel
- **Type**: Mongoose Model
- **Location**: `src/models/Blueprint.js`
- **Purpose**: MongoDB schema for blueprint documents
- **Responsibilities**:
  - Define blueprint schema structure
  - Define schema validation rules
  - Provide model methods for queries
  - Handle timestamps automatically

### Middleware

#### Component: ErrorMiddleware
- **Type**: Express Middleware
- **Location**: `src/middleware/errorMiddleware.js`
- **Purpose**: Centralized error handling
- **Responsibilities**:
  - Catch all Express errors
  - Format error responses
  - Log errors for debugging
  - Return appropriate HTTP status codes

#### Component: ValidationMiddleware
- **Type**: Express Middleware
- **Location**: `src/middleware/validationMiddleware.js`
- **Purpose**: Request payload validation
- **Responsibilities**:
  - Validate request body structure
  - Validate required fields
  - Validate data types
  - Return validation errors

#### Component: CorsMiddleware
- **Type**: Express Middleware
- **Location**: `src/middleware/corsMiddleware.js`
- **Purpose**: CORS configuration
- **Responsibilities**:
  - Configure CORS headers
  - Allow frontend origin
  - Handle preflight requests

### Configuration

#### Component: DatabaseConfig
- **Type**: Configuration Module
- **Location**: `src/config/database.js`
- **Purpose**: MongoDB connection configuration
- **Responsibilities**:
  - Establish MongoDB connection
  - Handle connection errors
  - Configure connection options
  - Export database connection

#### Component: ServerConfig
- **Type**: Configuration Module
- **Location**: `src/config/server.js`
- **Purpose**: Express server configuration
- **Responsibilities**:
  - Configure Express app
  - Register middleware
  - Register routes
  - Configure error handling
  - Export configured app

---

## Database Components (MongoDB)

### Collections

#### Collection: blueprints
- **Purpose**: Store generated blueprint documents
- **Schema**: Defined by BlueprintModel
- **Indexes**: sessionId, createdAt, isSaved

---

## Component Summary

### Frontend Components: 28
- Page Components: 2
- Layout Components: 1
- Form Components: 1
- Display Components: 15
- UI Components: 4
- Context Providers: 2
- Service Modules: 1
- Error Handling: 1
- Navigation: 1

### Backend Components: 13
- Routes: 2
- Controllers: 1
- Services: 3
- Models: 1
- Middleware: 3
- Configuration: 2
- Health Check: 1

### Database Components: 1
- Collections: 1

**Total Components: 42**

---

**Document Version**: 1.0  
**Last Updated**: 2026-05-05  
**Status**: Complete
