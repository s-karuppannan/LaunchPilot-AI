# LaunchPilot AI - Quick Start Guide

## 🚀 Get Started in 5 Minutes

This guide will get LaunchPilot AI running on your local machine quickly.

---

## Prerequisites

- Node.js 18+ installed
- MongoDB installed (or MongoDB Atlas account)
- Terminal/Command Prompt

---

## Quick Setup

### Step 1: Clone or Navigate to Project
```bash
cd /path/to/launchpilot-ai
```

### Step 2: Setup Backend

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env file (use your preferred editor)
# Set MONGODB_URI to your MongoDB connection string
# Default: mongodb://localhost:27017/launchpilot-ai

# Start backend server
npm start
```

**Expected Output:**
```
🚀 LaunchPilot AI Backend Server
📡 Server running on port 5000
✅ MongoDB connected successfully
```

### Step 3: Setup Frontend (New Terminal)

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev
```

**Expected Output:**
```
VITE v5.0.8  ready in 234 ms
➜  Local:   http://localhost:3000/
```

### Step 4: Open Application

Open your browser to: **http://localhost:3000**

---

## Quick Test

### Test the Application

1. **Fill in the form:**
   - **Startup Idea:** "A mobile app for meal planning and grocery delivery"
   - **Target Audience:** "Families"
   - **Budget Range:** "$10,000 - $50,000 (Seed)"
   - **Platform Type:** "Mobile App (iOS/Android)"

2. **Click "Generate Blueprint"**

3. **View Results:**
   - Wait for AI analysis (5-10 seconds)
   - Dashboard displays with 9 analysis sections
   - Explore each section using sidebar navigation

4. **Save Blueprint:**
   - Click "Save Blueprint" in toolbar
   - Verify "Saved" status appears

---

## MongoDB Setup Options

### Option 1: Local MongoDB (Recommended for Development)

**macOS:**
```bash
brew install mongodb-community
brew services start mongodb-community
```

**Windows:**
1. Download MongoDB from https://www.mongodb.com/try/download/community
2. Install and start MongoDB service

**Linux:**
```bash
sudo apt-get install mongodb
sudo systemctl start mongodb
```

### Option 2: MongoDB Atlas (Cloud - No Local Install)

1. Create free account at https://www.mongodb.com/cloud/atlas
2. Create a cluster (free tier available)
3. Get connection string
4. Update `backend/.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/launchpilot-ai
   ```

---

## Troubleshooting

### Backend won't start

**Error: "MongoDB connection failed"**
```bash
# Check if MongoDB is running
mongod --version

# Start MongoDB
mongod --dbpath /path/to/data
```

**Error: "Port 5000 already in use"**
```bash
# Change port in backend/.env
PORT=5001

# Update frontend/.env
VITE_API_URL=http://localhost:5001
```

### Frontend won't start

**Error: "Port 3000 already in use"**
- Vite will automatically use next available port (3001, 3002, etc.)
- Or kill the process using port 3000

**Error: "Cannot connect to backend"**
```bash
# Verify backend is running
curl http://localhost:5000/api/health

# Check frontend .env
VITE_API_URL=http://localhost:5000
```

---

## Next Steps

### Explore Features
- Generate multiple blueprints with different inputs
- Test different industries (E-commerce, SaaS, FinTech, etc.)
- Try different budget ranges to see adaptive recommendations
- Compare Web vs Mobile vs Hybrid platform recommendations

### Development
- Read `build-instructions.md` for detailed setup
- Read `integration-test-instructions.md` for testing
- Check `README.md` files in each unit for documentation

### Deployment
- See AWS deployment recommendations in generated blueprints
- Backend can deploy to AWS Lambda, ECS, or EKS
- Frontend can deploy to Netlify, Vercel, or S3+CloudFront

---

## Project Structure

```
launchpilot-ai/
├── backend/          # Express API + MongoDB
├── frontend/         # React + Vite + Tailwind
├── shared/           # Shared types and utilities
└── aidlc-docs/       # Documentation
```

---

## Useful Commands

### Backend
```bash
cd backend
npm start              # Start server
npm run dev            # Start with nodemon (auto-reload)
```

### Frontend
```bash
cd frontend
npm run dev            # Start dev server
npm run build          # Build for production
npm run preview        # Preview production build
```

### MongoDB
```bash
mongosh launchpilot-ai           # Connect to database
db.blueprints.find().pretty()    # View blueprints
db.blueprints.countDocuments()   # Count blueprints
```

---

## Support

- **Documentation:** See `aidlc-docs/` folder
- **Backend README:** `backend/README.md`
- **Frontend README:** `frontend/README.md`
- **Build Instructions:** `aidlc-docs/construction/build-and-test/build-instructions.md`
- **Integration Tests:** `aidlc-docs/construction/build-and-test/integration-test-instructions.md`

---

**Happy Building! 🚀**
