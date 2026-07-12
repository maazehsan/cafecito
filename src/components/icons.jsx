// All icons inherit color via `currentColor`, so a parent's text-* class
// controls their color. Palm trees are solid silhouettes (the bold brand
// mark); bean / mint / lime / citrus accents are fine line-art (garnish
// details); UI chrome (chevrons, menu, close) is plain and quiet on purpose.

export function PalmIcon({ className = '' }) {
  const angles = [-72, -43, -15, 13, 41, 69]
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" aria-hidden="true">
      <path d="M49 97c-1.5-23-5-38-2.5-59" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
      {angles.map((a) => (
        <ellipse key={a} cx="72" cy="31" rx="23" ry="6.5" transform={`rotate(${a} 47 31)`} />
      ))}
      <circle cx="47" cy="31" r="4" />
    </svg>
  )
}

export function BeanIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M50 6C25 6 8 30 8 54c0 24 17 40 42 40s42-16 42-40C92 30 75 6 50 6z" />
      <path d="M50 14C36 24 30 40 30 54c0 14 6 28 20 38" />
    </svg>
  )
}

export function MintLeafIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M48 91C21 79 10 48 23 17c33 2 57 24 61 52 3 15-14 22-36 22Z" />
      <path d="M40 24c6 20 8 46 6 67" />
      <path d="M42 36 27 30M44 50 26 47M45 64 29 65M46 77 33 80" />
      <path d="M42 36 58 28M44 50 62 44M45 64 60 66" />
    </svg>
  )
}

export function LimeWheelIcon({ className = '' }) {
  const angles = [0, 45, 90, 135, 180, 225, 270, 315]
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="42" />
      <circle cx="50" cy="50" r="29" strokeWidth="2.5" />
      {angles.map((a) => (
        <line key={a} x1="50" y1="50" x2="50" y2="21" transform={`rotate(${a} 50 50)`} />
      ))}
    </svg>
  )
}

export function Flourish({ className = '' }) {
  return (
    <svg
      viewBox="0 0 200 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M10 28C40 6 60 6 90 22" />
      <path d="M190 28C160 6 140 6 110 22" />
      <path d="M100 4v10M100 24v10" />
      <circle cx="100" cy="18" r="4.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function SteamWisp({ className = '' }) {
  return (
    <svg viewBox="0 0 24 60" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
      <path d="M12 58c6-8-6-14 0-22s-6-14 0-22" />
    </svg>
  )
}

export function ChevronLeft({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 5l-7 7 7 7" />
    </svg>
  )
}

export function ChevronRight({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 5l7 7-7 7" />
    </svg>
  )
}

export function MenuIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" aria-hidden="true">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  )
}

export function CloseIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function InstagramGlyph({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function WhatsAppGlyph({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21c-1.6 0-3.1-.4-4.4-1.2L3 21l1.3-4.4A8.9 8.9 0 1 1 12 21Z" />
      <path d="M8.7 9.6c0-.6.4-1.1 1-1.1h.5c.3 0 .5.2.6.5l.5 1.4c.1.3 0 .6-.2.8l-.5.5c.5 1.1 1.4 2 2.5 2.5l.5-.5c.2-.2.5-.3.8-.2l1.4.5c.3.1.5.3.5.6v.5c0 .6-.5 1-1.1 1-3.3 0-6.5-3.2-6.5-6.5Z" />
    </svg>
  )
}

export function PinIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s7-7.5 7-12a7 7 0 1 0-14 0c0 4.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}
