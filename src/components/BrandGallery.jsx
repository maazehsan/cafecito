import { useLang } from '../context/LangContext'
import Divider from './Divider'
import pic1 from '../assets/pic1.jpeg'
import pic2 from '../assets/pic2.jpeg'
import pic3 from '../assets/pic3.jpeg'
import pic4 from '../assets/pic4.jpeg'
import pic6 from '../assets/pic6.jpeg'

const panelImages = [
  pic1,
  pic2,
  pic3,
  pic6,
]

function GalleryPanel({ image, tag, caption, tall, dir }) {
  const isRtl = dir === 'rtl'
  return (
    <div
      className={`relative rounded-2xl overflow-hidden group ${
        tall ? 'h-[320px] md:h-full' : 'h-[260px] md:h-full'
      }`}
    >
      <img
        src={image}
        alt={`"${tag}" — placeholder for the brand's surreal CGI-style art, swap for the client's piece`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
      <div className={`absolute inset-0 flex flex-col justify-end p-6 md:p-8 ${isRtl ? 'items-end text-right' : 'items-start text-left'}`} dir={dir}>
        <h3 className={`${isRtl ? 'font-arabic text-3xl md:text-4xl' : 'font-display text-4xl md:text-5xl'} text-cream mb-2`}>
          {tag}
        </h3>
        <p className="font-body text-cream max-w-xs">{caption}</p>
      </div>
    </div>
  )
}

export default function BrandGallery() {
  const { t, dir } = useLang()
  const panels = t.gallery.panels
  const galleryItems = panelImages.map((image, index) => ({
    image,
    panel: panels[index],
  })).filter(({ panel }) => panel)

  return (
    <section id="gallery" className="bg-cream py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-10 md:mb-14">
          <p className="font-badge text-terracotta text-sm mb-3">{t.gallery.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl text-espresso-dark mb-4">{t.gallery.title}</h2>
          <Divider className="max-w-xs mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:h-[680px] gap-6">
          {galleryItems.slice(0, 4).map(({ image, panel }, index) => (
            <div key={panel.tag}>
              <GalleryPanel image={image} tag={panel.tag} caption={panel.caption} tall={index === 0} dir={dir} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
