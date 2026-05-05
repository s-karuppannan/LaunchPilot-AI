import AnalysisCard from '../AnalysisCard'

const DevelopmentRoadmapSection = ({ data }) => {
  if (!data) return null

  return (
    <AnalysisCard title="Development Roadmap" icon="🗺️">
      <div className="space-y-6">
        {/* Timeline */}
        {data.timeline && (
          <div className="glass-effect p-4 rounded-lg border border-primary-500/20 bg-primary-500/5">
            <h3 className="text-lg font-semibold text-primary-400 mb-2">Estimated Timeline</h3>
            <p className="text-gray-200 text-xl font-semibold">{data.timeline}</p>
          </div>
        )}

        {/* Phases */}
        {data.phases && Array.isArray(data.phases) && data.phases.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-primary-400 mb-4">Development Phases</h3>
            <div className="space-y-4">
              {data.phases.map((phase, index) => (
                <div
                  key={index}
                  className="glass-effect p-4 rounded-lg border border-white/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center border border-primary-500/30">
                      <span className="text-primary-400 font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-100 mb-2">{phase.name}</h4>
                      <p className="text-gray-400 text-sm mb-3">{phase.description}</p>
                      {phase.duration && (
                        <p className="text-xs text-gray-500">Duration: {phase.duration}</p>
                      )}
                      {phase.deliverables && Array.isArray(phase.deliverables) && (
                        <div className="mt-3">
                          <p className="text-xs text-gray-500 mb-2">Deliverables:</p>
                          <ul className="space-y-1">
                            {phase.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="text-sm text-gray-300 flex items-center gap-2">
                                <span className="w-1 h-1 bg-accent-500 rounded-full"></span>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Milestones */}
        {data.milestones && Array.isArray(data.milestones) && data.milestones.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-primary-400 mb-3">Key Milestones</h3>
            <div className="space-y-2">
              {data.milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="glass-effect p-3 rounded-lg border border-white/10 flex items-center gap-3"
                >
                  <span className="text-xl">🎯</span>
                  <span className="text-gray-200">{milestone}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </AnalysisCard>
  )
}

export default DevelopmentRoadmapSection
