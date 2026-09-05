import { Clock, MapPin, Navigation } from 'lucide-react'
import { business, links } from '../siteConfig'
import { useReveal } from '../hooks/useReveal'

export default function Location() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="localizacao" className="bg-ink py-24 md:py-32">
      <div className="container-page grid gap-14 md:grid-cols-2 md:gap-16">
        <div ref={ref} className="reveal">
          <p className="text-sm uppercase tracking-[0.25em] text-brass">Localização</p>
          <h2 className="mt-4 font-display text-4xl text-bone md:text-5xl">Venha nos visitar.</h2>

          <div className="mt-10 space-y-8 text-bone/85">
            <div className="flex gap-4">
              <MapPin className="mt-1 shrink-0 text-brass" size={22} strokeWidth={1.5} />
              <div>
                <p className="font-medium text-bone">{business.name}</p>
                <p className="mt-1 text-bone/65">{business.address.street}</p>
                <p className="text-bone/65">
                  {business.address.neighborhood}, {business.address.city}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="mt-1 shrink-0 text-brass" size={22} strokeWidth={1.5} />
              <div>
                <p className="text-bone/65">
                  <span className="text-bone">{business.hours.weekdays}</span> ·{' '}
                  {business.hours.weekdaysTime}
                </p>
                <p className="text-bone/65">
                  <span className="text-bone">{business.hours.sunday}</span> ·{' '}
                  {business.hours.sundayStatus}
                </p>
              </div>
            </div>
          </div>

          <a
            href={links.MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-brass px-7 py-3 text-sm font-medium tracking-wide text-brass-light transition-colors hover:bg-brass hover:text-ink"
          >
            <Navigation size={16} /> Como chegar
          </a>
        </div>

        <div className="h-80 w-full overflow-hidden rounded-sm border border-bone/10 md:h-full">
          <iframe
            title={`Mapa - ${business.name}`}
            src={links.MAPS_EMBED_SRC}
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.4) contrast(1.05)' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
