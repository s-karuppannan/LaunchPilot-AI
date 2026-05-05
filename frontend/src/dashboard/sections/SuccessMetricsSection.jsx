import AnalysisCard from '../AnalysisCard'

const SuccessMetricsSection = ({ data }) => {
  if (!data) return null

  return (
    <AnalysisCard title="Success Metrics & KPIs" icon="📈">
      <div className="space-y-6">
        {/* KPIs */}
        {data.kpis && Array.isArray(data.kpis) && data.kpis.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-primary-400 mb-3">Key Performance Indicators</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {data.kpis.map((kpi, index) => (
                <div
                  key={index}
                  className="glass-effect p-4 rounded-lg border border-white/10 flex items-center gap-3"
                >
                  <span className="text-2xl">📊</span>
                  <span className="text-gray-200">{kpi}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Analytics */}
        {data.analytics && Array.isArray(data.analytics) && data.analytics.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-primary-400 mb-3">Analytics & Tracking</h3>
            <div className="space-y-2">
              {data.analytics.map((analytic, index) => (
                <div
                  key={index}
                  className="glass-effect p-3 rounded-lg border border-white/10 flex items-center gap-3"
                >
                  <span className="text-xl">📉</span>
                  <span className="text-gray-200 text-sm">{analytic}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Measurement Strategy */}
        {data.measurement && (
          <div>
            <h3 className="text-lg font-semibold text-primary-400 mb-2">Measurement Strategy</h3>
            <p className="text-gray-300 leading-relaxed">{data.measurement}</p>
          </div>
        )}
      </div>
    </AnalysisCard>
  )
}

export default SuccessMetricsSection
