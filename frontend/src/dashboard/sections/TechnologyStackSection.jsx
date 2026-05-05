import AnalysisCard from '../AnalysisCard'

const TechnologyStackSection = ({ data }) => {
  if (!data) return null

  const categories = [
    { key: 'frontend', label: 'Frontend', icon: '🎨' },
    { key: 'backend', label: 'Backend', icon: '⚙️' },
    { key: 'database', label: 'Database', icon: '🗄️' },
    { key: 'infrastructure', label: 'Infrastructure', icon: '☁️' },
    { key: 'tools', label: 'Tools & Services', icon: '🛠️' },
  ]

  return (
    <AnalysisCard title="Technology Stack" icon="💻">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => {
          const items = data[category.key]
          if (!items || !Array.isArray(items) || items.length === 0) return null

          return (
            <div key={category.key} className="glass-effect p-4 rounded-lg border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-gray-100">{category.label}</h3>
              </div>
              <ul className="space-y-2">
                {items.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </AnalysisCard>
  )
}

export default TechnologyStackSection
