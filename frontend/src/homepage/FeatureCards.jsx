import Card from '../shared/Card'

const features = [
  {
    icon: '🤖',
    title: 'AI-Powered Analysis',
    description: 'Advanced AI algorithms analyze your startup idea and generate intelligent recommendations tailored to your industry and target market.',
  },
  {
    icon: '📊',
    title: 'Comprehensive Blueprint',
    description: 'Get a complete startup blueprint including product overview, tech stack, database design, monetization strategy, and development roadmap.',
  },
  {
    icon: '⚡',
    title: 'Instant Results',
    description: 'Receive your detailed startup blueprint in seconds. No waiting, no complexity - just actionable insights to launch your business.',
  },
]

const FeatureCards = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
        Why Choose LaunchPilot AI?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} hover padding="large" className="text-center">
            <div className="text-5xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-100">
              {feature.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default FeatureCards
