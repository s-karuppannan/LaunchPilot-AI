const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 pt-20 pb-12 text-center">
      <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-glow">
        <span className="gradient-text">LaunchPilot AI</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Transform your startup idea into a complete structured launch blueprint
        <br />
        <span className="text-primary-400">Powered by intelligent AI analysis</span>
      </p>
      <div className="mt-8 flex items-center justify-center gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span>AI-Powered</span>
        </div>
        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
          <span>Instant Analysis</span>
        </div>
        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
          <span>Comprehensive Blueprint</span>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
