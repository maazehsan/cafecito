import { motion, useReducedMotion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import Logo from './Logo'
import { SteamWisp } from './icons'

const seamFrom = 'polygon(0% 0%, 57% 0%, 43% 100%, 0% 100%)'
const seamTo = 'polygon(0% 0%, 61% 0%, 39% 100%, 0% 100%)'
const easeOut = [0.22, 1, 0.36, 1]

function SteamCluster({ className = '' }) {
  return (
    <div className={`flex items-end gap-3 ${className}`} aria-hidden="true">
      <SteamWisp className="w-4 h-9 text-cream/50 animate-steam1" />
      <SteamWisp className="w-4 h-12 text-cream/60 animate-steam2" />
      <SteamWisp className="w-4 h-9 text-cream/50 animate-steam3" />
    </div>
  )
}

function CoffeeContent({ copy, dir, delay = 0, align = 'text-left' }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      dir={dir}
      className={`max-w-md lg:max-w-[34rem] ${align}`}
      initial={{ opacity: 0, y: reduce ? 0 : 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: easeOut }}
    >
      <SteamCluster className="mb-3" />
      <p
        className="font-badge text-cream text-sm md:text-base mb-3"
        style={{ textShadow: '0 1px 4px rgba(0,0,0,0.65)' }}
      >
        {copy.eyebrow}
      </p>
      <h1
        className="font-display text-cream text-4xl sm:text-5xl xl:text-6xl leading-[0.95] whitespace-pre-line mb-5"
        style={{ textWrap: 'balance' }}
      >
        {copy.headline}
      </h1>
      <p className="font-body text-cream text-base md:text-lg mb-7 max-w-sm" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
        {copy.sub}
      </p>
      <a
        href="#menu"
        className="inline-flex items-center gap-2 font-badge text-sm border border-brass text-cream px-6 py-3 rounded-full hover:bg-brass hover:text-espresso-dark transition-colors"
      >
        {copy.cta}
      </a>
    </motion.div>
  )
}

function TropicalContent({ copy, dir, delay = 0, align = 'text-right' }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      dir={dir}
      className={`max-w-md lg:max-w-[34rem] ${align}`}
      initial={{ opacity: 0, y: reduce ? 0 : 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: easeOut }}
    >
      <p className="font-badge text-espresso-dark/70 text-sm md:text-base mb-3">{copy.eyebrow}</p>
      <h1
        className="font-display text-cream text-4xl sm:text-5xl xl:text-6xl leading-[0.95] whitespace-pre-line mb-5"
        style={{ textShadow: '0 2px 20px rgba(44,24,16,0.28)', textWrap: 'balance' }}
      >
        {copy.headline}
      </h1>
      <p className="font-body text-cream/90 text-base md:text-lg mb-7 max-w-sm lg:ms-auto">{copy.sub}</p>
      <a
        href="#menu"
        className="inline-flex items-center gap-2 font-badge text-sm border border-cream/70 text-cream px-6 py-3 rounded-full hover:bg-cream hover:text-palm transition-colors"
      >
        {copy.cta}
      </a>
    </motion.div>
  )
}

export default function SplitHero() {
  const { t, dir } = useLang()
  const reduce = useReducedMotion()
  const hero = t.hero
  const isRtl = dir === 'rtl'

  return (
    <section id="top" className="relative w-full overflow-hidden bg-espresso-dark">
      {/* ---------- Desktop / tablet: diagonal split ---------- */}
      <div className="hidden lg:block relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-lagoon via-lagoon-light to-palm bg-no-repeat [background-size:200%_200%] animate-gradientPan" />

        <div className="absolute inset-y-0 right-0 flex items-center justify-end w-[44%] pr-16 xl:pr-24">
          <div className="w-full">
            <TropicalContent copy={hero.tropical} dir={dir} delay={0.5} align={isRtl ? 'text-right' : 'text-right'} />
          </div>
        </div>

        <motion.div
          className="absolute inset-0 bg-espresso-dark"
          animate={reduce ? undefined : { clipPath: [seamFrom, seamTo, seamFrom] }}
          style={{ clipPath: seamFrom }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="absolute inset-y-0 left-0 flex items-center w-[44%] pl-16 xl:pl-24">
            <div className="w-full">
              <CoffeeContent copy={hero.coffee} dir={dir} delay={0.2} align="text-left" />
            </div>
          </div>
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <Logo size="lg" className="pointer-events-auto" />
        </div>

        <div className="absolute bottom-8 inset-x-0 flex flex-col items-center gap-2 z-10 text-cream/80">
          <span className="font-badge text-xs">{hero.scrollHint}</span>
          <motion.span
            className="block w-px h-8 bg-cream/50"
            animate={reduce ? undefined : { scaleY: [1, 0.4, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
          />
        </div>
      </div>

      {/* ---------- Mobile / tablet-portrait: stacked ---------- */}
      <div className="lg:hidden relative">
        <div
          className="relative bg-espresso-dark overflow-hidden flex items-center"
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 86%, 0 100%)', minHeight: '62vh' }}
        >
          <div className="px-6 sm:px-10 pt-20 pb-16 w-full">
            <CoffeeContent copy={hero.coffee} dir={dir} delay={0.15} />
          </div>
        </div>

        <div
          className="relative -mt-[7vh] bg-gradient-to-br from-lagoon via-lagoon-light to-palm bg-no-repeat [background-size:200%_200%] animate-gradientPan overflow-hidden flex items-center"
          style={{ minHeight: '62vh' }}
        >
          <div className="px-6 sm:px-10 pt-14 pb-20 w-full">
            <TropicalContent copy={hero.tropical} dir={dir} delay={0.4} align="text-left" />
          </div>
        </div>

        <div className="flex justify-center py-4 px-6 sm:px-10 pointer-events-none">
          <Logo size="sm" className="pointer-events-auto scale-90" />
        </div>
      </div>
    </section>
  )
}
