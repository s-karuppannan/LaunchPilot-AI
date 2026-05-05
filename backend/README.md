# LaunchPilot AI - Backend

Express.js backend API for LaunchPilot AI startup blueprint generator.

## Features

- ✅ Intelligent blueprint generation with conditional logic
- ✅ 12 industry classifications
- ✅ Budget/platform/audience-based content adaptation
- ✅ MongoDB integration with Mongoose
- ✅ RESTful API endpoints
- ✅ Session management
- ✅ Error handling middleware
- ✅ Health check endpoint

## Tech Stack

- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Session**: UUID-based session management

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.js          # MongoDB connection
│   ├── controllers/
│   │   └── BlueprintController.js
│   ├── middleware/
│   │   ├── corsMiddleware.js
│   │   └── errorMiddleware.js
│   ├── models/
│   │   └── Blueprint.js         # Mongoose schema
│   ├── routes/
│   │   ├── blueprintRoutes.js
│   │   └── healthRoutes.js
│   ├── services/
│   │   ├── BlueprintGenerationService.js
│   │   ├── BlueprintStorageService.js
│   │   └── SessionService.js
│   └── server.js                # Entry point
├── .env.example
├── package.json
└── README.md
```

## Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment

Create `.env` file:

```bash
cp .env.example .env
```

Edit `.env`:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/launchpilot
CORS_ORIGIN=http://localhost:5173
```

### 3. Start MongoDB

Make sure MongoDB is running locally or use MongoDB Atlas.

**Local MongoDB:**
```bash
mongod
```

**MongoDB Atlas:**
Update `MONGODB_URI` in `.env` with your Atlas connection string.

### 4. Start Server

**Development (with auto-reload):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

Server will start on `http://localhost:5000`

## API Endpoints

### Generate Blueprint
```http
POST /api/generateBlueprint
Content-Type: application/json

{
  "startupIdea": "AI-powered meal planning app for busy professionals",
  "targetAudience": "Young Professionals",
  "budgetRange": "$10k-$50k",
  "platformType": "Web + Mobile",
  "sessionId": "optional-uuid-v4"
}
```

**Response:**
```json
{
  "blueprint": {
    "_id": "...",
    "sessionId": "...",
    "startupIdea": "...",
    "generatedAnalysis": {
      "productOverview": {...},
      "coreFeatures": [...],
      "websitePages": [...],
      "technologyStack": {...},
      "databaseStructure": {...},
      "monetizationStrategy": {...},
      "awsDeploymentPlan": {...},
      "developmentRoadmap": {...},
      "successMetrics": {...}
    },
    "createdAt": "2026-05-05T00:00:00.000Z"
  }
}
```

### Save Blueprint
```http
POST /api/saveBlueprint
Content-Type: application/json

{
  "blueprintId": "blueprint-id",
  "sessionId": "session-uuid"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Blueprint saved successfully",
  "blueprint": {...}
}
```

### Get Blueprint History
```http
GET /api/getBlueprintHistory?sessionId=session-uuid
```

**Response:**
```json
{
  "blueprints": [
    {
      "_id": "...",
      "startupIdea": "...",
      "createdAt": "...",
      "savedAt": "..."
    }
  ]
}
```

### Health Check
```http
GET /api/health
```

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2026-05-05T00:00:00.000Z",
  "uptime": 123.456,
  "database": "connected"
}
```

## Business Logic

### Industry Detection

Supports 12 industries:
- E-commerce
- SaaS
- FinTech
- HealthTech
- EdTech
- Social
- FoodTech
- TravelTech
- PropTech
- MarketingTech
- HRTech
- General (fallback)

### Conditional Logic

Content adapts based on:
- **Industry**: Templates and domain-specific features
- **Budget**: Feature count, tech stack, deployment strategy
- **Platform**: Frontend tech, deployment model, page structure

### Budget Tiers

- **Low ($0-$10k)**: 5 features, serverless, 3-6 months
- **Medium ($10k-$50k)**: 7 features, containers, 6-12 months
- **High ($50k+)**: 10 features, Kubernetes, 12-18 months

## Development

### Code Style

- Use ES6+ features
- Async/await for asynchronous operations
- Descriptive variable and function names
- Comments for complex logic

### Error Handling

All errors are caught and formatted by error middleware:

```javascript
{
  "error": "ErrorType",
  "message": "User-friendly error message",
  "statusCode": 400 | 500
}
```

### Logging

Console logging for:
- Server startup
- Database connection
- Session activity
- Errors

## Testing

Test API endpoints using:
- Postman
- cURL
- Thunder Client (VS Code extension)

**Example cURL:**
```bash
curl -X POST http://localhost:5000/api/generateBlueprint \
  -H "Content-Type: application/json" \
  -d '{
    "startupIdea": "AI-powered meal planning app",
    "targetAudience": "Young Professionals",
    "budgetRange": "$10k-$50k",
    "platformType": "Web + Mobile"
  }'
```

## Deployment

### Environment Variables

Required for production:
- `PORT`: Server port
- `NODE_ENV`: Set to `production`
- `MONGODB_URI`: MongoDB connection string
- `CORS_ORIGIN`: Frontend URL

### Deployment Options

- **AWS ECS/Fargate**: Container deployment
- **Heroku**: Simple deployment with MongoDB Atlas
- **AWS Lambda**: Serverless with API Gateway
- **DigitalOcean App Platform**: Managed deployment

## License

MIT
