import AnalysisCard from '../AnalysisCard'

const CoreFeaturesSection = ({ data }) => {
  if (!data || !Array.isArray(data)) return null

  const priorityColors = {
    high: 'bg-red-500/20 text-red-400 border-red-500/30',
    medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    low: 'bg-green-500/20 text-green-400 border-green-500/30',
  }

  return (
    <AnalysisCard title="Core Features" icon="⚡">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((feature, index) => (
          <div
            key={index}
            className="glass-effect p-4 rounded-lg border border-white/10 hover:border-primary-500/30 transition-all"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-100">{feature.name}</h3>
              <span
                className={`text-xs px-2 py-1 rounded-full border ${
                  priorityColors[feature.priority] || priorityColors.medium
                }`}
              >
                {feature.priority}
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </AnalysisCard>
  )
}

export default CoreFeaturesSection
