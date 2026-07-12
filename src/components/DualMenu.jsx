import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { Reveal } from './Reveal'
import Divider from './Divider'
import { coffeeMenu, mojitoMenu } from '../data/menuData'
import { BeanIcon, MintLeafIcon, LimeWheelIcon, PalmIcon } from './icons'

const garnishIcon = { bean: BeanIcon, mint: MintLeafIcon, lime: LimeWheelIcon }

// Menu items are always shown bilingually (EN + AR together) regardless of
// the site-wide language toggle — that mirrors how the brand's real menu
// boards work. The toggle affects the surrounding labels/headings instead.
function MenuItem({ item, tone }) {
  const Garnish = garnishIcon[item.garnish]
  const reduce = useReducedMotion()
  return (
    <motion.li
      variants={{
        hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 14 },
        show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.5 } },
      }}
      whileHover={{ rotate: tone === 'coffee' ? -1.5 : 1.5, y: -3 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      className={`group relative flex items-start justify-between gap-4 border-b py-4 ${
        tone === 'coffee' ? 'border-cream/15' : 'border-cream/25'
      }`}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="font-display text-lg md:text-xl">{item.en}</span>
          <span className="font-arabic text-sm opacity-70" dir="rtl" lang="ar">
            {item.ar}
          </span>
        </div>
        <p className="font-body text-sm opacity-60 mt-1">{item.note}</p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <Garnish
          className={`w-5 h-5 opacity-0 -translate-y-1 group-hover:opacity-70 group-hover:translate-y-0 transition-all duration-300 ${
            tone === 'coffee' ? 'text-brass' : 'text-cream'
          }`}
        />
        <span className="font-badge text-sm whitespace-nowrap">{item.price} SAR</span>
      </div>
    </motion.li>
  )
}

function MenuColumn({ label, items, tone }) {
  const isCoffee = tone === 'coffee'
  const reduce = useReducedMotion()
  return (
    <div
      className={`flex-1 rounded-3xl p-7 md:p-10 ${
        isCoffee ? 'bg-espresso-dark text-cream' : 'bg-gradient-to-b from-lagoon to-palm text-cream'
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-2xl md:text-3xl">{label}</h3>
        {isCoffee ? <BeanIcon className="w-7 h-7 text-brass" /> : <PalmIcon className="w-7 h-7 text-cream/90" />}
      </div>
      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : 0.07 } } }}
      >
        {items.map((item) => (
          <MenuItem key={item.id} item={item} tone={tone} />
        ))}
      </motion.ul>
    </div>
  )
}

export default function DualMenu() {
  const { t, dir } = useLang()
  const [tab, setTab] = useState('coffee')

  return (
    <section id="menu" className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal className="mb-10 md:mb-14">
          <p className="font-badge text-terracotta text-sm mb-3">{t.menu.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl text-espresso-dark whitespace-pre-line mb-4">
            {t.menu.title}
          </h2>
          <p className="font-body text-espresso-dark/70 max-w-md">{t.menu.mocktailNote}</p>
          <Divider className="mt-8 max-w-xs" />
        </Reveal>

        {/* Mobile: segmented toggle, one column visible at a time */}
        <div className="md:hidden">
          <div className="inline-flex rounded-full border border-espresso-dark/20 p-1 mb-6" dir={dir}>
            {['coffee', 'mojito'].map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setTab(key)}
                className={`px-5 py-2 rounded-full font-badge text-sm transition-colors ${
                  tab === key ? 'bg-espresso-dark text-cream' : 'text-espresso-dark/60'
                }`}
              >
                {t.menu.toggle[key]}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, x: tab === 'coffee' ? -12 : 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: tab === 'coffee' ? 12 : -12 }}
              transition={{ duration: 0.3 }}
            >
              {tab === 'coffee' ? (
                <MenuColumn label={t.menu.coffeeLabel} items={coffeeMenu} tone="coffee" />
              ) : (
                <MenuColumn label={t.menu.mojitoLabel} items={mojitoMenu} tone="mojito" />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop: side by side */}
        <div className="hidden md:flex gap-8">
          <MenuColumn label={t.menu.coffeeLabel} items={coffeeMenu} tone="coffee" />
          <MenuColumn label={t.menu.mojitoLabel} items={mojitoMenu} tone="mojito" />
        </div>
      </div>
    </section>
  )
}
