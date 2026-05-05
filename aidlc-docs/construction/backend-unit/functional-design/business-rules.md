# Backend Unit - Business Rules

## Input Validation Rules

### Startup Idea Validation
- **Required**: Yes
- **Min Length**: 10 characters
- **Max Length**: 1000 characters
- **Min Words**: 3 words
- **Format**: Plain text, no special formatting required
- **Error Message**: "Startup idea must be between 10-1000 characters and contain at least 3 words"

### Target Audience Validation
- **Required**: Yes
- **Allowed Values**: 
  - "Young Professionals"
  - "Students"
  - "Families"
  - "Seniors"
  - "Small Businesses"
  - "Enterprises"
  - "General Public"
- **Error Message**: "Invalid target audience selection"

### Budget Range Validation
- **Required**: Yes
- **Allowed Values**:
  - "$0-$10k" (Low Budget)
  - "$10k-$50k" (Medium Budget)
  - "$50k-$100k" (High Budget)
  - "$100k+" (Premium Budget)
- **Error Message**: "Invalid budget range selection"

### Platform Type Validation
- **Required**: Yes
- **Allowed Values**:
  - "Web"
  - "Mobile"
  - "Web + Mobile" (Hybrid)
  - "Desktop"
- **Error Message**: "Invalid platform type selection"

### Session ID Validation
- **Required**: Yes (for save/history operations)
- **Format**: UUID v4 format
- **Pattern**: `/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i`
- **Error Message**: "Invalid session ID format"

---

## Industry Classification Rules

### Classification Criteria

**E-commerce** (Score threshold: 5+):
- Primary keywords: shop, store, marketplace, buy, sell, retail, product, ecommerce
- Secondary keywords: cart, checkout, inventory, shipping, payment
- Characteristics: Buying/selling physical or digital goods

**SaaS** (Score threshold: 5+):
- Primary keywords: software, platform, tool, service, automation, cloud, saas
- Secondary keywords: subscription, dashboard, workflow, api
- Characteristics: Software as a service model

**FinTech** (Score threshold: 5+):
- Primary keywords: payment, finance, banking, investment, crypto, wallet, fintech
- Secondary keywords: transaction, money, trading, lending
- Characteristics: Financial services and technology

**HealthTech** (Score threshold: 5+):
- Primary keywords: health, medical, fitness, wellness, doctor, patient, healthcare
- Secondary keywords: diagnosis, treatment, exercise, nutrition
- Characteristics: Healthcare and wellness technology

**EdTech** (Score threshold: 5+):
- Primary keywords: education, learning, course, training, student, teacher, edtech
- Secondary keywords: lesson, curriculum, study, exam
- Characteristics: Educational technology and learning platforms

**Social** (Score threshold: 5+):
- Primary keywords: social, community, network, connect, share, chat, messaging
- Secondary keywords: friends, feed, post, like, follow
- Characteristics: Social networking and communication

**FoodTech** (Score threshold: 5+):
- Primary keywords: food, restaurant, meal, recipe, delivery, dining, foodtech
- Secondary keywords: menu, order, kitchen, cooking
- Characteristics: Food and dining technology

**TravelTech** (Score threshold: 5+):
- Primary keywords: travel, booking, hotel, flight, trip, vacation, tourism
- Secondary keywords: destination, itinerary, reservation
- Characteristics: Travel and hospitality technology

**PropTech** (Score threshold: 5+):
- Primary keywords: property, real estate, rental, housing, apartment, proptech
- Secondary keywords: lease, tenant, landlord, mortgage
- Characteristics: Property and real estate technology

**MarketingTech** (Score threshold: 5+):
- Primary keywords: marketing, advertising, campaign, analytics, seo, martech
- Secondary keywords: promotion, brand, engagement, conversion
- Characteristics: Marketing and advertising technology

**HRTech** (Score threshold: 5+):
- Primary keywords: hr, recruitment, hiring, employee, talent, job, hrtech
- Secondary keywords: resume, applicant, onboarding, payroll
- Characteristics: Human resources technology

**General** (Fallback):
- Used when no industry scores above threshold
- Generic templates and recommendations

---

## Budget Tier Rules

### Low Budget ($0-$10k)
- **Feature Count**: 3-5 MVP features
- **Technology**: Cost-effective stack (React, Node, MongoDB, Serverless)
- **Deployment**: Serverless (Lambda, API Gateway, DynamoDB)
- **Timeline**: 2-3 phases, 3-6 months
- **Monetization**: Freemium, ads, basic subscriptions

### Medium Budget ($10k-$50k)
- **Feature Count**: 5-8 core features
- **Technology**: Balanced stack (React, Express, PostgreSQL, Containers)
- **Deployment**: Containers (ECS Fargate, RDS, CloudFront)
- **Timeline**: 3-4 phases, 6-12 months
- **Monetization**: Tiered subscriptions, transaction fees

### High Budget ($50k-$100k)
- **Feature Count**: 8-12 comprehensive features
- **Technology**: Premium stack (Next.js, NestJS, PostgreSQL, Kubernetes)
- **Deployment**: Kubernetes (EKS, Aurora, Multi-region)
- **Timeline**: 4-5 phases, 12-18 months
- **Monetization**: Enterprise licensing, custom pricing

### Premium Budget ($100k+)
- **Feature Count**: 12+ enterprise features
- **Technology**: Enterprise stack (Next.js, NestJS, Aurora, Microservices)
- **Deployment**: Full enterprise (EKS, Aurora Global, Multi-region, DR)
- **Timeline**: 5-6 phases, 18-24 months
- **Monetization**: Enterprise contracts, white-label, custom solutions

---

## Platform Type Rules

### Web Platform
- **Frontend**: React, Vue, or Angular
- **Features**: Responsive design, browser compatibility, PWA capabilities
- **Pages**: Full website structure (10-15 pages)
- **Deployment**: Static hosting (S3, Netlify, Vercel) or server-side rendering

### Mobile Platform
- **Frontend**: React Native, Flutter, or Native (Swift/Kotlin)
- **Features**: Native features, offline mode, push notifications
- **Pages**: Landing page + app store presence
- **Deployment**: App stores (iOS App Store, Google Play)

### Hybrid (Web + Mobile)
- **Frontend**: React + React Native or Flutter
- **Features**: Cross-platform sync, unified backend, responsive + native
- **Pages**: Full website + mobile app
- **Deployment**: Web hosting + app stores

### Desktop Platform
- **Frontend**: Electron, Tauri, or native frameworks
- **Features**: Desktop-specific features, offline capabilities
- **Pages**: Landing page + download page
- **Deployment**: Desktop installers (Windows, macOS, Linux)

---

## Content Generation Rules

### Content Depth (Moderate)
- **Product Overview**: 1-2 paragraphs (150-300 words)
- **Core Features**: 5-8 features with descriptions (50-100 words each)
- **Website Pages**: 8-12 pages with purpose and sections
- **Technology Stack**: 15-20 technologies across all categories
- **Database Structure**: 5-8 models with relationships
- **Monetization Strategy**: 2-3 revenue models with detailed pricing
- **AWS Deployment**: 8-12 AWS services with architecture description
- **Development Roadmap**: 3-4 phases with milestones
- **Success Metrics**: 10-15 KPIs across categories

### Conditional Logic (Moderate)
- **Primary Factors**: Industry + Budget + Platform
- **Decision Points**: 
  - Industry determines content templates and domain-specific features
  - Budget determines feature count, tech sophistication, timeline
  - Platform determines tech stack, deployment, and page structure
- **Audience Impact**: Secondary influence on monetization and features
- **Complexity Assessment**: Derived from platform and feature count

---

## Session Management Rules

### Session ID Generation
- **Format**: UUID v4
- **Storage**: Client-side (localStorage)
- **Lifetime**: Persistent (no expiration)
- **Validation**: Format check on backend

### Session Usage
- **Blueprint Association**: All blueprints linked to session ID
- **History Retrieval**: Filter by session ID
- **Save Operation**: Requires valid session ID
- **Privacy**: No cross-session data access

---

## Database Operation Rules

### Blueprint Save Rules
- **Auto-save**: All generated blueprints saved automatically
- **isSaved Flag**: Initially false, set to true on user save action
- **Timestamps**: createdAt on generation, savedAt on user save
- **Uniqueness**: No duplicate prevention (allow multiple generations)

### Blueprint History Rules
- **Filter**: Only return blueprints where isSaved = true
- **Sort**: Most recent first (savedAt descending)
- **Limit**: No limit (return all saved blueprints for session)
- **Privacy**: Only return blueprints for requesting session ID

---

## Error Handling Rules

### Validation Errors (400)
- Invalid startup idea (too short, too long, empty)
- Invalid filter selections
- Invalid session ID format
- Missing required fields

### Service Errors (500)
- Blueprint generation failure
- Database connection failure
- Database save failure
- Unexpected errors

### Error Response Format
```javascript
{
  error: "ErrorType",
  message: "User-friendly error message",
  statusCode: 400 | 500
}
```

---

**Document Version**: 1.0  
**Last Updated**: 2026-05-05  
**Status**: Complete
