/**
 * Dropdown Options Constants
 * Shared dropdown options for frontend and backend
 */

/**
 * Target Audience Options
 */
export const TARGET_AUDIENCES = [
  { value: 'Young Professionals', label: 'Young Professionals (18-35)' },
  { value: 'Students', label: 'Students & Educators' },
  { value: 'Families', label: 'Families' },
  { value: 'Seniors', label: 'Seniors (55+)' },
  { value: 'Small Businesses', label: 'Small Businesses' },
  { value: 'Enterprises', label: 'Enterprise Companies' },
  { value: 'General Public', label: 'General Public' }
];

/**
 * Budget Range Options
 */
export const BUDGET_RANGES = [
  { value: '$0-$10k', label: '$0 - $10,000 (Bootstrap)' },
  { value: '$10k-$50k', label: '$10,000 - $50,000 (Seed)' },
  { value: '$50k-$100k', label: '$50,000 - $100,000 (Series A)' },
  { value: '$100k+', label: '$100,000+ (Well Funded)' }
];

/**
 * Platform Type Options
 */
export const PLATFORM_TYPES = [
  { value: 'Web', label: 'Web Application' },
  { value: 'Mobile', label: 'Mobile App (iOS/Android)' },
  { value: 'Web + Mobile', label: 'Web + Mobile (Hybrid)' },
  { value: 'Desktop', label: 'Desktop Application' }
];

/**
 * Industry Types (for reference)
 */
export const INDUSTRY_TYPES = [
  'E-commerce',
  'SaaS',
  'FinTech',
  'HealthTech',
  'EdTech',
  'Social',
  'FoodTech',
  'TravelTech',
  'PropTech',
  'MarketingTech',
  'HRTech',
  'General'
];

/**
 * Feature Priority Levels
 */
export const PRIORITY_LEVELS = [
  'high',
  'medium',
  'low'
];

/**
 * Budget Tier Labels
 */
export const BUDGET_TIER_LABELS = {
  '$0-$10k': 'Low Budget',
  '$10k-$50k': 'Medium Budget',
  '$50k-$100k': 'High Budget',
  '$100k+': 'Premium Budget'
};

/**
 * Platform Type Labels
 */
export const PLATFORM_TYPE_LABELS = {
  'Web': 'Web Application',
  'Mobile': 'Mobile Application',
  'Web + Mobile': 'Hybrid (Web + Mobile)',
  'Desktop': 'Desktop Application'
};
