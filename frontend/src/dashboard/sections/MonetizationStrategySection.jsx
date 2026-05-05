import AnalysisCard from '../AnalysisCard'

const MonetizationStrategySection = ({ data }) => {
  if (!data) return null

  return (
    <AnalysisCard title="Monetization Strategy" icon="💰">
      <div className="space-y-6">
        {/* Revenue Models */}
        {data.revenueModels && Array.isArray(data.revenueModels) && data.revenueModels.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-primary-400 mb-3">Revenue Models</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {data.revenueModels.map((model, index) => (
                <div
                  key={index}
                  className="glass-effect p-4 rounded-lg border border-white/10 flex items-center gap-3"
                >
                  <span className="text-2xl">💵</span>
                  <span className="text-gray-200">{model}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Strategy */}
        {data.pricingStrategy && (
          <div>
            <h3 className="text-lg font-semibold text-primary-400 mb-2">Pricing Strategy</h3>
            <p className="text-gray-300 leading-relaxed">{data.pricingStrategy}</p>
          </div>
        )}

        {/* Business Model */}
        {data.businessModel && (
          <div>
            <h3 className="text-lg font-semibold text-primary-400 mb-2">Business Model</h3>
            <p className="text-gray-300 leading-relaxed">{data.businessModel}</p>
          </div>
        )}
      </div>
    </AnalysisCard>
  )
}

export default MonetizationStrategySection
