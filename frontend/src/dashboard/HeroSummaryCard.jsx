import Card from '../shared/Card'

const HeroSummaryCard = ({ blueprint }) => {
  return (
    <Card
      padding="large"
      className="relative border border-blue-400/10 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-52 h-52 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="flex-1">
          <p className="uppercase tracking-[4px] text-xs text-blue-300 mb-3">
            AI Generated Strategic Launch Blueprint
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-5 bg-gradient-to-r from-blue-300 via-cyan-200 to-purple-300 bg-clip-text text-transparent">
            {blueprint.startupIdea}
          </h1>

          <p className="text-gray-300 max-w-3xl leading-7 text-[15px] mb-8">
            Premium AI-generated startup planning architecture with scalable
            deployment recommendations, intelligent business workflows, and
            investor-oriented launch analysis.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Target Audience</p>
              <p className="text-white font-semibold">{blueprint.targetAudience}</p>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Budget Range</p>
              <p className="text-white font-semibold">{blueprint.budgetRange}</p>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Platform Type</p>
              <p className="text-white font-semibold">{blueprint.platformType}</p>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Launch Readiness</p>
              <p className="text-green-400 font-semibold">92%</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center min-w-[170px]">
          <div className="w-32 h-32 rounded-full border-[10px] border-blue-500/20 flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10 shadow-[0_0_50px_rgba(59,130,246,0.12)]">
            <span className="text-3xl font-bold text-white">A+</span>
          </div>
          <p className="text-sm text-blue-300 mt-4 tracking-wide">AI CONFIDENCE SCORE</p>
        </div>
      </div>
    </Card>
  )
}

export default HeroSummaryCard