import { LangProvider, useLang } from './context/LangContext'
import Nav from './components/Nav'
import SplitHero from './components/SplitHero'
import CafecitoRitual from './components/CafecitoRitual'
import DualMenu from './components/DualMenu'
import SpotlightCarousel from './components/SpotlightCarousel'
import BrandGallery from './components/BrandGallery'
import LocationVibe from './components/LocationVibe'
import Footer from './components/Footer'

function SkipLink() {
  const { t } = useLang()
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-brass focus:text-espresso-dark focus:px-4 focus:py-2 focus:rounded-full font-badge text-sm"
    >
      {t.skipLink}
    </a>
  )
}

function Page() {
  const { dir } = useLang()
  return (
    <div dir={dir} className="min-h-screen bg-cream">
      <SkipLink />
      <Nav />
      <main id="main-content">
        <SplitHero />
        <CafecitoRitual />
        <DualMenu />
        <SpotlightCarousel />
        <BrandGallery />
        <LocationVibe />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LangProvider>
      <Page />
    </LangProvider>
  )
}
