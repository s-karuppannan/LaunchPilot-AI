import AnalysisCard from '../AnalysisCard'

const DatabaseStructureSection = ({ data }) => {
  if (!data) return null

  return (
    <AnalysisCard title="Database Structure" icon="🗄️">
      <div className="space-y-6">
        {/* Models */}
        {data.models && Array.isArray(data.models) && data.models.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-primary-400 mb-4">Data Models</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.models.map((model, index) => (
                <div
                  key={index}
                  className="glass-effect p-4 rounded-lg border border-white/10"
                >
                  <h4 className="text-md font-semibold text-gray-100 mb-2">{model.name}</h4>
                  <p className="text-xs text-gray-500 mb-3">{model.description}</p>
                  {model.fields && Array.isArray(model.fields) && (
                    <ul className="space-y-1">
                      {model.fields.map((field, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                          <span className="w-1 h-1 bg-accent-500 rounded-full"></span>
                          <span className="text-gray-300">{field}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Relationships */}
        {data.relationships && Array.isArray(data.relationships) && data.relationships.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-primary-400 mb-4">Relationships</h3>
            <div className="space-y-2">
              {data.relationships.map((rel, index) => (
                <div
                  key={index}
                  className="glass-effect p-3 rounded-lg border border-white/10 flex items-center gap-3"
                >
                  <span className="text-gray-300">{rel.from}</span>
                  <span className="text-primary-400">→</span>
                  <span className="text-gray-300">{rel.to}</span>
                  <span className="text-xs text-gray-500 ml-auto">({rel.type})</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </AnalysisCard>
  )
}

export default DatabaseStructureSection
