const Sidebar = ({ sections, activeSection, onSectionClick }) => {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 glass-effect border-r border-white/10 p-6 overflow-y-auto">
      {/* Logo */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold gradient-text">LaunchPilot AI</h2>
        <p className="text-xs text-gray-500 mt-1">Startup Blueprint</p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionClick(section.id)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
              activeSection === section.id
                ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
            }`}
          >
            <span className="text-xl">{section.icon}</span>
            <span className="text-sm font-medium">{section.title}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
