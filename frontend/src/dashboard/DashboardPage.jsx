import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { useSession } from '../context/SessionProvider'
import Sidebar from './Sidebar'
import Toolbar from './Toolbar'
import HeroSummaryCard from './HeroSummaryCard'
import ProductOverviewSection from './sections/ProductOverviewSection'
import CoreFeaturesSection from './sections/CoreFeaturesSection'
import WebsitePagesSection from './sections/WebsitePagesSection'
import TechnologyStackSection from './sections/TechnologyStackSection'
import DatabaseStructureSection from './sections/DatabaseStructureSection'
import MonetizationStrategySection from './sections/MonetizationStrategySection'
import AWSDeploymentSection from './sections/AWSDeploymentSection'
import DevelopmentRoadmapSection from './sections/DevelopmentRoadmapSection'
import SuccessMetricsSection from './sections/SuccessMetricsSection'
import LoadingSpinner from '../shared/LoadingSpinner'

const sections = [
  { id: 'product-overview', title: 'Product Overview', icon: '📋' },
  { id: 'core-features', title: 'Core Features', icon: '⚡' },
  { id: 'website-pages', title: 'Website Pages', icon: '🌐' },
  { id: 'technology-stack', title: 'Technology Stack', icon: '💻' },
  { id: 'database-structure', title: 'Database Structure', icon: '🗄️' },
  { id: 'monetization-strategy', title: 'Monetization Strategy', icon: '💰' },
  { id: 'aws-deployment', title: 'AWS Deployment', icon: '☁️' },
  { id: 'development-roadmap', title: 'Development Roadmap', icon: '🗺️' },
  { id: 'success-metrics', title: 'Success Metrics', icon: '📈' },
]

const DashboardPage = () => {
  const navigate = useNavigate()

  const {
    currentBlueprint,
    setCurrentBlueprint,
    resetBlueprint,
  } = useApp()

  const { sessionId } = useSession()

  const [activeSection, setActiveSection] = useState('product-overview')
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    if (!currentBlueprint) {
      navigate('/')
    }
  }, [currentBlueprint, navigate])

  /**
   * Save Blueprint Locally
   */
  const handleSaveBlueprint = async () => {
    try {
      setIsSaving(true)

      // Get existing saved blueprints
      const existingBlueprints = JSON.parse(
        localStorage.getItem('savedBlueprints') || '[]'
      )

      // Updated blueprint
      const updatedBlueprint = {
        ...currentBlueprint,
        sessionId,
        isSaved: true,
        savedAt: new Date().toISOString(),
      }

      // Push into local storage
      existingBlueprints.push(updatedBlueprint)

      localStorage.setItem(
        'savedBlueprints',
        JSON.stringify(existingBlueprints)
      )

      // Update UI state
      setCurrentBlueprint(updatedBlueprint)

      alert('✅ Blueprint saved successfully!')
    } catch (error) {
      console.error('Save blueprint failed:', error)
      alert('❌ Failed to save blueprint.')
    } finally {
      setIsSaving(false)
    }
  }

  /**
   * Create New Blueprint
   */
  const handleNewBlueprint = () => {
    resetBlueprint()
    navigate('/')
  }

  /**
   * Sidebar Navigation Scroll
   */
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)

    const element = document.getElementById(sectionId)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  /**
   * Loading State
   */
  if (!currentBlueprint) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050816]">
        <LoadingSpinner message="Loading blueprint..." />
      </div>
    )
  }

  const analysis = currentBlueprint.generatedAnalysis

  return (
    <div className="min-h-screen bg-[#050816] flex">
      {/* Sidebar */}
      <Sidebar
        sections={sections}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Toolbar */}
        <Toolbar
          blueprint={currentBlueprint}
          onSave={handleSaveBlueprint}
          onNew={handleNewBlueprint}
          isSaving={isSaving}
        />

        {/* Dashboard Content */}
        <div className="p-8 space-y-8">
          {/* Hero */}
          <HeroSummaryCard blueprint={currentBlueprint} />

          {/* Sections Grid */}
          <div className="dashboard-grid">
            <div id="product-overview">
              <ProductOverviewSection
                data={analysis.productOverview}
              />
            </div>

            <div id="core-features">
              <CoreFeaturesSection
                data={analysis.coreFeatures}
              />
            </div>

            <div id="website-pages">
              <WebsitePagesSection
                data={analysis.websitePages}
              />
            </div>

            <div id="technology-stack">
              <TechnologyStackSection
                data={analysis.technologyStack}
              />
            </div>

            <div id="database-structure">
              <DatabaseStructureSection
                data={analysis.databaseStructure}
              />
            </div>

            <div id="monetization-strategy">
              <MonetizationStrategySection
                data={analysis.monetizationStrategy}
              />
            </div>

            <div id="aws-deployment">
              <AWSDeploymentSection
                data={analysis.awsDeploymentPlan}
              />
            </div>

            <div id="development-roadmap">
              <DevelopmentRoadmapSection
                data={analysis.developmentRoadmap}
              />
            </div>

            <div id="success-metrics">
              <SuccessMetricsSection
                data={analysis.successMetrics}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage