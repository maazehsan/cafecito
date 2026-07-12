import { useLang } from '../context/LangContext'

export default function LanguageToggle({ light = false }) {
  const { lang, toggle } = useLang()
  const base = light ? 'border-cream/50 text-cream' : 'border-espresso-dark/30 text-espresso-dark'

  return (
    <button
      type="button"
      onClick={toggle}
      className={`relative flex items-center rounded-full border font-badge text-xs px-1 py-1 ${base} transition-colors`}
      aria-label={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <span
        className={`px-2.5 py-1 rounded-full transition-colors ${
          lang === 'en' ? 'bg-brass text-espresso-dark' : 'opacity-60'
        }`}
      >
        EN
      </span>
      <span
        className={`px-2.5 py-1 rounded-full transition-colors ${
          lang === 'ar' ? 'bg-brass text-espresso-dark' : 'opacity-60'
        }`}
      >
        AR
      </span>
    </button>
  )
}
