# LaunchPilot AI - Build Instructions

## Overview
Complete build instructions for all units in the LaunchPilot AI monorepo.

---

## Prerequisites

### System Requirements
- **Node.js**: 18.x or higher
- **npm**: 9.x or higher
- **MongoDB**: 6.x or higher (local or MongoDB Atlas)
- **Git**: Latest version
- **Operating System**: Windows, macOS, or Linux

### Verify Prerequisites

```bash
# Check Node.js version
node --version  # Should be v18.x or higher

# Check npm version
npm --version  # Should be 9.x or higher

# Check MongoDB (if running locally)
mongod --version  # Should be 6.x or higher

# Check Git
git --version
```

---

## Unit 1: Backend Unit

### Location
`backend/`

### Build Steps

#### 1. Navigate to Backend Directory
```bash
cd backend
```

#### 2. Install Dependencies
```bash
npm install
```

**Expected Output:**
- All dependencies installed successfully
- No vulnerabilities or warnings (or only low-severity warnings)

#### 3. Configure Environment Variables
```bash
# Copy example environment file
cp .env.example .env
```

**Edit `.env` file with your configuration:**
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/launchpilot-ai
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/launchpilot-ai

# CORS Configuration
CORS_ORIGIN=http://localhost:3000
```

#### 4. Verify Build (No Compilation Needed)
Node.js/Express doesn't require compilation, but verify the structure:

```bash
# List source files
ls -la src/
```

**Expected Structure:**
```
src/
├── config/
│   └── database.js
├── controllers/
│   └── BlueprintController.js
├── middleware/
│   ├── corsMiddleware.js
│   └── errorMiddleware.js
├── models/
│   └── Blueprint.js
├── routes/
│   ├── blueprintRoutes.js
│   └── healthRoutes.js
├── services/
│   ├── BlueprintGenerationService.js
│   ├── BlueprintStorageService.js
│   └── SessionService.js
└── server.js
```

#### 5. Start MongoDB (if running locally)
```bash
# macOS/Linux
mongod --dbpath /path/to/data/directory

# Windows
mongod --dbpath C:\path\to\data\directory

# OR use MongoDB Atlas (cloud) - no local MongoDB needed
```

#### 6. Start Backend Server
```bash
npm start
```

**Expected Output:**
```
🚀 LaunchPilot AI Backend Server
📡 Server running on port 5000
🌍 Environment: development
🔗 API: http://localhost:5000/api
❤️  Health: http://localhost:5000/api/health
✅ MongoDB connected successfully
```

#### 7. Verify Backend Health
Open browser or use curl:
```bash
curl http://localhost:5000/api/health
```

**Expected Response:**
```json
{
  "status": "healthy",
  "timestamp": "2026-05-05T00:00:00.000Z",
  "uptime": 1.234,
  "database": "connected"
}
```

### Build Verification Checklist
- [ ] Dependencies installed without errors
- [ ] Environment variables configured
- [ ] MongoDB connection successful
- [ ] Server starts on port 5000
- [ ] Health check endpoint returns 200 OK
- [ ] No error messages in console

---

## Unit 2: Shared Package

### Location
`shared/`

### Build Steps

#### 1. Navigate to Shared Directory
```bash
cd shared
```

#### 2. Install Dependencies
```bash
npm install
```

**Expected Output:**
- Minimal or no dependencies (shared package is lightweight)

#### 3. Verify Package Structure
```bash
ls -la
```

**Expected Structure:**
```
shared/
├── constants/
│   ├── dropdownOptions.js
│   └── validationRules.js
├── types/
│   ├── ApiTypes.js
│   ├── Blueprint.js
│   └── FormData.js
├── utils/
│   ├── formatting.js
│   └── validation.js
├── index.js
├── package.json
└── README.md
```

#### 4. Verify Exports
```bash
# Test that exports work correctly
node -e "const shared = require('./index.js'); console.log(Object.keys(shared));"
```

**Expected Output:**
```
[
  'TARGET_AUDIENCES',
  'BUDGET_RANGES',
  'PLATFORM_TYPES',
  'VALIDATION_RULES',
  'validateStartupIdea',
  'validateFormData',
  'formatDate',
  'formatBudgetRange'
]
```

### Build Verification Checklist
- [ ] Package structure correct
- [ ] All exports accessible
- [ ] No syntax errors

---

## Unit 3: Frontend Unit

### Location
`frontend/`

### Build Steps

#### 1. Navigate to Frontend Directory
```bash
cd frontend
```

#### 2. Install Dependencies
```bash
npm install
```

**Expected Output:**
- All dependencies installed successfully
- React, Vite, Tailwind CSS, and other dependencies installed

#### 3. Configure Environment Variables
```bash
# Copy example environment file
cp .env.example .env
```

**Edit `.env` file:**
```env
VITE_API_URL=http://localhost:5000
```

#### 4. Build for Production (Optional)
```bash
npm run build
```

**Expected Output:**
```
vite v5.0.8 building for production...
✓ 1234 modules transformed.
dist/index.html                   0.45 kB │ gzip:  0.30 kB
dist/assets/index-abc123.css     12.34 kB │ gzip:  3.45 kB
dist/assets/index-def456.js     123.45 kB │ gzip: 45.67 kB
✓ built in 3.45s
```

#### 5. Start Development Server
```bash
npm run dev
```

**Expected Output:**
```
VITE v5.0.8  ready in 234 ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
➜  press h to show help
```

#### 6. Verify Frontend in Browser
Open browser to http://localhost:3000

**Expected:**
- Homepage loads with premium dark futuristic UI
- Hero section with glowing "LaunchPilot AI" title
- Input form with 4 fields (startup idea, target audience, budget, platform)
- Three feature cards at bottom
- No console errors

### Build Verification Checklist
- [ ] Dependencies installed without errors
- [ ] Environment variables configured
- [ ] Development server starts on port 3000
- [ ] Homepage loads correctly
- [ ] No console errors in browser
- [ ] UI matches premium dark futuristic design
- [ ] Production build completes successfully (optional)

---

## Full Stack Build Verification

### 1. Start All Services

**Terminal 1 - MongoDB (if local):**
```bash
mongod --dbpath /path/to/data
```

**Terminal 2 - Backend:**
```bash
cd backend
npm start
```

**Terminal 3 - Frontend:**
```bash
cd frontend
npm run dev
```

### 2. Verify Integration

#### Test 1: Health Check
```bash
curl http://localhost:5000/api/health
```
**Expected:** 200 OK with health status

#### Test 2: Frontend Loads
Open http://localhost:3000
**Expected:** Homepage loads with no errors

#### Test 3: API Connection
Open browser console on http://localhost:3000 and check for:
- No CORS errors
- No connection errors
- Network tab shows successful OPTIONS requests

### 3. Full Stack Verification Checklist
- [ ] MongoDB running and accessible
- [ ] Backend server running on port 5000
- [ ] Frontend dev server running on port 3000
- [ ] Health check endpoint responds
- [ ] Frontend loads without errors
- [ ] No CORS errors in browser console
- [ ] All three units operational

---

## Troubleshooting

### Backend Issues

**Issue: MongoDB connection failed**
```
Solution:
1. Verify MongoDB is running: mongod --version
2. Check MONGODB_URI in .env file
3. Ensure database path exists
4. Check MongoDB logs for errors
```

**Issue: Port 5000 already in use**
```
Solution:
1. Change PORT in .env file to different port (e.g., 5001)
2. Update VITE_API_URL in frontend/.env to match
3. Or kill process using port 5000:
   - macOS/Linux: lsof -ti:5000 | xargs kill -9
   - Windows: netstat -ano | findstr :5000, then taskkill /PID <PID> /F
```

**Issue: Module not found errors**
```
Solution:
1. Delete node_modules: rm -rf node_modules
2. Delete package-lock.json: rm package-lock.json
3. Reinstall: npm install
```

### Frontend Issues

**Issue: Port 3000 already in use**
```
Solution:
1. Vite will automatically try port 3001, 3002, etc.
2. Or kill process using port 3000:
   - macOS/Linux: lsof -ti:3000 | xargs kill -9
   - Windows: netstat -ano | findstr :3000, then taskkill /PID <PID> /F
```

**Issue: CORS errors in browser**
```
Solution:
1. Verify backend CORS_ORIGIN matches frontend URL
2. Restart backend server after changing .env
3. Clear browser cache
```

**Issue: Tailwind styles not loading**
```
Solution:
1. Verify tailwind.config.js exists
2. Verify postcss.config.js exists
3. Restart dev server: Ctrl+C, then npm run dev
```

### Shared Package Issues

**Issue: Import errors from shared package**
```
Solution:
1. Verify shared package exports are ES modules (export const)
2. Check import paths in frontend and backend
3. Reinstall shared package dependencies
```

---

## Build Success Criteria

### Backend Unit ✅
- Server starts without errors
- MongoDB connection successful
- Health check endpoint responds
- All routes registered
- No console errors

### Shared Package ✅
- All exports accessible
- No syntax errors
- Constants properly defined

### Frontend Unit ✅
- Development server starts
- Homepage loads correctly
- Premium UI renders properly
- No console errors
- No build warnings

### Integration ✅
- Backend and frontend communicate
- No CORS errors
- API requests successful
- Full user flow works

---

**Document Version**: 1.0  
**Last Updated**: 2026-05-05  
**Status**: Complete
