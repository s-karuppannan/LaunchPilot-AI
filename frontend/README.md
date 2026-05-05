# LaunchPilot AI - Frontend

Premium AI-powered startup blueprint generator frontend built with React, Vite, and Tailwind CSS.

## Features

- 🎨 **Premium Dark Futuristic UI** - Glassmorphism effects, neon gradients, smooth animations
- ⚡ **Lightning Fast** - Built with Vite for instant hot module replacement
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🚀 **React 18** - Latest React features with hooks and context API
- 🎯 **Type-Safe** - JSDoc type annotations for better developer experience
- 🔄 **Real-time Updates** - Instant blueprint generation with loading states
- 💾 **Session Management** - Persistent sessions with localStorage
- 🎭 **Error Boundaries** - Graceful error handling with user-friendly messages

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: React Context API
- **HTTP Client**: Fetch API
- **Session**: UUID + localStorage

## Project Structure

```
frontend/
├── src/
│   ├── homepage/              # Homepage feature
│   │   ├── HomePage.jsx       # Main landing page
│   │   ├── HeroSection.jsx    # Hero section with glowing title
│   │   ├── InputForm.jsx      # Startup idea input form
│   │   └── FeatureCards.jsx   # Feature showcase cards
│   ├── dashboard/             # Dashboard feature
│   │   ├── DashboardPage.jsx  # Main dashboard page
│   │   ├── Sidebar.jsx        # Navigation sidebar
│   │   ├── Toolbar.jsx        # Top action toolbar
│   │   ├── HeroSummaryCard.jsx # Blueprint summary card
│   │   ├── AnalysisCard.jsx   # Reusable analysis card
│   │   └── sections/          # Analysis section components
│   │       ├── ProductOverviewSection.jsx
│   │       ├── CoreFeaturesSection.jsx
│   │       ├── WebsitePagesSection.jsx
│   │       ├── TechnologyStackSection.jsx
│   │       ├── DatabaseStructureSection.jsx
│   │       ├── MonetizationStrategySection.jsx
│   │       ├── AWSDeploymentSection.jsx
│   │       ├── DevelopmentRoadmapSection.jsx
│   │       └── SuccessMetricsSection.jsx
│   ├── shared/                # Shared components
│   │   ├── Button.jsx         # Reusable button component
│   │   ├── Card.jsx           # Glassmorphism card component
│   │   ├── LoadingSpinner.jsx # Premium loading animation
│   │   └── ErrorBoundary.jsx  # Error handling wrapper
│   ├── context/               # Context providers
│   │   ├── AppContext.jsx     # Global app state
│   │   └── SessionProvider.jsx # Session management
│   ├── services/              # API services
│   │   └── apiService.js      # Backend API client
│   ├── App.jsx                # Root component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── public/                    # Static assets
├── index.html                 # HTML template
├── package.json               # Dependencies
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind configuration
└── postcss.config.js          # PostCSS configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Backend API running on http://localhost:5000

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Update `.env` with your backend API URL:
```
VITE_API_URL=http://localhost:5000
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at http://localhost:3000

### Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## API Integration

The frontend communicates with the backend API through the `apiService`:

### Endpoints

- **POST /api/generateBlueprint** - Generate startup blueprint
- **POST /api/saveBlueprint** - Save blueprint to history
- **GET /api/getBlueprintHistory** - Retrieve saved blueprints
- **GET /api/health** - Health check

### Example Usage

```javascript
import apiService from './services/apiService'

// Generate blueprint
const response = await apiService.generateBlueprint({
  startupIdea: 'A mobile app for...',
  targetAudience: 'B2C',
  budgetRange: 'Medium',
  platformType: 'Mobile',
  sessionId: 'uuid-here'
})

// Save blueprint
await apiService.saveBlueprint(blueprintId, sessionId)

// Get history
const history = await apiService.getBlueprintHistory(sessionId)
```

## Component Architecture

### Context Providers

- **SessionProvider** - Manages session ID with localStorage persistence
- **AppProvider** - Manages global app state (blueprint, loading, errors)

### Routing

- `/` - Homepage with input form
- `/dashboard` - Blueprint dashboard with analysis sections

### State Management

Global state managed with React Context API:
- Current blueprint data
- Loading states
- Error messages
- Session ID

## Styling

### Tailwind CSS

Custom theme with premium dark futuristic design:
- Primary colors: Blue gradient (#0ea5e9)
- Accent colors: Purple gradient (#a855f7)
- Glassmorphism effects with backdrop blur
- Neon glow animations
- Smooth transitions

### Custom Utilities

```css
.glass-effect - Glassmorphism card effect
.glass-effect-hover - Hover state for glass cards
.gradient-text - Gradient text effect
.gradient-border - Gradient border effect
```

## Error Handling

- **ErrorBoundary** - Catches React component errors
- **API Error Handling** - User-friendly error messages
- **Form Validation** - Real-time input validation
- **Loading States** - Premium loading animations

## Session Management

- Session ID generated with UUID
- Stored in localStorage
- Persists across page refreshes
- Used for blueprint history tracking

## Performance

- Code splitting with React.lazy (future enhancement)
- Optimized bundle size with Vite
- Fast refresh during development
- Production build optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Follow React best practices
2. Use functional components with hooks
3. Maintain consistent styling with Tailwind
4. Add JSDoc comments for complex functions
5. Test all user flows before committing

## License

MIT License - see LICENSE file for details
