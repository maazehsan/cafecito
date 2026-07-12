import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { Reveal } from './Reveal'
import Divider from './Divider'
import { SteamWisp } from './icons'

function RitualCard({ step, dir }) {
  return (
    <div
      dir={dir}
      className="relative shrink-0 w-[78vw] sm:w-[400px] md:w-[420px] bg-cream border border-espresso-dark/10 rounded-2xl p-8 md:p-10 flex flex-col justify-between h-[360px] md:h-[400px] shadow-sm"
    >
      <div>
        <span className="font-display text-5xl md:text-6xl text-terracotta/25 leading-none">{step.num}</span>
        <h3 className="font-display text-2xl md:text-3xl text-espresso-dark mt-4 mb-3">{step.title}</h3>
        <p className="font-body text-espresso-dark/75 leading-relaxed">{step.body}</p>
      </div>
      <SteamWisp className="w-5 h-14 text-terracotta/25 self-end animate-steam2" aria-hidden="true" />
    </div>
  )
}

export default function CafecitoRitual() {
  const { t, dir } = useLang()
  const reduce = useReducedMotion()
  const steps = t.ritual.steps

  const sectionRef = useRef(null)
  const trackRef = useRef(null)
  const [scrollDistance, setScrollDistance] = useState(0)

  // Measure real pixel widths rather than guessing a translateX percentage —
  // card widths mix vw and px units, so a hardcoded % would drift.
  useEffect(() => {
    if (reduce) return
    const measure = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth
        setScrollDistance(Math.max(trackWidth - window.innerWidth, 0))
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [reduce, steps.length])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance])

  return (
    <section id="ritual" className="relative bg-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-24 pb-10 md:pb-0">
        <Reveal>
          <p className="font-badge text-terracotta text-sm mb-3">{t.ritual.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl text-espresso-dark whitespace-pre-line mb-4">
            {t.ritual.title}
          </h2>
          <p className="font-body text-espresso-dark/70 max-w-lg mb-8 md:mb-14">{t.ritual.intro}</p>
        </Reveal>
        <Divider className="mb-10 md:hidden" />
      </div>

      {reduce ? (
        <div className="px-6 md:px-10 pb-20">
          <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {steps.map((step) => (
              <RitualCard key={step.num} step={step} dir={dir} />
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Mobile / tablet: simple swipe row, no scroll-jacking */}
          <div className="md:hidden flex gap-5 overflow-x-auto scrollbar-hide px-6 pb-20 snap-x snap-mandatory">
            {steps.map((step) => (
              <div key={step.num} className="snap-center">
                <RitualCard step={step} dir={dir} />
              </div>
            ))}
            <div className="w-1 shrink-0" aria-hidden="true" />
          </div>

          {/* Desktop: pinned section, vertical scroll drives horizontal reveal */}
          <div ref={sectionRef} className="hidden md:block relative" style={{ height: '260vh' }}>
            <div className="sticky top-0 h-screen overflow-hidden flex items-center">
              <motion.div ref={trackRef} style={{ x }} className="flex gap-8 pl-[8vw] pr-[8vw]">
                {steps.map((step) => (
                  <RitualCard key={step.num} step={step} dir={dir} />
                ))}
              </motion.div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}
