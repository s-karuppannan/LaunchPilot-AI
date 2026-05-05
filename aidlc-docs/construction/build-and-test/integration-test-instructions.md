# LaunchPilot AI - Integration Test Instructions

## Overview
Integration testing validates that all units work together correctly, focusing on API contracts, data flow, and end-to-end user scenarios.

---

## Test Environment Setup

### Prerequisites
- Backend server running on http://localhost:5000
- Frontend dev server running on http://localhost:3000
- MongoDB running and accessible
- Clean database state (or test database)

### Setup Test Database (Optional)
```bash
# Create separate test database
# Update backend/.env:
MONGODB_URI=mongodb://localhost:27017/launchpilot-ai-test
```

---

## Integration Test Suite

### Test 1: Backend-Database Integration

#### Test 1.1: MongoDB Connection
**Objective:** Verify backend connects to MongoDB successfully

**Steps:**
1. Start backend server
2. Check console output

**Expected Result:**
```
✅ MongoDB connected successfully
```

**Pass Criteria:**
- No connection errors
- Database connection established
- Server starts successfully

---

#### Test 1.2: Blueprint Model CRUD Operations
**Objective:** Verify database operations work correctly

**Manual Test with MongoDB Shell:**
```javascript
// Connect to MongoDB
mongosh launchpilot-ai

// Verify blueprints collection exists after first save
db.blueprints.find().pretty()

// Check indexes
db.blueprints.getIndexes()
```

**Expected Result:**
- Collection created after first blueprint save
- Indexes on sessionId, isSaved, createdAt

**Pass Criteria:**
- Database operations complete without errors
- Data persists correctly
- Indexes created properly

---

### Test 2: Backend API Integration

#### Test 2.1: Health Check Endpoint
**Objective:** Verify health check endpoint works

**Test Command:**
```bash
curl -X GET http://localhost:5000/api/health
```

**Expected Response:**
```json
{
  "status": "healthy",
  "timestamp": "2026-05-05T00:00:00.000Z",
  "uptime": 123.45,
  "database": "connected"
}
```

**Pass Criteria:**
- Status code: 200
- Response contains all expected fields
- Database status is "connected"

---

#### Test 2.2: Generate Blueprint Endpoint
**Objective:** Verify blueprint generation works end-to-end

**Test Command:**
```bash
curl -X POST http://localhost:5000/api/generateBlueprint \
  -H "Content-Type: application/json" \
  -d '{
    "startupIdea": "A mobile app that connects local farmers with restaurants for fresh produce delivery, reducing food waste and supporting local agriculture",
    "targetAudience": "Small Businesses",
    "budgetRange": "$10k-$50k",
    "platformType": "Mobile",
    "sessionId": "test-session-123"
  }'
```

**Expected Response:**
```json
{
  "blueprint": {
    "_id": "...",
    "sessionId": "test-session-123",
    "startupIdea": "A mobile app that connects...",
    "targetAudience": "Small Businesses",
    "budgetRange": "$10k-$50k",
    "platformType": "Mobile",
    "generatedAnalysis": {
      "productOverview": {
        "summary": "...",
        "valueProp": "...",
        "problemSolution": "..."
      },
      "coreFeatures": [...],
      "websitePages": [...],
      "technologyStack": {...},
      "databaseStructure": {...},
      "monetizationStrategy": {...},
      "awsDeploymentPlan": {...},
      "developmentRoadmap": {...},
      "successMetrics": {...}
    },
    "isSaved": false,
    "createdAt": "...",
    "__v": 0
  }
}
```

**Pass Criteria:**
- Status code: 200
- Blueprint object returned
- All 9 analysis sections present
- Industry detected correctly (FoodTech expected)
- Features appropriate for Mobile platform
- Budget-appropriate recommendations
- Blueprint saved to database

---

#### Test 2.3: Save Blueprint Endpoint
**Objective:** Verify blueprint can be marked as saved

**Test Command:**
```bash
# Use blueprintId from Test 2.2 response
curl -X POST http://localhost:5000/api/saveBlueprint \
  -H "Content-Type: application/json" \
  -d '{
    "blueprintId": "<blueprint-id-from-test-2.2>",
    "sessionId": "test-session-123"
  }'
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Blueprint saved successfully",
  "blueprint": {
    "_id": "...",
    "isSaved": true,
    "savedAt": "2026-05-05T00:00:00.000Z",
    ...
  }
}
```

**Pass Criteria:**
- Status code: 200
- Success is true
- Blueprint isSaved is true
- savedAt timestamp present

---

#### Test 2.4: Get Blueprint History Endpoint
**Objective:** Verify blueprint history retrieval

**Test Command:**
```bash
curl -X GET "http://localhost:5000/api/getBlueprintHistory?sessionId=test-session-123"
```

**Expected Response:**
```json
{
  "blueprints": [
    {
      "_id": "...",
      "sessionId": "test-session-123",
      "isSaved": true,
      "savedAt": "...",
      ...
    }
  ]
}
```

**Pass Criteria:**
- Status code: 200
- Array of saved blueprints returned
- Only saved blueprints included (isSaved: true)
- Sorted by savedAt descending

---

### Test 3: Frontend-Backend Integration

#### Test 3.1: Homepage Load
**Objective:** Verify frontend loads and connects to backend

**Steps:**
1. Open http://localhost:3000 in browser
2. Open browser DevTools (F12)
3. Check Console tab
4. Check Network tab

**Expected Result:**
- Homepage loads with no errors
- No CORS errors in console
- No failed network requests
- Premium dark UI renders correctly

**Pass Criteria:**
- No console errors
- No network errors
- UI renders properly

---

#### Test 3.2: Form Validation
**Objective:** Verify frontend form validation works

**Steps:**
1. Open http://localhost:3000
2. Click "Generate Blueprint" without filling form
3. Observe validation errors

**Expected Result:**
- Error messages appear for all required fields:
  - "Please describe your startup idea"
  - "Please select a target audience"
  - "Please select a budget range"
  - "Please select a platform type"

**Pass Criteria:**
- All validation errors display
- Form does not submit
- No API call made

---

#### Test 3.3: Blueprint Generation Flow
**Objective:** Verify complete blueprint generation flow

**Steps:**
1. Open http://localhost:3000
2. Fill in form:
   - **Startup Idea:** "A mobile app that connects local farmers with restaurants for fresh produce delivery"
   - **Target Audience:** "Small Businesses"
   - **Budget Range:** "$10,000 - $50,000 (Seed)"
   - **Platform Type:** "Mobile App (iOS/Android)"
3. Click "Generate Blueprint"
4. Wait for loading animation
5. Verify redirect to dashboard

**Expected Result:**
- Loading spinner appears with message
- API call to /api/generateBlueprint succeeds
- Redirect to /dashboard
- Dashboard displays all 9 sections:
  1. Product Overview
  2. Core Features
  3. Recommended Website Pages
  4. Technology Stack
  5. Database Structure
  6. Monetization Strategy
  7. AWS Deployment Plan
  8. Development Roadmap
  9. Success Metrics & KPIs

**Pass Criteria:**
- No errors during generation
- Dashboard loads successfully
- All sections populated with data
- Data matches input parameters
- Industry detected as "FoodTech"
- Mobile-specific features included

---

#### Test 3.4: Dashboard Navigation
**Objective:** Verify dashboard sidebar navigation works

**Steps:**
1. On dashboard, click each section in sidebar
2. Verify smooth scrolling to section

**Expected Result:**
- Clicking section scrolls to that section
- Active section highlighted in sidebar
- Smooth scroll animation

**Pass Criteria:**
- All sections accessible
- Navigation works smoothly
- Active state updates correctly

---

#### Test 3.5: Save Blueprint Flow
**Objective:** Verify blueprint can be saved

**Steps:**
1. On dashboard with unsaved blueprint
2. Verify "Save Blueprint" button visible in toolbar
3. Click "Save Blueprint"
4. Wait for confirmation

**Expected Result:**
- API call to /api/saveBlueprint succeeds
- Alert: "Blueprint saved successfully!"
- Toolbar updates to show "Saved" status
- Green indicator appears
- "Save Blueprint" button disappears

**Pass Criteria:**
- Save operation succeeds
- UI updates correctly
- Status changes to "Saved"

---

#### Test 3.6: New Blueprint Flow
**Objective:** Verify creating new blueprint works

**Steps:**
1. On dashboard with existing blueprint
2. Click "New Blueprint" button
3. Verify redirect to homepage

**Expected Result:**
- Redirect to http://localhost:3000
- Form is empty
- Previous blueprint cleared from state

**Pass Criteria:**
- Redirect successful
- Form reset
- State cleared

---

### Test 4: Session Management Integration

#### Test 4.1: Session ID Generation
**Objective:** Verify session ID is generated and persisted

**Steps:**
1. Open http://localhost:3000 in incognito/private window
2. Open browser DevTools > Application > Local Storage
3. Check for `launchpilot_session_id`

**Expected Result:**
- Session ID exists in localStorage
- Format is UUID (e.g., "123e4567-e89b-12d3-a456-426614174000")

**Pass Criteria:**
- Session ID generated
- Stored in localStorage
- Valid UUID format

---

#### Test 4.2: Session Persistence
**Objective:** Verify session persists across page refreshes

**Steps:**
1. Note session ID from localStorage
2. Refresh page (F5)
3. Check session ID again

**Expected Result:**
- Same session ID after refresh
- No new session ID generated

**Pass Criteria:**
- Session ID unchanged
- Persists across refreshes

---

### Test 5: Error Handling Integration

#### Test 5.1: Backend Error Handling
**Objective:** Verify backend handles invalid requests

**Test Command:**
```bash
# Missing required field
curl -X POST http://localhost:5000/api/generateBlueprint \
  -H "Content-Type: application/json" \
  -d '{
    "startupIdea": "Test"
  }'
```

**Expected Response:**
```json
{
  "error": "ValidationError",
  "message": "Missing required fields: startupIdea, targetAudience, budgetRange, platformType"
}
```

**Pass Criteria:**
- Status code: 400
- Error message clear and helpful
- No server crash

---

#### Test 5.2: Frontend Error Handling
**Objective:** Verify frontend handles API errors gracefully

**Steps:**
1. Stop backend server
2. Try to generate blueprint from frontend
3. Observe error handling

**Expected Result:**
- Error message displayed to user
- No white screen of death
- User can retry

**Pass Criteria:**
- Error caught and displayed
- App remains functional
- User-friendly error message

---

### Test 6: Data Flow Integration

#### Test 6.1: Conditional Logic Verification
**Objective:** Verify blueprint generation adapts to inputs

**Test Cases:**

**Case 1: E-commerce + Low Budget**
```json
{
  "startupIdea": "An online store selling handmade crafts",
  "targetAudience": "General Public",
  "budgetRange": "$0-$10k",
  "platformType": "Web"
}
```
**Expected:**
- Industry: E-commerce
- 5 core features (low budget)
- Serverless architecture
- Freemium monetization

**Case 2: SaaS + High Budget**
```json
{
  "startupIdea": "A project management platform for enterprise teams",
  "targetAudience": "Enterprises",
  "budgetRange": "$100k+",
  "platformType": "Web + Mobile"
}
```
**Expected:**
- Industry: SaaS
- 10 core features (high budget)
- Kubernetes architecture
- Enterprise licensing model
- Cross-platform sync feature

**Pass Criteria:**
- Industry detected correctly
- Feature count matches budget
- Architecture matches budget tier
- Platform-specific features included

---

## Integration Test Results Template

### Test Execution Log

| Test ID | Test Name | Status | Notes |
|---------|-----------|--------|-------|
| 1.1 | MongoDB Connection | ⬜ Pass / ❌ Fail | |
| 1.2 | Blueprint CRUD | ⬜ Pass / ❌ Fail | |
| 2.1 | Health Check | ⬜ Pass / ❌ Fail | |
| 2.2 | Generate Blueprint | ⬜ Pass / ❌ Fail | |
| 2.3 | Save Blueprint | ⬜ Pass / ❌ Fail | |
| 2.4 | Get History | ⬜ Pass / ❌ Fail | |
| 3.1 | Homepage Load | ⬜ Pass / ❌ Fail | |
| 3.2 | Form Validation | ⬜ Pass / ❌ Fail | |
| 3.3 | Blueprint Generation Flow | ⬜ Pass / ❌ Fail | |
| 3.4 | Dashboard Navigation | ⬜ Pass / ❌ Fail | |
| 3.5 | Save Blueprint Flow | ⬜ Pass / ❌ Fail | |
| 3.6 | New Blueprint Flow | ⬜ Pass / ❌ Fail | |
| 4.1 | Session ID Generation | ⬜ Pass / ❌ Fail | |
| 4.2 | Session Persistence | ⬜ Pass / ❌ Fail | |
| 5.1 | Backend Error Handling | ⬜ Pass / ❌ Fail | |
| 5.2 | Frontend Error Handling | ⬜ Pass / ❌ Fail | |
| 6.1 | Conditional Logic | ⬜ Pass / ❌ Fail | |

### Overall Integration Test Status
- **Total Tests:** 17
- **Passed:** ___
- **Failed:** ___
- **Pass Rate:** ___%

---

## Troubleshooting Integration Issues

### CORS Errors
**Symptom:** Browser console shows CORS policy errors

**Solution:**
1. Verify backend CORS_ORIGIN in .env matches frontend URL
2. Restart backend server
3. Clear browser cache
4. Check corsMiddleware.js configuration

### API Connection Failures
**Symptom:** Frontend cannot reach backend

**Solution:**
1. Verify backend is running on correct port
2. Check VITE_API_URL in frontend/.env
3. Test backend directly with curl
4. Check firewall settings

### Data Mismatch
**Symptom:** Frontend displays incorrect or missing data

**Solution:**
1. Verify API response structure matches frontend expectations
2. Check browser console for parsing errors
3. Verify database schema matches model
4. Check BlueprintGenerationService output

---

## Integration Success Criteria

✅ **All API endpoints respond correctly**  
✅ **Frontend-backend communication works**  
✅ **Database operations succeed**  
✅ **Session management functions**  
✅ **Error handling works gracefully**  
✅ **Conditional logic produces correct results**  
✅ **Complete user flows work end-to-end**

---

**Document Version**: 1.0  
**Last Updated**: 2026-05-05  
**Status**: Complete
