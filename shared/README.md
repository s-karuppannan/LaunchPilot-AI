# LaunchPilot AI - Shared Package

Shared types, interfaces, constants, and utilities for LaunchPilot AI frontend and backend.

## Features

- ✅ Complete type definitions (JSDoc)
- ✅ Dropdown option constants
- ✅ Validation rules and utilities
- ✅ Formatting utilities
- ✅ API request/response contracts
- ✅ Shared business logic

## Package Structure

```
shared/
├── types/
│   ├── Blueprint.js         # Blueprint type definitions
│   ├── FormData.js          # Form data types
│   └── ApiTypes.js          # API request/response types
├── constants/
│   ├── dropdownOptions.js   # Dropdown option lists
│   └── validationRules.js   # Validation rules
├── utils/
│   ├── validation.js        # Validation utilities
│   └── formatting.js        # Formatting utilities
├── index.js                 # Main entry point
├── package.json
└── README.md
```

## Installation

### In Backend

```bash
cd backend
npm install ../shared
```

### In Frontend

```bash
cd frontend
npm install ../shared
```

## Usage

### Import Constants

```javascript
// Backend or Frontend
const { 
  TARGET_AUDIENCES, 
  BUDGET_RANGES, 
  PLATFORM_TYPES 
} = require('launchpilot-shared');

// Use in dropdown
<select>
  {TARGET_AUDIENCES.map(audience => (
    <option key={audience} value={audience}>
      {audience}
    </option>
  ))}
</select>
```

### Validation

```javascript
const { validateFormData } = require('launchpilot-shared');

const formData = {
  startupIdea: 'AI-powered meal planning app',
  targetAudience: 'Young Professionals',
  budgetRange: '$10k-$50k',
  platformType: 'Web + Mobile'
};

const { valid, errors } = validateFormData(formData);

if (!valid) {
  console.error('Validation errors:', errors);
}
```

### Formatting

```javascript
const { 
  formatDate, 
  formatBudgetRange, 
  truncateText 
} = require('launchpilot-shared');

// Format date
const formatted = formatDate(new Date());
// "May 5, 2026, 12:00 PM"

// Format budget
const budget = formatBudgetRange('$10k-$50k');
// "Medium Budget ($10k-$50k)"

// Truncate text
const short = truncateText('Long startup idea description...', 50);
// "Long startup idea description..."
```

### Type Definitions (JSDoc)

```javascript
/**
 * @typedef {import('launchpilot-shared/types/Blueprint').Blueprint} Blueprint
 * @typedef {import('launchpilot-shared/types/FormData').FormData} FormData
 */

/**
 * @param {FormData} formData
 * @returns {Promise<Blueprint>}
 */
async function generateBlueprint(formData) {
  // TypeScript/JSDoc will provide type checking
}
```

## Available Constants

### Dropdown Options

- `TARGET_AUDIENCES` - Array of target audience options
- `BUDGET_RANGES` - Array of budget range options
- `PLATFORM_TYPES` - Array of platform type options
- `INDUSTRY_TYPES` - Array of industry classifications
- `PRIORITY_LEVELS` - Array of feature priority levels

### Labels

- `BUDGET_TIER_LABELS` - Budget range display labels
- `PLATFORM_TYPE_LABELS` - Platform type display labels

### Validation Rules

- `STARTUP_IDEA_RULES` - Startup idea validation rules
- `TARGET_AUDIENCE_RULES` - Target audience validation rules
- `BUDGET_RANGE_RULES` - Budget range validation rules
- `PLATFORM_TYPE_RULES` - Platform type validation rules
- `SESSION_ID_RULES` - Session ID validation rules
- `BLUEPRINT_ID_RULES` - Blueprint ID validation rules

## Available Utilities

### Validation Functions

- `validateStartupIdea(startupIdea)` - Validate startup idea
- `validateTargetAudience(targetAudience)` - Validate target audience
- `validateBudgetRange(budgetRange)` - Validate budget range
- `validatePlatformType(platformType)` - Validate platform type
- `validateSessionId(sessionId)` - Validate session ID (UUID v4)
- `validateBlueprintId(blueprintId)` - Validate blueprint ID (MongoDB ObjectId)
- `validateFormData(formData)` - Validate complete form data

All validation functions return:
```javascript
{
  valid: boolean,
  error: string | null  // or errors: object for validateFormData
}
```

### Formatting Functions

- `formatDate(date)` - Format date to readable string
- `formatDateShort(date)` - Format date to MM/DD/YYYY
- `formatRelativeTime(date)` - Format relative time ("2 hours ago")
- `truncateText(text, maxLength)` - Truncate text with ellipsis
- `capitalizeFirst(str)` - Capitalize first letter
- `toTitleCase(str)` - Convert to title case
- `formatBudgetRange(budgetRange)` - Format budget range for display
- `formatPlatformType(platformType)` - Format platform type for display
- `generateInitials(name)` - Generate initials from name
- `formatNumber(num)` - Format number with commas
- `formatCurrency(amount, currency)` - Format currency

## Type Definitions

### Blueprint Types

- `Blueprint` - Complete blueprint document
- `GeneratedAnalysis` - All analysis sections
- `ProductOverview` - Product overview section
- `Feature` - Core feature
- `Page` - Website page
- `TechnologyStack` - Technology stack
- `DatabaseStructure` - Database structure
- `MonetizationStrategy` - Monetization strategy
- `AWSDeploymentPlan` - AWS deployment plan
- `DevelopmentRoadmap` - Development roadmap
- `SuccessMetrics` - Success metrics

### Form Types

- `FormData` - User input form data
- `FormErrors` - Form validation errors

### API Types

- `GenerateBlueprintRequest` - Generate blueprint request
- `GenerateBlueprintResponse` - Generate blueprint response
- `SaveBlueprintRequest` - Save blueprint request
- `SaveBlueprintResponse` - Save blueprint response
- `GetBlueprintHistoryRequest` - Get history request
- `GetBlueprintHistoryResponse` - Get history response
- `HealthCheckResponse` - Health check response
- `ApiError` - API error response

## Examples

### Backend Usage

```javascript
const { 
  validateFormData, 
  TARGET_AUDIENCES 
} = require('launchpilot-shared');

// Validate request
const { valid, errors } = validateFormData(req.body);
if (!valid) {
  return res.status(400).json({ errors });
}

// Check if audience is valid
if (!TARGET_AUDIENCES.includes(req.body.targetAudience)) {
  return res.status(400).json({ error: 'Invalid audience' });
}
```

### Frontend Usage

```javascript
import { 
  TARGET_AUDIENCES, 
  BUDGET_RANGES, 
  validateStartupIdea,
  formatDate 
} from 'launchpilot-shared';

// Render dropdown
<select value={targetAudience} onChange={handleChange}>
  {TARGET_AUDIENCES.map(audience => (
    <option key={audience} value={audience}>
      {audience}
    </option>
  ))}
</select>

// Validate input
const { valid, error } = validateStartupIdea(startupIdea);
if (!valid) {
  setError(error);
}

// Format date
<p>Created: {formatDate(blueprint.createdAt)}</p>
```

## Versioning

This package uses semantic versioning. When making changes:

- **Major version**: Breaking changes to types or function signatures
- **Minor version**: New features, new constants, new utilities
- **Patch version**: Bug fixes, documentation updates

## License

MIT
