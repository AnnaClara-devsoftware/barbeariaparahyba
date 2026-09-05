import { Award, Clock, Gem, MapPin } from 'lucide-react'
import { business } from '../siteConfig'
import { useReveal } from '../hooks/useReveal'

const ITEMS = [
  {
    icon: Award,
    title: 'Profissionais qualificados',
    description: 'Atendimento focado nos detalhes, do primeiro corte ao acabamento final.',
  },
  {
    icon: Gem,
    title: 'Ambiente sofisticado',
    description: 'Um espaço pensado para proporcionar uma experiência diferenciada.',
  },
  {
    icon: MapPin,
    title: 'Localização privilegiada',
    description: `No ${business.address.neighborhood}, em João Pessoa.`,
  },
  {
    icon: Clock,
    title: 'Atendimento de segunda a sábado',
    description: `Das ${business.hours.weekdaysTime}.`,
  },
]

export default function Differentials() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="container-page">
        <div ref={ref} className="reveal max-w-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-brass">Por que a Parahyba</p>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">
            Detalhes que fazem a diferença.
          </h2>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {ITEMS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex gap-5">
              <Icon className="mt-1 shrink-0 text-brass" size={28} strokeWidth={1.5} />
              <div>
                <h3 className="font-display text-xl text-ink">{title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/65">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
