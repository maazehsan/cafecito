import { useLang } from '../context/LangContext'
import Logo from './Logo'
import Divider from './Divider'
import { PalmIcon, InstagramGlyph, WhatsAppGlyph } from './icons'

export default function Footer() {
  const { t, dir } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-espresso-dark text-cream overflow-hidden pt-16 pb-8">


      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 mb-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo size="sm" />
            <p className="font-display text-2xl md:text-3xl text-center md:text-left" dir={dir}>
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4" dir={dir}>
            <p className="font-badge text-sm text-cream/60">{t.footer.social}</p>
            <div className="flex items-center gap-4">
              {/* Placeholder links — swap for the client's real handles/number */}
              <a
                href="https://instagram.com/cafecitocuban"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-cream/25 flex items-center justify-center hover:border-brass hover:text-brass transition-colors"
              >
                <InstagramGlyph className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/966558899379"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full border border-cream/25 flex items-center justify-center hover:border-brass hover:text-brass transition-colors"
              >
                <WhatsAppGlyph className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <Divider className="mb-6" />

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-3 text-xs text-cream/40 font-body">
          <p>© {year} Cafecito Cuban Cafe. All rights reserved.</p>
          {/* Small agency credit — easy one-line removal if the client contract doesn't include it. */}
          <p>{t.footer.credit}</p>
        </div>
      </div>
    </footer>
  )
}
