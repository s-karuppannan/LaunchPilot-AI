import AnalysisCard from '../AnalysisCard'

const ProductOverviewSection = ({ data }) => {
  if (!data) return null

  return (
    <AnalysisCard title="Product Overview" icon="📋">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-primary-400 mb-2">Summary</h3>
          <p className="text-gray-300 leading-relaxed">{data.summary}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary-400 mb-2">Value Proposition</h3>
          <p className="text-gray-300 leading-relaxed">{data.valueProp}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary-400 mb-2">Problem & Solution</h3>
          <p className="text-gray-300 leading-relaxed">{data.problemSolution}</p>
        </div>
      </div>
    </AnalysisCard>
  )
}

export default ProductOverviewSection
