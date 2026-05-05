# LaunchPilot AI - Unit of Work Story Mapping

## Overview
This document maps requirements and functional areas to units of work. Since User Stories stage was skipped, this mapping is based on functional requirements from the requirements document.

---

## Mapping Strategy

**Approach**: Map functional requirements to units based on implementation responsibility

**Rationale**: User Stories stage was skipped due to clear, well-defined requirements. Functional requirements provide sufficient granularity for unit assignment.

---

## Functional Requirements to Unit Mapping

### Frontend Unit Requirements

#### FR-1.1: Homepage Features

**FR-1.1.1: Premium Homepage Design**
- **Unit**: Frontend Unit
- **Rationale**: Pure UI implementation
- **Components**: HomePage, HeroSection, FeatureCards
- **Priority**: High
- **Complexity**: Medium

**FR-1.1.2: User Input Collection**
- **Unit**: Frontend Unit
- **Rationale**: Form handling and validation
- **Components**: InputForm, Button
- **Priority**: High
- **Complexity**: Low

**FR-1.1.3: Blueprint Generation Trigger**
- **Unit**: Frontend Unit (UI) + Backend Unit (Processing)
- **Rationale**: Frontend triggers, backend processes
- **Components**: 
  - Frontend: InputForm, LoadingSpinner, ApiService
  - Backend: BlueprintRoutes, BlueprintController, BlueprintGenerationService
- **Priority**: High
- **Complexity**: High (cross-unit coordination)

#### FR-1.2: Results Dashboard Features

**FR-1.2.1: Dashboard Layout**
- **Unit**: Frontend Unit
- **Rationale**: Pure UI layout
- **Components**: DashboardPage, Sidebar, Toolbar, HeroSummaryCard
- **Priority**: High
- **Complexity**: Medium

**FR-1.2.2: Blueprint Analysis Sections**
- **Unit**: Frontend Unit (Display) + Backend Unit (Generation)
- **Rationale**: Backend generates content, frontend displays
- **Components**:
  - Frontend: All Section Components, AnalysisCard
  - Backend: BlueprintGenerationService (all generate methods)
- **Priority**: High
- **Complexity**: High (9 sections with conditional content)

**FR-1.2.3: Dynamic Content Generation**
- **Unit**: Backend Unit
- **Rationale**: Business logic for conditional content
- **Components**: BlueprintGenerationService
- **Priority**: High
- **Complexity**: High (intelligent conditional logic)

### Backend Unit Requirements

#### FR-1.3: Backend API Features

**FR-1.3.1: Blueprint Generation API**
- **Unit**: Backend Unit
- **Rationale**: API endpoint and business logic
- **Components**: BlueprintRoutes, BlueprintController, BlueprintGenerationService
- **Priority**: High
- **Complexity**: High

**FR-1.3.2: Blueprint Storage API**
- **Unit**: Backend Unit
- **Rationale**: Database operations
- **Components**: BlueprintRoutes, BlueprintController, BlueprintStorageService, BlueprintModel
- **Priority**: High
- **Complexity**: Medium

**FR-1.3.3: Blueprint History API**
- **Unit**: Backend Unit
- **Rationale**: Database query operations
- **Components**: BlueprintRoutes, BlueprintController, BlueprintStorageService, BlueprintModel
- **Priority**: Medium
- **Complexity**: Low

#### FR-1.4: Database Features

**FR-1.4.1: Blueprint Data Model**
- **Unit**: Backend Unit
- **Rationale**: Mongoose schema definition
- **Components**: BlueprintModel
- **Priority**: High
- **Complexity**: Medium

**FR-1.4.2: Session Management**
- **Unit**: Frontend Unit (Storage) + Backend Unit (Validation)
- **Rationale**: Frontend manages localStorage, backend validates
- **Components**:
  - Frontend: SessionProvider, AppContext
  - Backend: SessionService
- **Priority**: Medium
- **Complexity**: Low

### Shared Package Requirements

**Type Definitions**
- **Unit**: Shared Package
- **Rationale**: Common types for both units
- **Components**: Blueprint types, FormData types, Analysis section types
- **Priority**: High
- **Complexity**: Low

**Constants**
- **Unit**: Shared Package
- **Rationale**: Consistent dropdown options
- **Components**: TARGET_AUDIENCES, BUDGET_RANGES, PLATFORM_TYPES
- **Priority**: Medium
- **Complexity**: Low

---

## Unit Assignment Matrix

| Functional Requirement | Frontend Unit | Backend Unit | Shared Package | Priority | Complexity |
|------------------------|---------------|--------------|----------------|----------|------------|
| FR-1.1.1: Premium Homepage Design | ✅ Primary | ❌ | ❌ | High | Medium |
| FR-1.1.2: User Input Collection | ✅ Primary | ❌ | ✅ Constants | High | Low |
| FR-1.1.3: Blueprint Generation Trigger | ✅ UI | ✅ Processing | ✅ Types | High | High |
| FR-1.2.1: Dashboard Layout | ✅ Primary | ❌ | ❌ | High | Medium |
| FR-1.2.2: Blueprint Analysis Sections | ✅ Display | ✅ Generation | ✅ Types | High | High |
| FR-1.2.3: Dynamic Content Generation | ❌ | ✅ Primary | ❌ | High | High |
| FR-1.3.1: Blueprint Generation API | ❌ | ✅ Primary | ✅ Types | High | High |
| FR-1.3.2: Blueprint Storage API | ❌ | ✅ Primary | ✅ Types | High | Medium |
| FR-1.3.3: Blueprint History API | ❌ | ✅ Primary | ✅ Types | Medium | Low |
| FR-1.4.1: Blueprint Data Model | ❌ | ✅ Primary | ✅ Types | High | Medium |
| FR-1.4.2: Session Management | ✅ Storage | ✅ Validation | ❌ | Medium | Low |

**Legend**:
- ✅ Primary: Main responsibility
- ✅ Secondary: Supporting role
- ❌ Not involved

---

## Cross-Unit Requirements

### Requirement: Complete Blueprint Generation Flow

**Description**: User enters startup idea, system generates complete blueprint, displays results

**Units Involved**: Frontend Unit, Backend Unit, Shared Package

**Coordination**:
1. **Frontend Unit**: 
   - Collect user input via InputForm
   - Validate inputs
   - Call ApiService.generateBlueprint()
   - Display LoadingSpinner
   - Navigate to DashboardPage on success

2. **Backend Unit**:
   - Receive POST /api/generateBlueprint request
   - Validate request payload
   - Call BlueprintGenerationService.generateBlueprint()
   - Generate all 9 analysis sections with conditional logic
   - Save blueprint to MongoDB
   - Return blueprint in response

3. **Shared Package**:
   - Provide FormData type for request
   - Provide Blueprint type for response
   - Provide constants for dropdown options

**Integration Point**: REST API (POST /api/generateBlueprint)

**Success Criteria**:
- User can submit form
- Backend generates blueprint within 3-5 seconds
- Frontend displays complete blueprint with all sections
- Blueprint saved to database

---

### Requirement: Save Blueprint Functionality

**Description**: User can save generated blueprint for later retrieval

**Units Involved**: Frontend Unit, Backend Unit

**Coordination**:
1. **Frontend Unit**:
   - Display "Save Blueprint" button in Toolbar
   - Call ApiService.saveBlueprint(blueprintId, sessionId)
   - Display success message

2. **Backend Unit**:
   - Receive POST /api/saveBlueprint request
   - Validate session ID
   - Update blueprint document (isSaved = true, savedAt = now)
   - Return success response

**Integration Point**: REST API (POST /api/saveBlueprint)

**Success Criteria**:
- User can click save button
- Blueprint marked as saved in database
- Success message displayed to user

---

### Requirement: Blueprint History Retrieval

**Description**: User can view previously saved blueprints

**Units Involved**: Frontend Unit, Backend Unit

**Coordination**:
1. **Frontend Unit**:
   - Call ApiService.getBlueprintHistory(sessionId)
   - Display list of saved blueprints
   - Allow user to view saved blueprint

2. **Backend Unit**:
   - Receive GET /api/getBlueprintHistory request
   - Query MongoDB for saved blueprints by session ID
   - Return array of blueprints

**Integration Point**: REST API (GET /api/getBlueprintHistory)

**Success Criteria**:
- User can view saved blueprints
- Blueprints filtered by session ID
- User can click to view full blueprint

---

## Unit Development Priorities

### Priority 1: Backend Unit (Foundational)

**Requirements**:
- FR-1.3.1: Blueprint Generation API
- FR-1.3.2: Blueprint Storage API
- FR-1.3.3: Blueprint History API
- FR-1.4.1: Blueprint Data Model
- FR-1.4.2: Session Management (validation)
- FR-1.2.3: Dynamic Content Generation

**Rationale**: Backend must be complete before frontend can integrate

**Deliverables**:
- Working API endpoints
- Intelligent blueprint generation
- MongoDB integration
- API documentation

### Priority 2: Shared Package (Enabling)

**Requirements**:
- Type definitions for Blueprint, FormData, Analysis sections
- Constants for dropdown options
- Validation utilities

**Rationale**: Both units need shared types for consistency

**Deliverables**:
- Complete type definitions
- Exported constants
- Utility functions

### Priority 3: Frontend Unit (User-Facing)

**Requirements**:
- FR-1.1.1: Premium Homepage Design
- FR-1.1.2: User Input Collection
- FR-1.1.3: Blueprint Generation Trigger (UI)
- FR-1.2.1: Dashboard Layout
- FR-1.2.2: Blueprint Analysis Sections (display)
- FR-1.4.2: Session Management (storage)

**Rationale**: Frontend depends on backend API and shared types

**Deliverables**:
- Complete React application
- Premium UI with glassmorphism
- API integration
- Session management

---

## Requirement Coverage Validation

### All Functional Requirements Covered

✅ **Homepage Features** (FR-1.1):
- FR-1.1.1: Frontend Unit
- FR-1.1.2: Frontend Unit + Shared Package
- FR-1.1.3: Frontend Unit + Backend Unit + Shared Package

✅ **Dashboard Features** (FR-1.2):
- FR-1.2.1: Frontend Unit
- FR-1.2.2: Frontend Unit + Backend Unit + Shared Package
- FR-1.2.3: Backend Unit

✅ **Backend API Features** (FR-1.3):
- FR-1.3.1: Backend Unit + Shared Package
- FR-1.3.2: Backend Unit + Shared Package
- FR-1.3.3: Backend Unit + Shared Package

✅ **Database Features** (FR-1.4):
- FR-1.4.1: Backend Unit + Shared Package
- FR-1.4.2: Frontend Unit + Backend Unit

**Total Requirements**: 11  
**Requirements Assigned**: 11  
**Coverage**: 100%

---

## Non-Functional Requirements Mapping

### NFR-2.1: Performance Requirements

**NFR-2.1.1: Blueprint Generation Speed**
- **Unit**: Backend Unit
- **Component**: BlueprintGenerationService
- **Target**: 3-5 seconds
- **Implementation**: Optimize generation algorithms, async operations

**NFR-2.1.2: Page Load Performance**
- **Unit**: Frontend Unit
- **Components**: All page components
- **Target**: 2 seconds
- **Implementation**: Code splitting, lazy loading, optimized builds

### NFR-2.2: Usability Requirements

**NFR-2.2.1: Visual Design Quality**
- **Unit**: Frontend Unit
- **Components**: All UI components
- **Target**: Enterprise-grade dashboard quality
- **Implementation**: Tailwind CSS, glassmorphism, gradients, animations

**NFR-2.2.2: User Experience Flow**
- **Unit**: Frontend Unit + Backend Unit
- **Components**: All components
- **Target**: Intuitive, frictionless journey
- **Implementation**: Clear navigation, loading states, error handling

### NFR-2.3: Scalability Requirements

**NFR-2.3.1: Database Scalability**
- **Unit**: Backend Unit
- **Components**: BlueprintModel, DatabaseConfig
- **Target**: Support thousands of blueprints
- **Implementation**: Indexed queries, connection pooling

**NFR-2.3.2: API Scalability**
- **Unit**: Backend Unit
- **Components**: All backend components
- **Target**: Handle concurrent requests
- **Implementation**: Stateless design, horizontal scaling capability

### NFR-2.4: Maintainability Requirements

**NFR-2.4.1: Code Quality**
- **Unit**: All units
- **Components**: All components
- **Target**: Clean, maintainable codebase
- **Implementation**: Component-based architecture, service layer, separation of concerns

**NFR-2.4.2: Documentation**
- **Unit**: All units
- **Components**: Complex logic areas
- **Target**: Code comments, API documentation
- **Implementation**: JSDoc comments, API contract documentation

---

## Story Point Estimation (Relative)

| Unit | Story Points | Justification |
|------|--------------|---------------|
| Backend Unit | 13 | Complex business logic, 9 generation methods, database integration, API endpoints |
| Shared Package | 2 | Simple type definitions and constants |
| Frontend Unit | 21 | 42 components, premium UI, complex dashboard, API integration |
| Integration & Testing | 5 | End-to-end testing, integration verification |
| **Total** | **41** | Complete application |

**Note**: Story points are relative estimates for planning purposes

---

## Acceptance Criteria by Unit

### Backend Unit Acceptance Criteria

✅ All API endpoints functional:
- POST /api/generateBlueprint returns complete blueprint
- POST /api/saveBlueprint marks blueprint as saved
- GET /api/getBlueprintHistory returns saved blueprints
- GET /api/health returns server status

✅ Blueprint generation intelligence:
- Industry detection works correctly
- Budget-based adjustments applied
- Platform-based adjustments applied
- Audience-based adjustments applied
- All 9 sections generated with contextual content

✅ Database integration:
- Blueprints saved to MongoDB
- Queries return correct data
- Indexes improve query performance

✅ Error handling:
- Validation errors return 400
- Server errors return 500
- Error messages are user-friendly

### Frontend Unit Acceptance Criteria

✅ Homepage functionality:
- Premium design with glassmorphism
- Form collects all required inputs
- Validation prevents invalid submissions
- Loading animation displays during generation
- Navigation to dashboard on success

✅ Dashboard functionality:
- All 9 analysis sections display correctly
- Sidebar navigation works
- Save blueprint button functional
- Premium UI with gradients and animations
- Responsive layout

✅ API integration:
- ApiService successfully calls backend
- Error handling displays user-friendly messages
- Loading states work correctly

✅ Session management:
- Session ID generated and stored
- Session persists across page refreshes
- Session ID sent with API requests

### Shared Package Acceptance Criteria

✅ Type definitions:
- All types exported correctly
- Types match API contracts
- No type errors in consuming units

✅ Constants:
- Dropdown options available
- Constants match backend expectations

---

## Summary

**Total Functional Requirements**: 11  
**Requirements Mapped to Units**: 11 (100% coverage)  
**Cross-Unit Requirements**: 3 (Blueprint Generation, Save, History)  
**Unit Development Sequence**: Backend → Shared → Frontend  
**Integration Points**: 3 (API, Shared→Backend, Shared→Frontend)  
**Estimated Story Points**: 41

**Validation**: All functional requirements assigned to appropriate units with clear responsibilities and integration points defined.

---

**Document Version**: 1.0  
**Last Updated**: 2026-05-05  
**Status**: Complete
