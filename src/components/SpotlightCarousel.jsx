import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { Reveal } from './Reveal'
import { spotlightDrinks } from '../data/spotlightData'
import { ChevronLeft, ChevronRight } from './icons'

const AUTOPLAY_MS = 3200

export default function SpotlightCarousel() {
  const { t, lang, dir } = useLang()
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)
  const len = spotlightDrinks.length

  const go = useCallback(
    (newIndex, dir2) => {
      setDirection(dir2)
      setIndex((newIndex + len) % len)
    },
    [len]
  )
  const next = useCallback(() => go(index + 1, 1), [go, index])
  const prev = useCallback(() => go(index - 1, -1), [go, index])

  useEffect(() => {
    if (reduce || paused) return
    timerRef.current = setInterval(() => {
      setDirection(1)
      setIndex((i) => (i + 1) % len)
    }, AUTOPLAY_MS)
    return () => clearInterval(timerRef.current)
  }, [reduce, paused, len])

  const drink = spotlightDrinks[index]

  const variants = {
    enter: (dir2) => ({ opacity: 0, x: dir2 > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir2) => ({ opacity: 0, x: dir2 > 0 ? -60 : 60 }),
  }

  return (
    <section id="spotlight" className="bg-espresso-dark py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 mb-10 md:mb-14">
        <Reveal>
          <p className="font-badge text-brass text-sm mb-3">{t.spotlight.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl text-cream whitespace-pre-line">{t.spotlight.title}</h2>
        </Reveal>
      </div>

      <div
        className="relative max-w-6xl mx-auto px-6 md:px-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        role="region"
        aria-roledescription="carousel"
        aria-label="Signature drinks"
      >
        <div className="relative rounded-3xl overflow-hidden h-[640px] md:h-[560px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={drink.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) next()
                else if (info.offset.x > 80) prev()
              }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
              style={{ backgroundColor: `var(${drink.themeVar})` }}
              aria-live="polite"
            >
              <div className="grid md:grid-cols-2 w-full h-full">
                <div className="order-2 md:order-1 flex flex-col justify-center px-8 md:px-12 py-10" dir={dir}>
                  <p className="font-arabic text-cream/70 text-lg mb-2" dir="rtl" lang="ar">
                    {drink.ar}
                  </p>
                  <h3 className="font-display text-cream text-5xl md:text-6xl xl:text-7xl leading-[0.92] mb-5">
                    {drink.en}
                  </h3>
                  <p className="font-body text-cream/85 text-lg max-w-xs">
                    {lang === 'ar' ? drink.tagline_ar : drink.tagline_en}
                  </p>
                </div>
                <div className="order-1 md:order-2 relative h-56 md:h-full">
                  <img
                    src={drink.img}
                    alt={`${drink.en} — placeholder, swap for real product photography`}
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable="false"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="Previous drink"
          className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-cream/90 text-espresso-dark flex items-center justify-center shadow-lg hover:bg-cream transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next drink"
          className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-cream/90 text-espresso-dark flex items-center justify-center shadow-lg hover:bg-cream transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="flex justify-center gap-2 mt-6">
          {spotlightDrinks.map((d, i) => (
            <button
              key={d.id}
              type="button"
              onClick={() => go(i, i > index ? 1 : -1)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-brass' : 'w-2 bg-cream/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
