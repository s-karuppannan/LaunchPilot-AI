import AnalysisCard from '../AnalysisCard'

const AWSDeploymentSection = ({ data }) => {
  if (!data) return null

  return (
    <AnalysisCard title="AWS Deployment Plan" icon="☁️">
      <div className="space-y-6">
        {/* Architecture */}
        {data.architecture && (
          <div>
            <h3 className="text-lg font-semibold text-primary-400 mb-2">Architecture Overview</h3>
            <p className="text-gray-300 leading-relaxed">{data.architecture}</p>
          </div>
        )}

        {/* AWS Services */}
        {data.services && Array.isArray(data.services) && data.services.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-primary-400 mb-3">Recommended AWS Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {data.services.map((service, index) => (
                <div
                  key={index}
                  className="glass-effect p-3 rounded-lg border border-white/10 flex items-center gap-3"
                >
                  <span className="text-xl">☁️</span>
                  <span className="text-gray-200 text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Deployment Strategy */}
        {data.deploymentStrategy && (
          <div>
            <h3 className="text-lg font-semibold text-primary-400 mb-2">Deployment Strategy</h3>
            <p className="text-gray-300 leading-relaxed">{data.deploymentStrategy}</p>
          </div>
        )}
      </div>
    </AnalysisCard>
  )
}

export default AWSDeploymentSection
