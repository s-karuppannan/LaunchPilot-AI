const Card = ({
  children,
  className = '',
  hover = false,
  padding = 'medium'
}) => {
  const baseStyles = `
    relative
    overflow-hidden
    rounded-[28px]
    border border-white/10
    bg-white/[0.04]
    backdrop-blur-xl
    shadow-[0_0_40px_rgba(59,130,246,0.08)]
  `

  const hoverStyles = hover
    ? `
      transition-all duration-500
      hover:-translate-y-1
      hover:shadow-[0_0_60px_rgba(139,92,246,0.18)]
      hover:border-blue-400/20
      cursor-pointer
    `
    : ''

  const paddings = {
    none: '',
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8',
  }

  return (
    <div className={`${baseStyles} ${hoverStyles} ${paddings[padding]} ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default Card