# LaunchPilot AI - Component Methods

## Overview
This document defines method signatures for all components. Detailed business rules and implementation logic will be defined in Functional Design (CONSTRUCTION phase).

---

## Frontend Component Methods

### HomePage Component

```javascript
// Props
interface HomePageProps {
  // No props - top-level page component
}

// Methods
function HomePage() {
  const handleGenerateBlueprint = async (formData) => { }
  const navigateToDashboard = (blueprintData) => { }
  
  return // JSX
}
```

### InputForm Component

```javascript
// Props
interface InputFormProps {
  onSubmit: (formData: FormData) => Promise<void>
  isLoading: boolean
}

// Methods
function InputForm({ onSubmit, isLoading }) {
  const [formData, setFormData] = useState({ })
  const [errors, setErrors] = useState({ })
  
  const handleInputChange = (field, value) => { }
  const validateForm = () => { }
  const handleSubmit = async (e) => { }
  
  return // JSX
}

// Types
interface FormData {
  startupIdea: string
  targetAudience: string
  budgetRange: string
  platformType: string
}
```

### DashboardPage Component

```javascript
// Props
interface DashboardPageProps {
  // No props - top-level page component
}

// Methods
function DashboardPage() {
  const { currentBlueprint, setCurrentBlueprint } = useContext(AppContext)
  const [activeSection, setActiveSection] = useState('product-overview')
  
  const loadBlueprintData = async () => { }
  const handleSaveBlueprint = async () => { }
  const handleNewBlueprint = () => { }
  const scrollToSection = (sectionId) => { }
  
  return // JSX
}
```

### Sidebar Component

```javascript
// Props
interface SidebarProps {
  activeSection: string
  onSectionClick: (sectionId: string) => void
  sections: Section[]
}

// Methods
function Sidebar({ activeSection, onSectionClick, sections }) {
  const renderSectionLink = (section) => { }
  
  return // JSX
}

// Types
interface Section {
  id: string
  title: string
  icon: string
}
```

### AnalysisCard Component

```javascript
// Props
interface AnalysisCardProps {
  title: string
  icon: string
  content: any
  isExpandable?: boolean
}

// Methods
function AnalysisCard({ title, icon, content, isExpandable = false }) {
  const [isExpanded, setIsExpanded] = useState(true)
  
  const toggleExpand = () => { }
  const renderContent = () => { }
  
  return // JSX
}
```

### LoadingSpinner Component

```javascript
// Props
interface LoadingSpinnerProps {
  message?: string
  size?: 'small' | 'medium' | 'large'
}

// Methods
function LoadingSpinner({ message = 'Loading...', size = 'medium' }) {
  return // JSX
}
```

### ErrorBoundary Component

```javascript
// Props
interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

// State
interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

// Methods
class ErrorBoundary extends React.Component {
  constructor(props) { }
  
  static getDerivedStateFromError(error) { }
  
  componentDidCatch(error, errorInfo) { }
  
  handleReset = () => { }
  
  render() { }
}
```

### AppContext Provider

```javascript
// Context Value
interface AppContextValue {
  sessionId: string
  currentBlueprint: Blueprint | null
  setCurrentBlueprint: (blueprint: Blueprint) => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

// Methods
function AppProvider({ children }) {
  const [sessionId, setSessionId] = useState('')
  const [currentBlueprint, setCurrentBlueprint] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  
  const initializeSession = () => { }
  
  useEffect(() => {
    initializeSession()
  }, [])
  
  return // Provider JSX
}
```

### ApiService Module

```javascript
// Methods
export const apiService = {
  // Generate blueprint
  generateBlueprint: async (formData) => {
    // POST /api/generateBlueprint
    // Returns: Blueprint
  },
  
  // Save blueprint
  saveBlueprint: async (blueprintId, sessionId) => {
    // POST /api/saveBlueprint
    // Returns: { success: boolean, message: string }
  },
  
  // Get blueprint history
  getBlueprintHistory: async (sessionId) => {
    // GET /api/getBlueprintHistory?sessionId=xxx
    // Returns: Blueprint[]
  },
  
  // Health check
  healthCheck: async () => {
    // GET /api/health
    // Returns: { status: string }
  }
}

// Helper methods
const handleApiError = (error) => { }
const formatRequest = (data) => { }
const formatResponse = (response) => { }
```

---

## Backend Component Methods

### BlueprintRoutes

```javascript
// Route definitions
router.post('/api/generateBlueprint', BlueprintController.generateBlueprint)
router.post('/api/saveBlueprint', BlueprintController.saveBlueprint)
router.get('/api/getBlueprintHistory', BlueprintController.getBlueprintHistory)
```

### BlueprintController

```javascript
class BlueprintController {
  // Generate blueprint
  async generateBlueprint(req, res, next) {
    // Input: { startupIdea, targetAudience, budgetRange, platformType }
    // Output: { blueprint: Blueprint }
    // Delegates to: BlueprintGenerationService.generateBlueprint()
  }
  
  // Save blueprint
  async saveBlueprint(req, res, next) {
    // Input: { blueprintId, sessionId }
    // Output: { success: boolean, message: string }
    // Delegates to: BlueprintStorageService.saveBlueprint()
  }
  
  // Get blueprint history
  async getBlueprintHistory(req, res, next) {
    // Input: { sessionId } (query param)
    // Output: { blueprints: Blueprint[] }
    // Delegates to: BlueprintStorageService.getBlueprintHistory()
  }
}
```

### BlueprintGenerationService

```javascript
class BlueprintGenerationService {
  // Main generation method
  async generateBlueprint(inputData) {
    // Input: { startupIdea, targetAudience, budgetRange, platformType }
    // Output: Blueprint object with all analysis sections
    // Orchestrates all generation methods
  }
  
  // Analysis generation methods
  generateProductOverview(startupIdea, keywords, industry) {
    // Returns: { summary, valueProp, problemSolution }
  }
  
  generateCoreFeatures(startupIdea, platformType, budgetRange, keywords) {
    // Returns: Feature[]
  }
  
  generateWebsitePages(startupIdea, platformType, industry) {
    // Returns: Page[]
  }
  
  generateTechnologyStack(platformType, budgetRange, complexity) {
    // Returns: { frontend, backend, database, infrastructure, tools }
  }
  
  generateDatabaseStructure(startupIdea, features, industry) {
    // Returns: { models, relationships }
  }
  
  generateMonetizationStrategy(targetAudience, budgetRange, industry) {
    // Returns: { revenueModels, pricingStrategy, businessModel }
  }
  
  generateAWSDeploymentPlan(techStack, budgetRange, scalability) {
    // Returns: { architecture, services, deploymentStrategy }
  }
  
  generateDevelopmentRoadmap(features, complexity, budgetRange) {
    // Returns: { phases, milestones, timeline }
  }
  
  generateSuccessMetrics(industry, targetAudience, monetization) {
    // Returns: { kpis, analytics, measurement }
  }
  
  // Helper methods
  extractKeywords(startupIdea) {
    // Returns: string[]
  }
  
  detectIndustry(startupIdea, keywords) {
    // Returns: string
  }
  
  assessComplexity(features, platformType) {
    // Returns: 'low' | 'medium' | 'high'
  }
  
  applyConditionalLogic(baseContent, conditions) {
    // Returns: modified content based on conditions
  }
}
```

### BlueprintStorageService

```javascript
class BlueprintStorageService {
  // Save blueprint
  async saveBlueprint(blueprintData, sessionId) {
    // Input: Blueprint data, session ID
    // Output: Saved blueprint document
    // Uses: BlueprintModel.create()
  }
  
  // Get blueprint by ID
  async getBlueprintById(blueprintId) {
    // Input: Blueprint ID
    // Output: Blueprint document
    // Uses: BlueprintModel.findById()
  }
  
  // Get blueprint history
  async getBlueprintHistory(sessionId) {
    // Input: Session ID
    // Output: Blueprint[] (saved blueprints only)
    // Uses: BlueprintModel.find({ sessionId, isSaved: true })
  }
  
  // Update save status
  async markBlueprintAsSaved(blueprintId) {
    // Input: Blueprint ID
    // Output: Updated blueprint
    // Uses: BlueprintModel.findByIdAndUpdate()
  }
}
```

### SessionService

```javascript
class SessionService {
  // Validate session ID
  validateSessionId(sessionId) {
    // Input: Session ID string
    // Output: boolean
    // Validates format and existence
  }
  
  // Generate session ID
  generateSessionId() {
    // Output: New unique session ID
    // Uses: UUID or similar
  }
  
  // Track session activity
  trackActivity(sessionId, action) {
    // Input: Session ID, action type
    // Output: void
    // Logs session activity (optional)
  }
}
```

### BlueprintModel (Mongoose)

```javascript
// Schema definition
const blueprintSchema = new Schema({
  sessionId: String,
  startupIdea: String,
  targetAudience: String,
  budgetRange: String,
  platformType: String,
  generatedAnalysis: {
    productOverview: Object,
    coreFeatures: Array,
    websitePages: Array,
    technologyStack: Object,
    databaseStructure: Object,
    monetizationStrategy: Object,
    awsDeploymentPlan: Object,
    developmentRoadmap: Object,
    successMetrics: Object
  },
  isSaved: Boolean,
  createdAt: Date,
  savedAt: Date
})

// Model methods
blueprintSchema.statics.findBySessionId = function(sessionId) { }
blueprintSchema.statics.findSavedBlueprints = function(sessionId) { }

// Instance methods
blueprintSchema.methods.markAsSaved = function() { }
```

### ErrorMiddleware

```javascript
// Error handling middleware
function errorMiddleware(err, req, res, next) {
  // Input: Error object, request, response
  // Output: Formatted error response
  // Logs error and returns appropriate status code
}

// Helper methods
function formatErrorResponse(err) {
  // Returns: { error: string, message: string, statusCode: number }
}

function logError(err, req) {
  // Logs error details for debugging
}
```

### ValidationMiddleware

```javascript
// Validation middleware factory
function validateRequest(schema) {
  return (req, res, next) => {
    // Validates req.body against schema
    // Returns 400 if validation fails
  }
}

// Validation schemas
const blueprintGenerationSchema = {
  startupIdea: { type: 'string', required: true, minLength: 10 },
  targetAudience: { type: 'string', required: true },
  budgetRange: { type: 'string', required: true },
  platformType: { type: 'string', required: true }
}

const saveBlueprintSchema = {
  blueprintId: { type: 'string', required: true },
  sessionId: { type: 'string', required: true }
}
```

### DatabaseConfig

```javascript
// Database connection
async function connectDatabase() {
  // Establishes MongoDB connection
  // Returns: Connection object
  // Handles connection errors
}

// Connection event handlers
function onConnected() { }
function onError(err) { }
function onDisconnected() { }

// Export
module.exports = { connectDatabase }
```

### ServerConfig

```javascript
// Server configuration
function configureServer() {
  const app = express()
  
  // Register middleware
  app.use(cors())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  
  // Register routes
  app.use('/api', blueprintRoutes)
  app.use('/api', healthRoutes)
  
  // Error handling
  app.use(errorMiddleware)
  
  return app
}

// Export
module.exports = { configureServer }
```

---

## Method Signature Summary

### Frontend Methods: 45+
- Component lifecycle methods
- Event handlers
- State management methods
- API client methods
- Context provider methods
- Utility methods

### Backend Methods: 30+
- Route handlers
- Controller methods
- Service methods
- Model methods
- Middleware functions
- Configuration functions

**Total Method Signatures: 75+**

---

## Type Definitions

### Blueprint Type

```typescript
interface Blueprint {
  _id: string
  sessionId: string
  startupIdea: string
  targetAudience: string
  budgetRange: string
  platformType: string
  generatedAnalysis: {
    productOverview: ProductOverview
    coreFeatures: Feature[]
    websitePages: Page[]
    technologyStack: TechnologyStack
    databaseStructure: DatabaseStructure
    monetizationStrategy: MonetizationStrategy
    awsDeploymentPlan: AWSDeploymentPlan
    developmentRoadmap: DevelopmentRoadmap
    successMetrics: SuccessMetrics
  }
  isSaved: boolean
  createdAt: Date
  savedAt?: Date
}
```

### Analysis Section Types

```typescript
interface ProductOverview {
  summary: string
  valueProp: string
  problemSolution: string
}

interface Feature {
  name: string
  description: string
  priority: 'high' | 'medium' | 'low'
}

interface Page {
  name: string
  purpose: string
  sections: string[]
}

interface TechnologyStack {
  frontend: string[]
  backend: string[]
  database: string[]
  infrastructure: string[]
  tools: string[]
}

interface DatabaseStructure {
  models: Model[]
  relationships: Relationship[]
}

interface MonetizationStrategy {
  revenueModels: string[]
  pricingStrategy: string
  businessModel: string
}

interface AWSDeploymentPlan {
  architecture: string
  services: string[]
  deploymentStrategy: string
}

interface DevelopmentRoadmap {
  phases: Phase[]
  milestones: Milestone[]
  timeline: string
}

interface SuccessMetrics {
  kpis: string[]
  analytics: string[]
  measurement: string
}
```

---

**Note**: Detailed business rules, conditional logic implementation, and algorithm specifications will be defined in Functional Design during the CONSTRUCTION phase.

**Document Version**: 1.0  
**Last Updated**: 2026-05-05  
**Status**: Complete
