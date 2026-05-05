import Card from '../shared/Card'

const AnalysisCard = ({ icon, title, children }) => {
  return (
    <Card
      hover={true}
      className="min-h-[280px] transition-all duration-500"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-2xl border border-white/10 shadow-inner">
          {icon}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white tracking-wide">{title}</h2>
          <div className="w-12 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 mt-2 rounded-full"></div>
        </div>
      </div>

      <div className="space-y-4 text-gray-300 leading-7 text-[15px]">
        {children}
      </div>
    </Card>
  )
}

export default AnalysisCard