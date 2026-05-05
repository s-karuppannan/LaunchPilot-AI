import { useState } from 'react'
import { useApp } from '../context/AppContext'
import Card from '../shared/Card'
import Button from '../shared/Button'
import { 
  TARGET_AUDIENCES, 
  BUDGET_RANGES, 
  PLATFORM_TYPES 
} from '../../../shared/constants/dropdownOptions'

const InputForm = ({ onSubmit, isLoading }) => {
  const { error, clearError } = useApp()
  const [formData, setFormData] = useState({
    startupIdea: '',
    targetAudience: '',
    budgetRange: '',
    platformType: '',
  })
  const [errors, setErrors] = useState({})

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear field error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
    if (error) {
      clearError()
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.startupIdea.trim()) {
      newErrors.startupIdea = 'Please describe your startup idea'
    } else if (formData.startupIdea.trim().length < 10) {
      newErrors.startupIdea = 'Please provide at least 10 characters'
    }

    if (!formData.targetAudience) {
      newErrors.targetAudience = 'Please select a target audience'
    }

    if (!formData.budgetRange) {
      newErrors.budgetRange = 'Please select a budget range'
    }

    if (!formData.platformType) {
      newErrors.platformType = 'Please select a platform type'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      await onSubmit(formData)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-4xl mx-auto" padding="large">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Startup Idea */}
          <div>
            <label htmlFor="startupIdea" className="block text-sm font-medium text-gray-300 mb-2">
              Describe Your Startup Idea *
            </label>
            <textarea
              id="startupIdea"
              rows="4"
              value={formData.startupIdea}
              onChange={(e) => handleInputChange('startupIdea', e.target.value)}
              placeholder="e.g., A mobile app that connects local farmers with restaurants for fresh produce delivery..."
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            />
            {errors.startupIdea && (
              <p className="mt-1 text-sm text-red-400">{errors.startupIdea}</p>
            )}
          </div>

          {/* Target Audience */}
          <div>
            <label htmlFor="targetAudience" className="block text-sm font-medium text-gray-300 mb-2">
              Target Audience *
            </label>
            <select
              id="targetAudience"
              value={formData.targetAudience}
              onChange={(e) => handleInputChange('targetAudience', e.target.value)}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            >
              <option value="">Select target audience</option>
              {TARGET_AUDIENCES.map(audience => (
                <option key={audience.value} value={audience.value}>
                  {audience.label}
                </option>
              ))}
            </select>
            {errors.targetAudience && (
              <p className="mt-1 text-sm text-red-400">{errors.targetAudience}</p>
            )}
          </div>

          {/* Budget Range */}
          <div>
            <label htmlFor="budgetRange" className="block text-sm font-medium text-gray-300 mb-2">
              Budget Range *
            </label>
            <select
              id="budgetRange"
              value={formData.budgetRange}
              onChange={(e) => handleInputChange('budgetRange', e.target.value)}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            >
              <option value="">Select budget range</option>
              {BUDGET_RANGES.map(budget => (
                <option key={budget.value} value={budget.value}>
                  {budget.label}
                </option>
              ))}
            </select>
            {errors.budgetRange && (
              <p className="mt-1 text-sm text-red-400">{errors.budgetRange}</p>
            )}
          </div>

          {/* Platform Type */}
          <div>
            <label htmlFor="platformType" className="block text-sm font-medium text-gray-300 mb-2">
              Platform Type *
            </label>
            <select
              id="platformType"
              value={formData.platformType}
              onChange={(e) => handleInputChange('platformType', e.target.value)}
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            >
              <option value="">Select platform type</option>
              {PLATFORM_TYPES.map(platform => (
                <option key={platform.value} value={platform.value}>
                  {platform.label}
                </option>
              ))}
            </select>
            {errors.platformType && (
              <p className="mt-1 text-sm text-red-400">{errors.platformType}</p>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            size="large"
            isLoading={isLoading}
            className="w-full"
          >
            Generate Blueprint
          </Button>
        </form>
      </Card>
    </div>
  )
}

export default InputForm
