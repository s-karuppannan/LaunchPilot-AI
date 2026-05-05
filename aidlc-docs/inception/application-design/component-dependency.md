# LaunchPilot AI - Component Dependencies

## Overview
This document maps component relationships, dependencies, and communication patterns across the LaunchPilot AI application.

---

## Dependency Matrix

### Frontend Dependencies

| Component | Depends On | Used By | Communication Pattern |
|-----------|-----------|---------|----------------------|
| HomePage | InputForm, HeroSection, FeatureCards, AppContext, ApiService | App Router | Props, Context, API calls |
| InputForm | Button, AppContext | HomePage | Props, Context |
| HeroSection | - | HomePage | Props |
| FeatureCards | Card | HomePage | Props |
| DashboardPage | Sidebar, Toolbar, HeroSummaryCard, AnalysisCard, All Section Components, AppContext, ApiService | App Router | Props, Context, API calls |
| Sidebar | - | DashboardPage | Props, Callbacks |
| Toolbar | Button | DashboardPage | Props, Callbacks |
| HeroSummaryCard | Card | DashboardPage | Props |
| AnalysisCard | Card | All Section Components | Props |
| ProductOverviewSection | AnalysisCard | DashboardPage | Props |
| CoreFeaturesSection | AnalysisCard | DashboardPage | Props |
| WebsitePagesSection | AnalysisCard | DashboardPage | Props |
| TechnologyStackSection | AnalysisCard | DashboardPage | Props |
| DatabaseStructureSection | AnalysisCard | DashboardPage | Props |
| MonetizationStrategySection | AnalysisCard | DashboardPage | Props |
| AWSDeploymentSection | AnalysisCard | DashboardPage | Props |
| DevelopmentRoadmapSection | AnalysisCard | DashboardPage | Props |
| SuccessMetricsSection | AnalysisCard | DashboardPage | Props |
| LoadingSpinner | - | HomePage, DashboardPage | Props |
| ErrorBoundary | - | App Root | Component wrapping |
| Button | - | InputForm, Toolbar, Multiple | Props |
| Card | - | FeatureCards, AnalysisCard | Props |
| AppContext | SessionProvider | All Components | Context Provider |
| SessionProvider | - | AppContext | Context Provider |
| ApiService | Fetch API | HomePage, DashboardPage | Module import |

### Backend Dependencies

| Component | Depends On | Used By | Communication Pattern |
|-----------|-----------|---------|----------------------|
| BlueprintRoutes | BlueprintController | Express App | Route registration |
| HealthRoutes | - | Express App | Route registration |
| BlueprintController | BlueprintGenerationService, BlueprintStorageService, SessionService | BlueprintRoutes | Method calls |
| BlueprintGenerationService | - | BlueprintController | Method calls |
| BlueprintStorageService | BlueprintModel | BlueprintController | Method calls |
| SessionService | - | BlueprintController | Method calls |
| BlueprintModel | Mongoose | BlueprintStorageService | ORM |
| ErrorMiddleware | - | Express App | Middleware registration |
| ValidationMiddleware | - | BlueprintRoutes | Middleware registration |
| CorsMiddleware | - | Express App | Middleware registration |
| DatabaseConfig | Mongoose | Server Startup | Connection |
| ServerConfig | All Routes, All Middleware | Server Startup | App configuration |

---

## Component Interaction Diagrams

### Frontend Component Hierarchy

```
App (Root)
├─ ErrorBoundary
│  └─ AppContext.Provider
│     └─ SessionProvider
│        └─ Router
│           ├─ HomePage
│           │  ├─ HeroSection
│           │  ├─ InputForm
│           │  │  └─ Button
│           │  ├─ FeatureCards
│           │  │  └─ Card (x3)
│           │  └─ LoadingSpinner (conditional)
│           │
│           └─ DashboardPage
│              ├─ Sidebar
│              ├─ Toolbar
│              │  └─ Button (x2)
│              ├─ HeroSummaryCard
│              │  └─ Card
│              ├─ ProductOverviewSection
│              │  └─ AnalysisCard
│              │     └─ Card
│              ├─ CoreFeaturesSection
│              │  └─ AnalysisCard
│              │     └─ Card
│              ├─ WebsitePagesSection
│              │  └─ AnalysisCard
│              │     └─ Card
│              ├─ TechnologyStackSection
│              │  └─ AnalysisCard
│              │     └─ Card
│              ├─ DatabaseStructureSection
│              │  └─ AnalysisCard
│              │     └─ Card
│              ├─ MonetizationStrategySection
│              │  └─ AnalysisCard
│              │     └─ Card
│              ├─ AWSDeploymentSection
│              │  └─ AnalysisCard
│              │     └─ Card
│              ├─ DevelopmentRoadmapSection
│              │  └─ AnalysisCard
│              │     └─ Card
│              ├─ SuccessMetricsSection
│              │  └─ AnalysisCard
│              │     └─ Card
│              └─ LoadingSpinner (conditional)
```

### Backend Component Architecture

```
Express Server
├─ Middleware Layer
│  ├─ CorsMiddleware
│  ├─ express.json()
│  ├─ express.urlencoded()
│  └─ ValidationMiddleware (route-specific)
│
├─ Routes Layer
│  ├─ BlueprintRoutes
│  │  ├─ POST /api/generateBlueprint
│  │  ├─ POST /api/saveBlueprint
│  │  └─ GET /api/getBlueprintHistory
│  └─ HealthRoutes
│     └─ GET /api/health
│
├─ Controller Layer
│  └─ BlueprintController
│     ├─ generateBlueprint()
│     ├─ saveBlueprint()
│     └─ getBlueprintHistory()
│
├─ Service Layer
│  ├─ BlueprintGenerationService
│  │  ├─ generateBlueprint()
│  │  ├─ extractKeywords()
│  │  ├─ detectIndustry()
│  │  └─ generate[Section]() (x9)
│  ├─ BlueprintStorageService
│  │  ├─ saveBlueprint()
│  │  ├─ getBlueprintById()
│  │  ├─ getBlueprintHistory()
│  │  └─ markBlueprintAsSaved()
│  └─ SessionService
│     ├─ validateSessionId()
│     ├─ generateSessionId()
│     └─ trackActivity()
│
├─ Model Layer
│  └─ BlueprintModel (Mongoose)
│     ├─ Schema Definition
│     ├─ Static Methods
│     └─ Instance Methods
│
└─ Error Handling Layer
   └─ ErrorMiddleware
```

---

## Data Flow Diagrams

### Flow 1: Blueprint Generation

```
User Input (Homepage)
    |
    | 1. Fill form (startupIdea, targetAudience, budgetRange, platformType)
    v
InputForm Component
    |
    | 2. Validate inputs
    | 3. Call onSubmit handler
    v
HomePage Component
    |
    | 4. Set loading state
    | 5. Call apiService.generateBlueprint()
    v
ApiService (Frontend)
    |
    | 6. POST /api/generateBlueprint
    | 7. Send JSON payload
    v
Express Server
    |
    | 8. CORS middleware
    | 9. JSON parser middleware
    | 10. Validation middleware
    v
BlueprintRoutes
    |
    | 11. Route to controller
    v
BlueprintController
    |
    | 12. Extract request data
    | 13. Call BlueprintGenerationService.generateBlueprint()
    v
BlueprintGenerationService
    |
    | 14. Extract keywords
    | 15. Detect industry
    | 16. Generate all 9 sections with conditional logic
    | 17. Return blueprint object
    v
BlueprintController
    |
    | 18. Call BlueprintStorageService.saveBlueprint()
    v
BlueprintStorageService
    |
    | 19. Create blueprint document
    v
BlueprintModel (MongoDB)
    |
    | 20. Save to database
    | 21. Return saved document
    v
BlueprintController
    |
    | 22. Format response
    | 23. Send JSON response
    v
ApiService (Frontend)
    |
    | 24. Parse response
    | 25. Return blueprint data
    v
HomePage Component
    |
    | 26. Store blueprint in AppContext
    | 27. Navigate to DashboardPage
    v
DashboardPage Component
    |
    | 28. Load blueprint from context
    | 29. Render all sections
    v
User sees complete blueprint dashboard
```

### Flow 2: Save Blueprint

```
User Action (Dashboard)
    |
    | 1. Click "Save Blueprint" button
    v
Toolbar Component
    |
    | 2. Call onSave handler
    v
DashboardPage Component
    |
    | 3. Get blueprintId and sessionId
    | 4. Call apiService.saveBlueprint()
    v
ApiService (Frontend)
    |
    | 5. POST /api/saveBlueprint
    | 6. Send { blueprintId, sessionId }
    v
Express Server → BlueprintRoutes → BlueprintController
    |
    | 7. Validate session
    | 8. Call BlueprintStorageService.markBlueprintAsSaved()
    v
BlueprintStorageService
    |
    | 9. Update blueprint document
    v
BlueprintModel (MongoDB)
    |
    | 10. Set isSaved = true, savedAt = now
    | 11. Return updated document
    v
BlueprintController → ApiService → DashboardPage
    |
    | 12. Show success message
    v
User sees "Blueprint saved successfully"
```

### Flow 3: Session Management

```
App Initialization
    |
    | 1. App component mounts
    v
SessionProvider
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
    |   SessionProvider
    |       |
    |       | 4. Set sessionId in context
    |       v
    |   App ready with existing session
    |
    └─ NO: Generate new session ID
        |
        v
        SessionService.generateSessionId()
            |
            | 5. Generate UUID
            | 6. Store in localStorage
            | 7. Set sessionId in context
            v
        App ready with new session
```

---

## Communication Patterns

### Pattern 1: Props Drilling (Component to Component)

```javascript
// Parent passes data and callbacks to child
<InputForm 
  onSubmit={handleGenerateBlueprint}
  isLoading={isLoading}
/>

// Child receives and uses props
function InputForm({ onSubmit, isLoading }) {
  // Use props
}
```

### Pattern 2: Context API (Global State)

```javascript
// Provider at app root
<AppContext.Provider value={{ sessionId, currentBlueprint, setCurrentBlueprint }}>
  {children}
</AppContext.Provider>

// Consumer in any component
function DashboardPage() {
  const { currentBlueprint } = useContext(AppContext)
  // Use global state
}
```

### Pattern 3: API Calls (Frontend to Backend)

```javascript
// Frontend makes HTTP request
const blueprint = await apiService.generateBlueprint(formData)

// Backend receives and processes
router.post('/api/generateBlueprint', async (req, res) => {
  const blueprint = await controller.generateBlueprint(req, res)
  res.json({ blueprint })
})
```

### Pattern 4: Service Layer (Backend)

```javascript
// Controller delegates to service
class BlueprintController {
  async generateBlueprint(req, res) {
    const blueprint = await BlueprintGenerationService.generateBlueprint(req.body)
    const saved = await BlueprintStorageService.saveBlueprint(blueprint, req.body.sessionId)
    res.json({ blueprint: saved })
  }
}
```

### Pattern 5: Database Access (Service to Model)

```javascript
// Service uses Mongoose model
class BlueprintStorageService {
  async saveBlueprint(blueprintData, sessionId) {
    const blueprint = await BlueprintModel.create({
      ...blueprintData,
      sessionId
    })
    return blueprint
  }
}
```

---

## Dependency Injection Points

### Frontend
- **ApiService**: Injected via module import
- **Context**: Injected via React Context API
- **Router**: Injected via React Router

### Backend
- **Services**: Injected via class instantiation or module import
- **Models**: Injected via Mongoose
- **Middleware**: Injected via Express app.use()

---

## Circular Dependency Prevention

### Rules
1. **Frontend**: Components never import other page components
2. **Backend**: Services never import controllers
3. **Models**: Models never import services
4. **Shared**: Shared components never import feature components

### Dependency Direction
```
Frontend: Pages → Features → Shared → Context → Services
Backend: Routes → Controllers → Services → Models
```

---

## External Dependencies

### Frontend External Dependencies
- **React**: UI framework
- **React Router**: Client-side routing
- **Tailwind CSS**: Styling framework
- **Fetch API**: HTTP client (browser native)

### Backend External Dependencies
- **Express**: Web framework
- **Mongoose**: MongoDB ODM
- **CORS**: Cross-origin middleware
- **dotenv**: Environment configuration
- **uuid**: Session ID generation

### Database External Dependencies
- **MongoDB**: Database server
- **MongoDB Atlas**: Cloud hosting (optional)

---

## Component Coupling Analysis

### Tight Coupling (Acceptable)
- InputForm ↔ Button (UI composition)
- AnalysisCard ↔ Card (UI composition)
- BlueprintController ↔ BlueprintGenerationService (business logic)

### Loose Coupling (Desired)
- HomePage ↔ DashboardPage (via Router)
- Frontend ↔ Backend (via API)
- Services ↔ Models (via interfaces)

### No Coupling (Isolated)
- BlueprintGenerationService (pure business logic)
- SessionService (utility service)
- Shared UI components (reusable)

---

## Testing Implications

### Unit Testing
- **Services**: Test in isolation (no dependencies)
- **Components**: Test with mocked context and API
- **Controllers**: Test with mocked services

### Integration Testing
- **Frontend**: Test component interactions
- **Backend**: Test route → controller → service → model flow
- **Full Stack**: Test API endpoints end-to-end

### Mocking Strategy
- Mock ApiService for frontend tests
- Mock Services for controller tests
- Mock Models for service tests

---

**Document Version**: 1.0  
**Last Updated**: 2026-05-05  
**Status**: Complete
