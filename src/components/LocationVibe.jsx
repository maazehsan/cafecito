import { useLang } from '../context/LangContext'
import { Reveal } from './Reveal'
import Divider from './Divider'
import { PinIcon } from './icons'

function BoardingPass({ t, dir }) {
  const { boarding, hoursLabel, hours } = t.location
  return (
    <div
      dir={dir}
      className="relative bg-cream text-espresso-dark rounded-2xl shadow-2xl overflow-hidden flex max-w-md w-full mx-auto md:mx-0"
    >
      <div className="flex-1 p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <p className="font-badge text-xs text-espresso-dark/50">{boarding.from}</p>
          <div className="flex-1 mx-3 border-t-2 border-dashed border-espresso-dark/20" />
          <p className="font-badge text-xs text-espresso-dark/50">{boarding.to}</p>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div>
            <p className="font-badge text-[0.6rem] text-espresso-dark/50 mb-1">{boarding.gateLabel}</p>
            <p className="font-display text-base md:text-lg">{boarding.gateValue}</p>
          </div>
          <div>
            <p className="font-badge text-[0.6rem] text-espresso-dark/50 mb-1">{boarding.seatLabel}</p>
            <p className="font-display text-base md:text-lg">{boarding.seatValue}</p>
          </div>
          <div>
            <p className="font-badge text-[0.6rem] text-espresso-dark/50 mb-1">
              {boarding.boardingLabel}
            </p>
            <p className="font-display text-base md:text-lg">{boarding.boardingValue}</p>
          </div>
        </div>
        <Divider tone="text-terracotta" className="mb-6" />
        <p className="font-badge text-xs text-espresso-dark/50 mb-3">{hoursLabel}</p>
        <ul className="space-y-2">
          {hours.map((h) => (
            <li key={h.days} className="flex items-center justify-between font-body text-sm gap-4">
              <span className="opacity-70">{h.days}</span>
              <span className="font-badge">{h.time}</span>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="w-10 md:w-14 shrink-0 relative ticket-perforation flex items-center justify-center [border-inline-start:2px_dashed_rgba(44,24,16,0.2)]"
      >
        <span className="[writing-mode:vertical-rl] font-badge text-xs text-espresso-dark/40">
          CAFECITO
        </span>
      </div>
      <span
        className="absolute -top-3 w-6 h-6 rounded-full bg-espresso-dark"
        style={{ insetInlineEnd: 'calc(2.5rem - 0.75rem)' }}
      />
      <span
        className="absolute -bottom-3 w-6 h-6 rounded-full bg-espresso-dark"
        style={{ insetInlineEnd: 'calc(2.5rem - 0.75rem)' }}
      />
    </div>
  )
}

export default function LocationVibe() {
  const { t, dir } = useLang()
  const loc = t.location

  return (
    <section id="visit" className="relative bg-espresso-dark text-cream py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-noise pointer-events-none" aria-hidden="true" />
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-16 items-center relative">
        <Reveal>
          <p className="font-badge text-brass text-sm mb-3">{loc.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl whitespace-pre-line mb-5">{loc.title}</h2>
          <div className="flex items-center gap-2 text-cream/80 mb-5" dir={dir}>
            <PinIcon className="w-5 h-5 text-terracotta shrink-0" />
            <span className="font-body">{loc.neighborhood}</span>
          </div>
          <p className="font-body text-cream/70 leading-relaxed mb-3 max-w-md" dir={dir}>
            {loc.blurb}
          </p>
          <p className="font-body text-cream/40 text-sm italic mb-8" dir={dir}>
            {loc.addressNote}
          </p>
          <div className="rounded-2xl overflow-hidden h-64 md:h-72 border border-cream/10">
            {/* NOTE: this is the unofficial no-API-key Google Maps embed
                trick (maps.google.com/maps?...&output=embed). It's widely
                used and free, but isn't Google's officially supported
                method. Once the client confirms the exact address, either
                update the `q=` query below or switch to the official Maps
                Embed API (google.com/maps/embed/v1/place?key=...) for a
                guaranteed-stable long-term embed. */}
            <iframe
              title="Cafecito Cuban Cafe — Jeddah map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237379.07457220706!2d38.85129128671873!3d21.623051600000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cfa1ffeb6ecf%3A0xc9362e1167efb1e9!2zQ2FmZWNpdG8gQ2FmZSB8INmD2KfZgdmK2LPZitiq2Yg!5e0!3m2!1sen!2s!4v1783847769186!5m2!1sen!2s"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <BoardingPass t={t} dir={dir} />
        </Reveal>
      </div>
    </section>
  )
}
