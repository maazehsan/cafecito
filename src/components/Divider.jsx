import { BeanIcon, PalmIcon } from './icons'

export default function Divider({ icon = 'bean', tone = 'text-brass', className = '' }) {
  const Icon = icon === 'palm' ? PalmIcon : BeanIcon
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-brass/50" />
      <Icon className={`w-4 h-4 ${tone}`} />
      <span className="h-px flex-1 bg-brass/50" />
    </div>
  )
}
