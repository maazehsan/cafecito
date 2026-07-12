import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../context/LangContext'
import Logo from './Logo'
import LanguageToggle from './LanguageToggle'
import { MenuIcon, CloseIcon } from './icons'

const sectionKeys = ['ritual', 'menu', 'spotlight', 'gallery', 'visit']

export default function Nav() {
  const { t, dir } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const scrollToSection = (key) => {
    const target = document.getElementById(key)
    if (!target) return

    setOpen(false)
    requestAnimationFrame(() => {
      const headerOffset = window.innerWidth >= 1024 ? 96 : 72
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset
      window.scrollTo({ top: targetTop, behavior: 'smooth' })
    })
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open
  const textTone = solid ? 'text-espresso-dark' : 'text-cream'

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        solid ? 'bg-cream/95 backdrop-blur shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#top" aria-label="Back to top">
          <Logo size="sm" />
        </a>

        <nav className="hidden lg:flex items-center gap-8 font-badge text-sm" dir={dir}>
          {sectionKeys.map((key) => (
            <a key={key} href={`#${key}`} className={`transition-colors hover:text-terracotta ${textTone}`}>
              {t.nav[key]}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LanguageToggle light={!solid} />
        </div>

        <button
          type="button"
          className={`lg:hidden relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-md transition-colors ${
            solid
              ? 'bg-espresso-dark text-cream border-brass/35'
              : 'bg-espresso-dark/35 text-cream border-cream/20'
          }`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-cream border-t border-brass/30"
          >
            <nav
              className="flex flex-col px-6 py-6 gap-5 font-badge text-base text-espresso-dark"
              dir={dir}
            >
              {sectionKeys.map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  onClick={(event) => {
                    event.preventDefault()
                    scrollToSection(key)
                  }}
                >
                  {t.nav[key]}
                </a>
              ))}
              <LanguageToggle />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
