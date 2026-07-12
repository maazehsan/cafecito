// Each slide's `theme` picks the CSS variable used for its full-bleed
// background, matching the brief: green for matcha, blue for blue mojito,
// red/terracotta for strawberry, espresso-dark for the coffee shot.
import pic9 from '../assets/pic9.jpeg'
import pic5 from '../assets/pic5.jpeg'
import pic8 from '../assets/pic8.jpeg'
import pic4 from '../assets/pic4.jpeg'

export const spotlightDrinks = [
  {
    id: 's1',
    en: 'Matcha Cooler',
    ar: 'كولر الماتشا',
    tagline_en: 'Green, cold, faster than your alarm.',
    tagline_ar: 'أخضر، بارد، أسرع من المنبه.',
    theme: 'palm',
    themeVar: '--palm-green',
    img: pic9,
  },
  {
    id: 's2',
    en: 'Blue Mojito',
    ar: 'موهيتو أزرق',
    tagline_en: "The bluest thing in Jeddah that isn't the sea.",
    tagline_ar: 'أزرق يضاهي لون البحر في جدة.',
    theme: 'lagoon',
    themeVar: '--lagoon-blue',
    img: pic5,
  },
  {
    id: 's3',
    en: 'Strawberry Mojito',
    ar: 'موهيتو بالفراولة',
    tagline_en: 'Sweet, tart, gone in six sips.',
    tagline_ar: 'حلو، حامض، ينتهي خلال ست رشفات.',
    theme: 'terracotta',
    themeVar: '--terracotta',
    img: pic8,
  },
  {
    id: 's4',
    en: 'Cafecito Shot',
    ar: 'شوت كافيسيتو',
    tagline_en: 'Small cup. Serious business.',
    tagline_ar: 'كوب صغير. جدية كبيرة.',
    theme: 'espresso',
    themeVar: '--espresso-brown',
    img: pic4,
  },
]
