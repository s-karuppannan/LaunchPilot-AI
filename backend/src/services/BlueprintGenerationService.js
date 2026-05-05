/**
 * Advanced BlueprintGenerationService
 * Industry-smart startup blueprint generation engine
 */
class BlueprintGenerationService {
  async generateBlueprint(inputData) {
    const { startupIdea, targetAudience, budgetRange, platformType } = inputData;

    const keywords = this.extractKeywords(startupIdea);
    const industry = this.detectIndustry(startupIdea, keywords);

    const productOverview = this.generateProductOverview(startupIdea, keywords, industry);
    const coreFeatures = this.generateCoreFeatures(industry, platformType, budgetRange);
    const websitePages = this.generateWebsitePages(industry, platformType);
    const complexity = this.assessComplexity(industry, platformType, budgetRange);
    const technologyStack = this.generateTechnologyStack(industry, platformType, complexity);
    const databaseStructure = this.generateDatabaseStructure(industry);
    const monetizationStrategy = this.generateMonetizationStrategy(industry, budgetRange);
    const awsDeploymentPlan = this.generateAWSDeploymentPlan(industry, complexity);
    const developmentRoadmap = this.generateDevelopmentRoadmap(industry, complexity);
    const successMetrics = this.generateSuccessMetrics(industry);

    return {
      productOverview,
      coreFeatures,
      websitePages,
      technologyStack,
      databaseStructure,
      monetizationStrategy,
      awsDeploymentPlan,
      developmentRoadmap,
      successMetrics
    };
  }

  extractKeywords(startupIdea) {
    const stopWords = ['the','a','an','and','or','for','to','of','with','is','are','in','on'];
    return startupIdea
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(' ')
      .filter(word => word.length > 2 && !stopWords.includes(word));
  }

  detectIndustry(startupIdea, keywords) {
    const text = startupIdea.toLowerCase();

    if (text.includes('food') || text.includes('restaurant') || text.includes('delivery') || text.includes('meal')) return 'FoodTech';
    if (text.includes('shop') || text.includes('store') || text.includes('ecommerce') || text.includes('marketplace')) return 'Ecommerce';
    if (text.includes('finance') || text.includes('payment') || text.includes('wallet') || text.includes('bank')) return 'FinTech';
    if (text.includes('course') || text.includes('student') || text.includes('learning') || text.includes('education')) return 'EdTech';
    if (text.includes('doctor') || text.includes('health') || text.includes('medical') || text.includes('fitness')) return 'HealthTech';
    if (text.includes('booking') || text.includes('travel') || text.includes('hotel')) return 'TravelTech';
    if (text.includes('job') || text.includes('hiring') || text.includes('employee')) return 'HRTech';
    if (text.includes('social') || text.includes('chat') || text.includes('community')) return 'SocialTech';
    if (text.includes('software') || text.includes('automation') || text.includes('dashboard') || text.includes('saas')) return 'SaaS';
    if (
  text.includes('biscuit') ||
  text.includes('snack') ||
  text.includes('brand') ||
  text.includes('manufacturing') ||
  text.includes('product company') ||
  text.includes('fmcg')
) return 'ConsumerBrand';
    return 'General';
  }

  generateProductOverview(startupIdea, keywords, industry) {
    const overviewMap = {
      FoodTech: {
        summary: `A real-time food delivery ecosystem that connects customers, restaurants, and delivery partners through seamless mobile ordering and live order tracking.`,
        valueProp: `Enables users to discover nearby restaurants, place instant orders, track deliveries in real time, and receive meals faster with frictionless digital payments.`,
        problemSolution: `Traditional phone-based ordering lacks visibility, tracking, and delivery coordination. LaunchPilot proposes a scalable FoodTech platform with restaurant onboarding, GPS delivery assignment, customer notifications, and centralized order management.`
      },
      Ecommerce: {
        summary: `A scalable e-commerce marketplace enabling vendors to list products, customers to purchase securely, and administrators to monitor transactions in one digital ecosystem.`,
        valueProp: `Improves product discoverability, simplifies online payments, automates order workflows, and expands business reach through a mobile-first buying experience.`,
        problemSolution: `Small retailers struggle with digital visibility and fragmented inventory handling. This platform centralizes catalog management, order processing, payment capture, and customer retention through an integrated commerce engine.`
      },
      FinTech: {
        summary: `A digital financial platform designed for secure payment handling, smart wallet management, and transparent money movement across users and merchants.`,
        valueProp: `Delivers instant payment execution, wallet top-up, transaction transparency, and secure financial tracking from one fintech-ready application.`,
        problemSolution: `Manual money transfers and fragmented finance tools create trust and speed issues. This platform introduces secure digital wallets, payment history, merchant settlements, and automated transaction records.`
      },
      EdTech: {
        summary: `An online learning ecosystem providing digital course access, learner progress analytics, assessments, and instructor-led educational delivery.`,
        valueProp: `Allows students to learn flexibly, track progress, complete quizzes, and access structured educational modules from any device.`,
        problemSolution: `Traditional classroom dependency limits flexibility and personalized progress tracking. This platform digitizes content delivery, performance monitoring, and certification workflows for modern learners.`
      },
      HealthTech: {
        summary: `A healthcare management platform enabling appointment booking, digital consultations, patient records, and wellness engagement through a secure interface.`,
        valueProp: `Patients can book doctors, manage health records, receive reminders, and access tele-consultation without physical dependency.`,
        problemSolution: `Healthcare appointment friction and poor record continuity reduce efficiency. This solution streamlines doctor discovery, scheduling, prescription records, and patient communication digitally.`
      },
      ConsumerBrand: {
        summary: `A consumer packaged goods distribution platform designed to digitize biscuit manufacturing, dealer supply, retailer ordering, and nationwide product movement.`,
        valueProp: `Enables the biscuit company to manage distributors, monitor stock dispatch, track retailer demand, launch promotional campaigns, and scale sales operations efficiently.`,
        problemSolution: `Traditional FMCG distribution relies heavily on manual dealer calls, stock mismatch, and delayed retailer communication. This platform introduces centralized production tracking, distributor order collection, warehouse dispatch visibility, and sales analytics for faster market penetration.`
      },
      General: {
        summary: `A modern startup platform transforming the business idea into a scalable digital product ecosystem with intelligent user workflows and cloud-ready architecture.`,
        valueProp: `Provides users with streamlined digital access, efficient process automation, and scalable service delivery tailored to market demand.`,
        problemSolution: `Conventional manual systems are fragmented and inefficient. This application introduces centralized digital operations, automation, and measurable customer engagement.`
      }
    };

    return overviewMap[industry] || overviewMap.General;
  }

  generateCoreFeatures(industry, platformType, budgetRange) {
    const featureMap = {
      FoodTech: [
        { name: 'Customer Food Ordering', description: 'Browse restaurants, menus, offers, and place food orders instantly.', priority: 'high' },
        { name: 'Restaurant Partner Dashboard', description: 'Restaurants manage menu items, incoming orders, availability, and sales.', priority: 'high' },
        { name: 'Delivery Partner Tracking', description: 'Assign nearby riders and track delivery movement through GPS.', priority: 'high' },
        { name: 'Live Order Status Updates', description: 'Users receive cooking, pickup, and delivery progress notifications.', priority: 'medium' },
        { name: 'Integrated Payment Gateway', description: 'UPI, card, wallet, and COD payment processing.', priority: 'high' },
        { name: 'Offer & Coupon Engine', description: 'Promotional discounts, referral codes, and loyalty offers.', priority: 'medium' },
        { name: 'Admin Operations Panel', description: 'Manage vendors, commissions, user complaints, and analytics.', priority: 'medium' }
      ],
      Ecommerce: [
        { name: 'Vendor Product Listing', description: 'Multiple vendors can upload products with pricing and stock.', priority: 'high' },
        { name: 'Smart Product Search', description: 'Category, price, and rating-based discovery engine.', priority: 'high' },
        { name: 'Cart & Checkout', description: 'One-click checkout with secure order confirmation.', priority: 'high' },
        { name: 'Order Tracking', description: 'Shipment and dispatch tracking after purchase.', priority: 'medium' },
        { name: 'Inventory Monitoring', description: 'Automated low-stock and stock-out control.', priority: 'medium' },
        { name: 'Payment & Refund System', description: 'Secure digital transactions and refund initiation.', priority: 'high' },
        { name: 'Admin Commerce Analytics', description: 'Revenue, top products, and vendor performance analytics.', priority: 'medium' }
      ],
      FinTech: [
        { name: 'Secure Wallet Management', description: 'Digital wallet balance, add funds, withdraw funds.', priority: 'high' },
        { name: 'Peer-to-Peer Transfer', description: 'Instant money sending between registered users.', priority: 'high' },
        { name: 'Merchant Payment Scanner', description: 'QR or merchant payment settlement.', priority: 'high' },
        { name: 'Transaction Ledger', description: 'Complete financial history and statements.', priority: 'medium' },
        { name: 'Fraud Detection Alerts', description: 'Suspicious payment monitoring and OTP verification.', priority: 'medium' },
        { name: 'Admin Settlement Console', description: 'Merchant payout and reconciliation management.', priority: 'medium' }
      ],
      EdTech: [
        { name: 'Course Enrollment Engine', description: 'Students enroll into structured course tracks.', priority: 'high' },
        { name: 'Video Lesson Delivery', description: 'Stream educational modules with progress save.', priority: 'high' },
        { name: 'Quiz & Assessment Module', description: 'Conduct tests and score evaluations.', priority: 'high' },
        { name: 'Certificate Generation', description: 'Issue completion badges and certificates.', priority: 'medium' },
        { name: 'Instructor Dashboard', description: 'Teacher content and student management.', priority: 'medium' },
        { name: 'Learning Analytics', description: 'Track completion, weak topics, and attendance.', priority: 'medium' }
      ],
      ConsumerBrand: [
        { name: 'Distributor Order Portal', description: 'Authorized distributors can place bulk biscuit orders digitally.', priority: 'high' },
        { name: 'Retailer Refill Requests', description: 'Retail shops submit refill stock requests based on demand.', priority: 'high' },
        { name: 'Warehouse Dispatch Tracking', description: 'Factory dispatch, logistics movement, and delivery confirmation.', priority: 'high' },
        { name: 'Sales Promotion Engine', description: 'Discount slabs, combo offers, and festive retailer schemes.', priority: 'medium' },
        { name: 'Dealer Performance Analytics', description: 'Track top distributors, low-performing zones, and sales volume.', priority: 'medium' },
        { name: 'Brand Complaint & Feedback Module', description: 'Retailers and customers submit product quality complaints.', priority: 'medium' }
      ],
      General: [
        { name: 'User Authentication', description: 'Secure account registration and login flow.', priority: 'high' },
        { name: 'Core Service Dashboard', description: 'Main user interaction and data management panel.', priority: 'high' },
        { name: 'Real-time Notifications', description: 'Live updates and workflow alerts.', priority: 'medium' },
        { name: 'Analytics & Reporting', description: 'Usage statistics and admin insights.', priority: 'medium' },
        { name: 'Admin Control Center', description: 'Master system supervision and controls.', priority: 'medium' }
      ]
    };

    return featureMap[industry] || featureMap.General;
  }
    generateWebsitePages(industry, platformType) {
    const pageMap = {
      FoodTech: [
        { name: 'Customer App Home', purpose: 'Restaurant browsing, category filters, top offers', sections: ['Nearby Restaurants', 'Coupons', 'Top Rated', 'Quick Reorder'] },
        { name: 'Restaurant Dashboard', purpose: 'Vendor order acceptance and menu control', sections: ['Incoming Orders', 'Menu Manager', 'Revenue', 'Ratings'] },
        { name: 'Delivery Tracking Screen', purpose: 'Real-time rider and order route tracking', sections: ['Map View', 'ETA', 'Contact Rider'] }
      ],
      Ecommerce: [
        { name: 'Marketplace Home', purpose: 'Product promotions and category discovery', sections: ['Banner', 'Featured Products', 'Deals', 'Recommendations'] },
        { name: 'Product Detail Page', purpose: 'Product specs and checkout trigger', sections: ['Images', 'Description', 'Reviews', 'Buy Now'] },
        { name: 'Vendor Panel', purpose: 'Seller product and order management', sections: ['Orders', 'Inventory', 'Revenue'] }
      ],
      FinTech: [
        { name: 'Wallet Dashboard', purpose: 'Balance and transaction actions', sections: ['Wallet Balance', 'Send Money', 'Add Funds'] },
        { name: 'Merchant Settlement Page', purpose: 'Merchant payment processing', sections: ['QR Payments', 'Invoices', 'Settlement'] }
      ],
      EdTech: [
        { name: 'Learning Dashboard', purpose: 'Student enrolled courses and progress', sections: ['My Courses', 'Upcoming Tests', 'Progress'] },
        { name: 'Course Lesson Screen', purpose: 'Video content and lesson notes', sections: ['Video', 'Materials', 'Assignments'] }
      ],
      ConsumerBrand: [
        { name: 'Brand Product Showcase', purpose: 'Display biscuit categories, packs, and offers', sections: ['Top Products', 'Combo Packs', 'Offers'] },
        { name: 'Distributor Ordering Dashboard', purpose: 'Bulk ordering and invoice requests', sections: ['Order Cart', 'Dispatch Status', 'Invoices'] },
        { name: 'Retailer Feedback Center', purpose: 'Complaint registration and scheme announcements', sections: ['Complaints', 'Retailer Offers', 'Announcements'] }
      ],
      General: [
        { name: 'Landing Page', purpose: 'Business intro and CTA', sections: ['Hero', 'Benefits', 'How It Works'] },
        { name: 'Dashboard', purpose: 'Primary service operations', sections: ['Analytics', 'Tasks', 'Reports'] }
      ]
    };

    return pageMap[industry] || pageMap.General;
  }

  generateTechnologyStack(industry, platformType, complexity) {
    return {
      frontend: platformType === 'Mobile'
        ? ['React Native', 'Expo', 'TypeScript']
        : ['React', 'Tailwind CSS', 'Vite'],
      backend: ['Node.js', 'Express.js', 'REST API'],
      database: ['MongoDB', 'Redis Cache'],
      infrastructure: ['AWS EC2', 'AWS S3', 'AWS CloudFront', 'AWS Route53'],
      tools: ['GitHub', 'Postman', 'Docker', 'VS Code']
    };
  }

  generateDatabaseStructure(industry) {
    const structures = {
      FoodTech: {
        models: [
          { name: 'User', fields: ['id(String)', 'name(String)', 'phone(String)', 'address(String)'], description: 'Customer accounts' },
          { name: 'Restaurant', fields: ['id(String)', 'name(String)', 'location(String)', 'rating(Number)'], description: 'Restaurant partners' },
          { name: 'Order', fields: ['id(String)', 'userId(String)', 'restaurantId(String)', 'amount(Number)', 'status(String)'], description: 'Food order records' },
          { name: 'DeliveryPartner', fields: ['id(String)', 'name(String)', 'vehicle(String)', 'availability(Boolean)'], description: 'Delivery personnel' }
        ],
        relationships: [
          { from: 'User', to: 'Order', type: 'one-to-many' },
          { from: 'Restaurant', to: 'Order', type: 'one-to-many' },
          { from: 'DeliveryPartner', to: 'Order', type: 'one-to-many' }
        ]
      },
      Ecommerce: {
        models: [
          { name: 'User', fields: ['id(String)', 'name(String)', 'email(String)'], description: 'Buyer accounts' },
          { name: 'Vendor', fields: ['id(String)', 'storeName(String)', 'owner(String)'], description: 'Seller accounts' },
          { name: 'Product', fields: ['id(String)', 'name(String)', 'price(Number)', 'stock(Number)'], description: 'Marketplace products' },
          { name: 'Order', fields: ['id(String)', 'userId(String)', 'productId(String)', 'status(String)'], description: 'Purchase records' }
        ],
        relationships: [
          { from: 'Vendor', to: 'Product', type: 'one-to-many' },
          { from: 'User', to: 'Order', type: 'one-to-many' }
        ]
      },
      FinTech: {
        models: [
          { name: 'UserWallet', fields: ['id(String)', 'userId(String)', 'balance(Number)'], description: 'Wallet storage' },
          { name: 'Transaction', fields: ['id(String)', 'sender(String)', 'receiver(String)', 'amount(Number)'], description: 'Transfer records' },
          { name: 'Merchant', fields: ['id(String)', 'merchantName(String)', 'qrCode(String)'], description: 'Merchant payment accounts' }
        ],
        relationships: [
          { from: 'UserWallet', to: 'Transaction', type: 'one-to-many' }
        ]
      },
      ConsumerBrand: {
        models: [
          { name: 'Distributor', fields: ['id(String)', 'name(String)', 'region(String)', 'phone(String)'], description: 'Wholesale distribution partners' },
          { name: 'RetailerOrder', fields: ['id(String)', 'distributorId(String)', 'productBatch(String)', 'quantity(Number)', 'status(String)'], description: 'Retail stock orders' },
          { name: 'WarehouseBatch', fields: ['id(String)', 'productName(String)', 'units(Number)', 'dispatchDate(Date)'], description: 'Manufacturing stock batches' },
          { name: 'Complaint', fields: ['id(String)', 'retailer(String)', 'issue(String)', 'resolution(String)'], description: 'Product issue reporting' }
        ],
        relationships: [
          { from: 'Distributor', to: 'RetailerOrder', type: 'one-to-many' },
          { from: 'WarehouseBatch', to: 'RetailerOrder', type: 'one-to-many' }
        ]
      },
      General: {
        models: [
          { name: 'User', fields: ['id(String)', 'name(String)', 'email(String)'], description: 'Platform users' },
          { name: 'Activity', fields: ['id(String)', 'userId(String)', 'action(String)'], description: 'System actions' }
        ],
        relationships: [
          { from: 'User', to: 'Activity', type: 'one-to-many' }
        ]
      }
    };

    return structures[industry] || structures.General;
  }

  generateMonetizationStrategy(industry, budgetRange) {
    return {
      revenueModels: ['Subscription Revenue', 'Commission Revenue', 'Premium Partner Listings'],
      pricingStrategy: 'Freemium onboarding with premium transaction services and vendor-side monetization.',
      businessModel: `Hybrid ${industry} monetization model combining user convenience features and partner commission income.`
    };
  }

  generateAWSDeploymentPlan(industry, complexity) {
    return {
      architecture: 'Scalable cloud deployment using compute, storage, CDN, and managed monitoring services.',
      services: ['EC2', 'S3', 'CloudFront', 'Route53', 'CloudWatch', 'Elastic Load Balancer'],
      deploymentStrategy: 'Frontend deployed via static hosting CDN, backend deployed on Node server instance, MongoDB cloud integration, autoscaling enabled for production growth.'
    };
  }

  generateDevelopmentRoadmap(industry, complexity) {
    return {
      phases: [
        {
          name: 'Phase 1: MVP Setup',
          description: 'Build startup foundation and primary workflows',
          duration: '1-2 months',
          deliverables: ['Authentication', 'Database Setup', 'Core Modules']
        },
        {
          name: 'Phase 2: Smart Operations',
          description: 'Add business-specific advanced flows',
          duration: '2-3 months',
          deliverables: ['Industry Modules', 'Payment Logic', 'Notifications']
        },
        {
          name: 'Phase 3: Scale & Optimization',
          description: 'Performance, analytics, deployment hardening',
          duration: '2 months',
          deliverables: ['AWS Deployment', 'Admin Analytics', 'Optimization']
        }
      ],
      milestones: [
        'MVP Launch',
        'Beta Customer Acquisition',
        'Scalable Public Deployment'
      ],
      timeline: '6-8 months'
    };
  }

  generateSuccessMetrics(industry) {
    return {
      kpis: [
        'Monthly Active Users',
        'Conversion Rate',
        'Revenue Per User',
        'Partner Retention',
        'Customer Satisfaction',
        'Order/Transaction Completion Rate'
      ],
      analytics: [
        'Usage trend monitoring',
        'Funnel drop analysis',
        'Revenue dashboard',
        'Operational performance tracking'
      ],
      measurement: `Weekly KPI review and monthly ${industry} business growth optimization based on user and partner data.`
    };
  }

  assessComplexity(industry, platformType, budgetRange) {
    let score = 5;
    if (platformType === 'Mobile') score += 2;
    if (industry !== 'General') score += 2;
    if (budgetRange.includes('$50k')) score += 2;

    if (score <= 6) return 'medium';
    return 'high';
  }
}

module.exports = new BlueprintGenerationService();