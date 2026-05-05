import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { useSession } from '../context/SessionProvider'
import apiService from '../services/apiService'
import HeroSection from './HeroSection'
import InputForm from './InputForm'
import FeatureCards from './FeatureCards'
import LoadingSpinner from '../shared/LoadingSpinner'

const HomePage = () => {
  const navigate = useNavigate()
  const { setCurrentBlueprint, setIsLoading, isLoading, setError } = useApp()
  const { sessionId } = useSession()
  const [generatingMessage, setGeneratingMessage] = useState('')

  const handleGenerateBlueprint = async (formData) => {
    try {
      setIsLoading(true)
      setError(null)
      setGeneratingMessage('Analyzing your startup idea...')

      const response = await apiService.generateBlueprint({
        ...formData,
        sessionId,
      })

      setCurrentBlueprint(response.blueprint)
      navigate('/dashboard')
    } catch (error) {
      console.error('Blueprint generation failed:', error)
      setError(error.message || 'Failed to generate blueprint. Please try again.')
      setGeneratingMessage('')
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <div className="text-center">
          <LoadingSpinner size="large" message={generatingMessage} />
          <p className="mt-4 text-gray-400 max-w-md mx-auto">
            Our AI is crafting your personalized startup blueprint with intelligent analysis...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 overflow-hidden">
      {/* Background gradient effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <InputForm onSubmit={handleGenerateBlueprint} isLoading={isLoading} />
        <FeatureCards />
      </div>
    </div>
  )
}

export default HomePage
