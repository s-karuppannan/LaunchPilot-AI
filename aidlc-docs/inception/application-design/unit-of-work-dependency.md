# LaunchPilot AI - Unit of Work Dependencies

## Overview
This document maps dependencies between units of work, defining integration points, data flows, and coordination requirements.

---

## Dependency Matrix

| Unit | Depends On | Provides To | Dependency Type | Integration Point |
|------|-----------|-------------|-----------------|-------------------|
| Backend Unit | MongoDB, Shared Package | Frontend Unit | Data Provider | REST API Endpoints |
| Frontend Unit | Backend Unit, Shared Package | End Users | Data Consumer | HTTP Requests |
| Shared Package | None | Backend Unit, Frontend Unit | Type Provider | Module Imports |

---

## Dependency Graph

```
                    ┌─────────────────┐
                    │  Shared Package │
                    │  (Types, Utils) │
                    └────────┬────────┘
                             │
                ┌────────────┴────────────┐
                │                         │
                │ imports types           │ imports types
                │                         │
        ┌───────▼────────┐       ┌───────▼────────┐
        │  Backend Unit  │       │ Frontend Unit  │
        │ (Express + DB) │       │    (React)     │
        └───────┬────────┘       └───────▲────────┘
                │                        │
                │ provides API           │ consumes API
                │                        │
                └────────────────────────┘
                     REST API (HTTP/JSON)


External Dependencies:
┌──────────────┐
│   MongoDB    │ ──────> Backend Unit
└──────────────┘

┌──────────────┐
│  End Users   │ ──────> Frontend Unit
└──────────────┘
```

---

## Unit 1: Backend Unit Dependencies

### Depends On

#### 1. MongoDB Database
- **Type**: External Dependency
- **Purpose**: Data persistence for blueprint documents
- **Connection**: Mongoose ODM
- **Configuration**: Connection string in environment variables
- **Required For**: BlueprintStorageService operations
- **Criticality**: High - Backend cannot function without database

#### 2. Shared Package
- **Type**: Internal Dependency
- **Purpose**: Type definitions and constants
- **Usage**: Import types for validation and data structures
- **Required For**: Type safety and consistency
- **Criticality**: Medium - Can develop without but reduces type safety

### Provides To

#### 1. Frontend Unit
- **Type**: Service Provider
- **Interface**: REST API endpoints
- **Endpoints**:
  - POST /api/generateBlueprint
  - POST /api/saveBlueprint
  - GET /api/getBlueprintHistory
  - GET /api/health
- **Data Format**: JSON
- **Protocol**: HTTP/HTTPS
- **Criticality**: High - Frontend depends entirely on backend API

### Internal Dependencies (Within Backend Unit)

```
Routes
  └─> Controllers
      └─> Services
          └─> Models
              └─> MongoDB
```

**Dependency Flow**:
1. Routes receive HTTP requests
2. Controllers orchestrate business logic
3. Services implement business logic
4. Models interact with MongoDB
5. Response flows back up the chain

---

## Unit 2: Frontend Unit Dependencies

### Depends On

#### 1. Backend Unit API
- **Type**: Service Dependency
- **Purpose**: Data operations (generate, save, retrieve blueprints)
- **Interface**: REST API
- **Communication**: HTTP requests via ApiService
- **Required For**: All core functionality
- **Criticality**: High - Frontend cannot function without backend

**API Contract**:
```javascript
// Generate Blueprint
POST /api/generateBlueprint
Request: { startupIdea, targetAudience, budgetRange, platformType }
Response: { blueprint: Blueprint }

// Save Blueprint
POST /api/saveBlueprint
Request: { blueprintId, sessionId }
Response: { success: boolean, message: string }

// Get History
GET /api/getBlueprintHistory?sessionId=xxx
Response: { blueprints: Blueprint[] }

// Health Check
GET /api/health
Response: { status: string }
```

#### 2. Shared Package
- **Type**: Internal Dependency
- **Purpose**: Type definitions and constants
- **Usage**: Import types for state management and API calls
- **Required For**: Type safety and dropdown options
- **Criticality**: Medium - Can develop without but reduces consistency

### Provides To

#### 1. End Users
- **Type**: User Interface
- **Interface**: Web browser
- **Functionality**: Complete user experience
- **Criticality**: High - Primary deliverable

### Internal Dependencies (Within Frontend Unit)

```
Pages
  └─> Features
      └─> Shared Components
          └─> Context
              └─> ApiService
                  └─> Backend API
```

**Dependency Flow**:
1. Pages orchestrate features
2. Features use shared components
3. Components access context for state
4. Context uses ApiService for data
5. ApiService calls backend API

---

## Shared Package Dependencies

### Depends On
**None** - Shared package has no dependencies (pure types and constants)

### Provides To

#### 1. Backend Unit
- **Exports**: Type definitions for Blueprint, FormData, API types
- **Usage**: Import for request/response validation
- **Import Pattern**: `import { Blueprint } from '../shared/types'`

#### 2. Frontend Unit
- **Exports**: Type definitions, constants (dropdown options)
- **Usage**: Import for state management and API calls
- **Import Pattern**: `import { Blueprint, TARGET_AUDIENCES } from '../shared'`

---

## Integration Points

### Integration Point 1: Backend API ↔ Frontend ApiService

**Description**: Primary integration point for data exchange

**Contract**:
- **Protocol**: HTTP/HTTPS
- **Format**: JSON
- **Authentication**: Session ID in request body or query params
- **Error Handling**: Standardized error response format

**Request Flow**:
```
Frontend Component
  → ApiService.generateBlueprint(formData)
    → fetch('POST /api/generateBlueprint', { body: formData })
      → Backend BlueprintRoutes
        → BlueprintController.generateBlueprint()
          → BlueprintGenerationService.generateBlueprint()
          → BlueprintStorageService.saveBlueprint()
        ← Response: { blueprint }
      ← HTTP Response
    ← Parsed JSON
  ← Blueprint data
```

**Error Flow**:
```
Backend Error
  → ErrorMiddleware
    → Formatted error response
  → HTTP Response (4xx/5xx)
→ ApiService catches error
  → Throws ApiError
→ Frontend Component catches
  → Display error message to user
```

**Integration Requirements**:
- Backend must be running and accessible
- CORS configured to allow frontend origin
- Consistent JSON structure for requests/responses
- Error responses follow standard format

### Integration Point 2: Shared Package → Backend Unit

**Description**: Type definitions for backend validation

**Contract**:
- **Import Method**: ES module imports
- **Types Used**: Blueprint, FormData, API request/response types
- **Location**: `../shared/types`

**Usage Example**:
```javascript
// Backend: BlueprintController.js
import { Blueprint, FormData } from '../shared/types'

async generateBlueprint(req, res) {
  const formData: FormData = req.body
  const blueprint: Blueprint = await service.generateBlueprint(formData)
  res.json({ blueprint })
}
```

### Integration Point 3: Shared Package → Frontend Unit

**Description**: Type definitions and constants for frontend

**Contract**:
- **Import Method**: ES module imports
- **Types Used**: Blueprint, FormData, all analysis section types
- **Constants Used**: TARGET_AUDIENCES, BUDGET_RANGES, PLATFORM_TYPES
- **Location**: `../shared`

**Usage Example**:
```javascript
// Frontend: InputForm.jsx
import { TARGET_AUDIENCES, BUDGET_RANGES, PLATFORM_TYPES } from '../shared/constants'
import { FormData } from '../shared/types'

function InputForm() {
  const [formData, setFormData] = useState<FormData>({
    startupIdea: '',
    targetAudience: '',
    budgetRange: '',
    platformType: ''
  })
  
  return (
    <select>
      {TARGET_AUDIENCES.map(audience => (
        <option key={audience}>{audience}</option>
      ))}
    </select>
  )
}
```

---

## Data Flow Diagrams

### Flow 1: Blueprint Generation (Cross-Unit)

```
User (Browser)
    |
    | 1. Fill form and submit
    v
Frontend: InputForm Component
    |
    | 2. Validate inputs
    | 3. Call apiService.generateBlueprint()
    v
Frontend: ApiService
    |
    | 4. POST /api/generateBlueprint
    | 5. Send JSON: { startupIdea, targetAudience, budgetRange, platformType }
    v
Backend: Express Server (CORS, JSON Parser, Validation)
    |
    | 6. Route to BlueprintController
    v
Backend: BlueprintController
    |
    | 7. Call BlueprintGenerationService.generateBlueprint()
    v
Backend: BlueprintGenerationService
    |
    | 8. Extract keywords, detect industry
    | 9. Generate all 9 analysis sections
    | 10. Return blueprint object
    v
Backend: BlueprintController
    |
    | 11. Call BlueprintStorageService.saveBlueprint()
    v
Backend: BlueprintStorageService
    |
    | 12. Create MongoDB document
    v
MongoDB Database
    |
    | 13. Save document, return saved blueprint
    v
Backend: BlueprintController
    |
    | 14. Format response: { blueprint }
    | 15. Send JSON response
    v
Frontend: ApiService
    |
    | 16. Parse response
    | 17. Return blueprint data
    v
Frontend: HomePage Component
    |
    | 18. Store in AppContext
    | 19. Navigate to DashboardPage
    v
Frontend: DashboardPage
    |
    | 20. Load blueprint from context
    | 21. Render all sections
    v
User sees complete blueprint dashboard
```

### Flow 2: Session Management (Cross-Unit)

```
App Initialization
    |
    | 1. App component mounts
    v
Frontend: SessionProvider
    |
    | 2. Check localStorage for session ID
    v
localStorage
    |
    | 3. Session ID exists?
    |
    ├─ YES: Load existing session ID
    |   |
    |   v
    |   Frontend: SessionProvider
    |       |
    |       | 4. Set sessionId in AppContext
    |       v
    |   App ready with existing session
    |
    └─ NO: Generate new session ID
        |
        v
        Shared: generateSessionId() utility
            |
            | 5. Generate UUID
            v
        Frontend: SessionProvider
            |
            | 6. Store in localStorage
            | 7. Set sessionId in AppContext
            v
        App ready with new session
            |
            | Session ID used in all API calls
            v
        Backend: SessionService validates session ID
```

---

## Dependency Management

### Version Compatibility

**Shared Package Versioning**:
- Use semantic versioning (semver)
- Breaking changes require major version bump
- Both frontend and backend must use compatible versions

**Example**:
```json
// frontend/package.json
{
  "dependencies": {
    "launchpilot-shared": "^1.0.0"
  }
}

// backend/package.json
{
  "dependencies": {
    "launchpilot-shared": "^1.0.0"
  }
}
```

### Dependency Updates

**When Backend API Changes**:
1. Update backend code
2. Update API documentation
3. Update shared types if needed
4. Notify frontend team
5. Frontend updates ApiService
6. Integration testing

**When Shared Types Change**:
1. Update shared package
2. Increment version
3. Update both frontend and backend dependencies
4. Test both units
5. Deploy together

---

## Circular Dependency Prevention

### Rules
1. **Backend never imports from Frontend**
2. **Frontend never imports from Backend** (except via API)
3. **Shared package never imports from Backend or Frontend**
4. **Units communicate only via defined interfaces** (API, module exports)

### Dependency Direction
```
Shared Package (no dependencies)
    ↓
Backend Unit (depends on Shared)
    ↓ (provides API)
Frontend Unit (depends on Shared + Backend API)
    ↓
End Users
```

---

## Testing Implications

### Unit Testing (Isolated)
- **Backend Unit**: Mock MongoDB, test services independently
- **Frontend Unit**: Mock ApiService, test components independently
- **Shared Package**: Test utilities and validation functions

### Integration Testing (Cross-Unit)
- **Backend + Database**: Test API endpoints with real MongoDB
- **Frontend + Backend**: Test API calls with real backend
- **End-to-End**: Test complete user flows across all units

### Mocking Strategy
- **Frontend tests**: Mock ApiService responses
- **Backend tests**: Mock MongoDB operations
- **Integration tests**: Use test database, real API calls

---

## Deployment Dependencies

### Deployment Order
1. **MongoDB**: Must be running first
2. **Backend Unit**: Deploy after database is ready
3. **Frontend Unit**: Deploy after backend is accessible
4. **Shared Package**: Bundled with each unit (no separate deployment)

### Environment Configuration
- **Backend**: Requires MongoDB connection string, port, CORS origin
- **Frontend**: Requires backend API URL
- **Shared**: No environment configuration needed

### Health Checks
- **Backend**: GET /api/health endpoint
- **Frontend**: Check if backend API is reachable
- **Database**: Backend checks MongoDB connection on startup

---

## Dependency Summary

| Dependency Type | Count | Critical | Optional |
|----------------|-------|----------|----------|
| External (MongoDB) | 1 | Yes | No |
| Internal (Shared Package) | 2 | No | Yes (reduces type safety) |
| Service (Backend API) | 1 | Yes | No |
| User Interface (Frontend) | 1 | Yes | No |

**Total Dependencies**: 5  
**Critical Path**: MongoDB → Backend Unit → Frontend Unit → End Users  
**Parallel Development**: Frontend and Backend can develop in parallel after API contracts defined  
**Integration Points**: 3 (Backend↔Frontend API, Shared→Backend, Shared→Frontend)

---

**Document Version**: 1.0  
**Last Updated**: 2026-05-05  
**Status**: Complete
