const mongoose = require('mongoose');

const blueprintSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
    index: true
  },
  startupIdea: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 1000
  },
  targetAudience: {
    type: String,
    required: true
  },
  budgetRange: {
    type: String,
    required: true
  },
  platformType: {
    type: String,
    required: true
  },
  generatedAnalysis: {
    productOverview: {
      summary: String,
      valueProp: String,
      problemSolution: String
    },
    coreFeatures: [{
      name: String,
      description: String,
      priority: String
    }],
    websitePages: [{
      name: String,
      purpose: String,
      sections: [String]
    }],
    technologyStack: {
      frontend: [String],
      backend: [String],
      database: [String],
      infrastructure: [String],
      tools: [String]
    },
    databaseStructure: {
      models: [{
        name: String,
        fields: [String],
        description: String
      }],
      relationships: [{
        from: String,
        to: String,
        type: String
      }]
    },
    monetizationStrategy: {
      revenueModels: [String],
      pricingStrategy: String,
      businessModel: String
    },
    awsDeploymentPlan: {
      architecture: String,
      services: [String],
      deploymentStrategy: String
    },
    developmentRoadmap: {
      phases: [{
        name: String,
        features: [String],
        duration: String
      }],
      milestones: [{
        name: String,
        description: String,
        phase: String
      }],
      timeline: String
    },
    successMetrics: {
      kpis: [String],
      analytics: [String],
      measurement: String
    }
  },
  isSaved: {
    type: Boolean,
    default: false,
    index: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: true
  },
  savedAt: {
    type: Date
  }
});

// Static method to find blueprints by session ID
blueprintSchema.statics.findBySessionId = function(sessionId) {
  return this.find({ sessionId }).sort({ createdAt: -1 });
};

// Static method to find saved blueprints
blueprintSchema.statics.findSavedBlueprints = function(sessionId) {
  return this.find({ sessionId, isSaved: true }).sort({ savedAt: -1 });
};

// Instance method to mark as saved
blueprintSchema.methods.markAsSaved = function() {
  this.isSaved = true;
  this.savedAt = new Date();
  return this.save();
};

const Blueprint = mongoose.model('Blueprint', blueprintSchema);

module.exports = Blueprint;
