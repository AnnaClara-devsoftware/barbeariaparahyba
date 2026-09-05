import { Clock, Instagram, MapPin, MessageCircle } from 'lucide-react'
import { business, links } from '../siteConfig'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="contato" className="bg-bone py-24 md:py-32">
      <div className="container-page">
        <div ref={ref} className="reveal max-w-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-brass">Contato</p>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">Fale com a gente.</h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={links.WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 border border-ink/10 p-7 transition-colors hover:border-brass"
          >
            <MessageCircle className="text-brass" size={24} strokeWidth={1.5} />
            <div>
              <p className="font-display text-lg text-ink">WhatsApp</p>
              <p className="mt-1 text-sm text-ink/60">Agende diretamente pelo WhatsApp</p>
            </div>
          </a>

          <a
            href={links.INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 border border-ink/10 p-7 transition-colors hover:border-brass"
          >
            <Instagram className="text-brass" size={24} strokeWidth={1.5} />
            <div>
              <p className="font-display text-lg text-ink">Instagram</p>
              <p className="mt-1 text-sm text-ink/60">@barbeariaparahyba</p>
            </div>
          </a>

          <div className="flex flex-col gap-4 border border-ink/10 p-7">
            <MapPin className="text-brass" size={24} strokeWidth={1.5} />
            <div>
              <p className="font-display text-lg text-ink">Endereço</p>
              <p className="mt-1 text-sm text-ink/60">{business.address.full}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 border border-ink/10 p-7">
            <Clock className="text-brass" size={24} strokeWidth={1.5} />
            <div>
              <p className="font-display text-lg text-ink">Horário</p>
              <p className="mt-1 text-sm text-ink/60">
                {business.hours.weekdays}: {business.hours.weekdaysTime}
                <br />
                {business.hours.sunday}: {business.hours.sundayStatus}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
