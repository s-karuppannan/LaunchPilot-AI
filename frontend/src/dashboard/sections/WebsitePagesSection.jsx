import AnalysisCard from '../AnalysisCard'

const WebsitePagesSection = ({ data }) => {
  if (!data || !Array.isArray(data)) return null

  return (
    <AnalysisCard title="Recommended Website Pages" icon="🌐">
      <div className="space-y-4">
        {data.map((page, index) => (
          <div
            key={index}
            className="glass-effect p-4 rounded-lg border border-white/10"
          >
            <h3 className="text-lg font-semibold text-gray-100 mb-2">{page.name}</h3>
            <p className="text-gray-400 text-sm mb-3">{page.purpose}</p>
            {page.sections && page.sections.length > 0 && (
              <div>
                <p className="text-xs text-gray-500 mb-2">Key Sections:</p>
                <div className="flex flex-wrap gap-2">
                  {page.sections.map((section, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/20"
                    >
                      {section}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </AnalysisCard>
  )
}

export default WebsitePagesSection
