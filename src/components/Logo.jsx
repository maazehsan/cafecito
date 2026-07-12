import logoImage from '../assets/logo.png'

const sizes = {
  sm: {
    ring: 'w-14 h-14',
  },
  lg: {
    ring: 'w-40 h-40 md:w-48 md:h-48',
  },
}

export default function Logo({ size = 'sm', className = '' }) {
  const s = sizes[size]
  return (
    <div className={`relative overflow-hidden rounded-full bg-cream/95 ${s.ring} ${className}`}>
      <img src={logoImage} alt="" aria-hidden="true" className="h-full w-full object-contain p-1.5 md:p-2" />
    </div>
  )
}
