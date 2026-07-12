// Centralized bilingual copy. Every section pulls its strings from here,
// keyed by the active language, so the EN/AR toggle only has to flip one
// piece of state (see src/context/LangContext.jsx) rather than touching
// every component individually.
//
// NOTE for launch: this Arabic copy was written to be natural and on-brand,
// but it has not been reviewed by a native speaker. Have someone fluent
// check it before it goes in front of real customers.

export const content = {
  en: {
    nav: {
      ritual: 'The Ritual',
      menu: 'The Menu',
      spotlight: 'Signatures',
      gallery: 'Gallery',
      visit: 'Visit Us',
    },
    hero: {
      coffee: {
        eyebrow: 'Est. for the serious sip',
        headline: 'Cuban Coffee,\nDone Right.',
        sub: 'Dark-roasted, pressed hard, served strong — the cafecito ritual, brought to Jeddah.',
        cta: 'Meet the coffee bar',
      },
      tropical: {
        eyebrow: 'Or take the scenic route',
        headline: 'Or Make It\na Mojito.',
        sub: 'Citrus, mint, and a lagoon-blue pour — the beach half of Cafecito.',
        cta: 'See the coolers',
      },
      scrollHint: 'Two sides, one cafe',
    },
    ritual: {
      eyebrow: 'The Cafecito Ritual',
      title: "Slow Down.\nIt's Just a Sip.",
      intro:
        "Cafecito isn't a to-go order in Havana — it's a pause, shared standing up, gone in four sips. Here's how we keep it that way.",
      steps: [
        {
          num: '01',
          title: 'The Grind',
          body: 'Dark beans, ground fine, right before the pull — no shortcuts, no pre-ground bags.',
        },
        {
          num: '02',
          title: 'The Press',
          body: 'High pressure, short shot, thick crema — the cafecito base, unapologetically strong.',
        },
        {
          num: '03',
          title: 'The Share',
          body: 'One thermos, several tiny cups — cafecito was never meant to be drunk alone.',
        },
        {
          num: '04',
          title: 'The Pause',
          body: 'Two minutes, no phone, just steam and conversation — the actual point of the ritual.',
        },
      ],
    },
    menu: {
      eyebrow: "Pick your side (or don't)",
      title: 'The Coffee Bar\n& The Mojito Bar',
      mocktailNote: 'Every mojito on this list is a mocktail — fruit, mint, soda, zero alcohol.',
      coffeeLabel: 'Coffee Bar',
      mojitoLabel: 'Mojito & Coolers',
      toggle: { coffee: 'Coffee', mojito: 'Mojito' },
    },
    spotlight: {
      eyebrow: "This week's signatures",
      title: 'Four Drinks,\nFour Moods',
    },
    gallery: {
      eyebrow: 'The Cafecito state of mind',
      title: 'Fuel Your Day',
      panels: [
        {
          tag: 'Plug In.',
          caption: "Coffee is the charger. You're the device.",
        },
        {
          tag: 'Tune Out.',
          caption: 'Bean-shaped headphones. Zero notifications.',
        },
        {
          tag: 'Power Up.',
          caption: 'From zero to fully caffeinated in one shot.',
        },
        {
          tag: 'Straight to Your Brain.',
          caption: 'Coffee, delivered direct to the system.',
        },
      ],
    },
    location: {
      eyebrow: 'Find the palm trees',
      title: "Jeddah's Beach Break,\nIndoors",
      neighborhood: 'Al Shatea District — near the Corniche',
      blurb:
        "Palm-slat ceilings, terracotta tile, and a sound system that never plays anything you'd skip. Half the room feels like an espresso bar in Havana; the other half like a pool deck in July.",
      addressNote: '(Exact pin drops once the client confirms the final unit number.)',
      boarding: {
        from: 'JEDDAH',
        to: 'CAFECITO',
        gateLabel: 'Table',
        gateValue: 'Any',
        seatLabel: 'Vibe',
        seatValue: 'Beach + Bar',
        boardingLabel: 'Boarding',
        boardingValue: 'Always',
      },
      hoursLabel: 'Open daily',
      hours: [
        { days: 'Sat – Wed', time: '7:00 AM – 11:00 PM' },
        { days: 'Thu – Fri', time: '7:00 AM – 1:00 AM' },
      ],
    },
    footer: {
      tagline: 'Cuban Soul. Jeddah Soil.',
      social: 'Follow the ritual',
      credit: 'Designed & built by DevNautics',
    },
    skipLink: 'Skip to content',
  },

  ar: {
    nav: {
      ritual: 'طقوسنا',
      menu: 'قائمتنا',
      spotlight: 'المميزة',
      gallery: 'المعرض',
      visit: 'زورونا',
    },
    hero: {
      coffee: {
        eyebrow: 'لأجل الرشفة الجادة',
        headline: 'قهوة كوبية،\nعلى أصولها.',
        sub: 'محمصة غامقة، مضغوطة بقوة، تُقدَّم قوية — طقس الكافيسيتو وصل إلى جدة.',
        cta: 'تعرف على بار القهوة',
      },
      tropical: {
        eyebrow: 'أو خذ الطريق الساحلي',
        headline: 'أو خلّها\nموهيتو.',
        sub: 'حمضيات، نعناع، ولون البحيرة الأزرق — الجانب الاستوائي من كافيسيتو.',
        cta: 'شاهد المشروبات الباردة',
      },
      scrollHint: 'جانبان، مقهى واحد',
    },
    ritual: {
      eyebrow: 'طقس الكافيسيتو',
      title: 'خفّف السرعة.\nإنها مجرد رشفة.',
      intro:
        'الكافيسيتو في هافانا ليس طلبًا سريعًا — إنه وقفة قصيرة، تُشارَك واقفًا، تنتهي خلال أربع رشفات. هكذا نحافظ عليها.',
      steps: [
        { num: '01', title: 'الطحن', body: 'حبوب داكنة، مطحونة بدقة، لحظة السحب — بدون اختصارات.' },
        { num: '02', title: 'الضغط', body: 'ضغط عالٍ، جرعة قصيرة، قشدة سميكة — قاعدة الكافيسيتو، قوية بلا اعتذار.' },
        { num: '03', title: 'المشاركة', body: 'ترمس واحد، عدة أكواب صغيرة — الكافيسيتو لم يُصنع ليُشرب وحيدًا.' },
        { num: '04', title: 'التوقف', body: 'دقيقتان، بدون هاتف، بخار وحديث فقط — هذا هو جوهر الطقس.' },
      ],
    },
    menu: {
      eyebrow: 'اختر جانبك (أو لا تختر)',
      title: 'بار القهوة\nوبار الموهيتو',
      mocktailNote: 'كل موهيتو هنا مشروب غير كحولي بالكامل — فواكه، نعناع، وصودا فقط.',
      coffeeLabel: 'بار القهوة',
      mojitoLabel: 'موهيتو ومشروبات باردة',
      toggle: { coffee: 'قهوة', mojito: 'موهيتو' },
    },
    spotlight: {
      eyebrow: 'توقيعات هذا الأسبوع',
      title: 'أربعة مشروبات،\nأربع أجواء',
    },
    gallery: {
      eyebrow: 'عقلية كافيسيتو',
      title: 'اشحن يومك',
      panels: [
        { tag: 'اتّصل.', caption: 'القهوة هي الشاحن. وأنت الجهاز.' },
        { tag: 'افصل.', caption: 'سماعات على شكل حبة بن. صفر إشعارات.' },
        { tag: 'اشحن.', caption: 'من الصفر إلى الامتلاء بالكافيين بجرعة واحدة.' },
        { tag: 'مباشر.', caption: 'قهوة، مباشرة إلى عقلك.' },
      ],
    },
    location: {
      eyebrow: 'ابحث عن أشجار النخيل',
      title: 'استراحة جدة الساحلية،\nمن الداخل',
      neighborhood: 'حي الشاطئ — قرب الكورنيش',
      blurb:
        'سقوف بخشب النخيل، بلاط تراكوتا، وموسيقى لا توقفها أبدًا. نصف المكان يشبه بار إسبريسو في هافانا، والنصف الآخر يشبه حافة مسبح في تموز.',
      addressNote: '(سيتم تحديد الموقع الدقيق بعد تأكيد رقم الوحدة من العميل.)',
      boarding: {
        from: 'جدة',
        to: 'كافيسيتو',
        gateLabel: 'طاولة',
        gateValue: 'أي طاولة',
        seatLabel: 'أجواء',
        seatValue: 'بحر وبار',
        boardingLabel: 'الدخول',
        boardingValue: 'دائمًا',
      },
      hoursLabel: 'مفتوح يوميًا',
      hours: [
        { days: 'السبت – الأربعاء', time: '7:00 ص – 11:00 م' },
        { days: 'الخميس – الجمعة', time: '7:00 ص – 1:00 ص' },
      ],
    },
    footer: {
      tagline: 'روح كوبية. تراب جدة.',
      social: 'تابع الطقس',
      credit: 'تصميم وتطوير DevNautics',
    },
    skipLink: 'تخطَّ إلى المحتوى',
  },
}
