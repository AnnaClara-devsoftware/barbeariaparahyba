import { Eye, Layers, Scissors, Sparkles, Wind } from 'lucide-react'
import { services, type Service } from '../siteConfig'
import { useReveal } from '../hooks/useReveal'

const ICONS = [Scissors, Wind, Layers, Sparkles, Eye]

function ServiceRow({ service, Icon }: { service: Service; Icon: (typeof ICONS)[number] }) {
  return (
    <div className="group flex items-start justify-between gap-6 py-7 transition-colors">
      <div className="flex items-start gap-5">
        <Icon className="mt-1 shrink-0 text-brass" size={26} strokeWidth={1.5} />
        <div>
          <h3 className="font-display text-xl text-ink md:text-2xl">{service.name}</h3>
          <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-ink/65">
            {service.description}
          </p>
        </div>
      </div>
      <span className="shrink-0 whitespace-nowrap pt-1 font-display text-lg text-brass/90">
        {service.price ?? 'Consulte o valor'}
      </span>
    </div>
  )
}

export default function Services() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="servicos" className="bg-ink py-24 md:py-32">
      <div className="container-page">
        <div ref={ref} className="reveal max-w-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-brass">Serviços</p>
          <h2 className="mt-4 font-display text-4xl text-bone md:text-5xl">
            Cuidado sob medida, do corte ao acabamento.
          </h2>
        </div>

        <div className="mt-14 divide-y divide-bone/10 border-y border-bone/10 text-bone">
          {services.map((service, i) => (
            <ServiceRow key={service.name} service={service} Icon={ICONS[i % ICONS.length]} />
          ))}
        </div>

        <p className="mt-6 text-xs text-bone/35">
          * Valores a confirmar — atualize o campo <code>price</code> em{' '}
          <code>src/siteConfig.ts</code> assim que a tabela de preços estiver definida.
        </p>

        <div className="mt-12">
          <a
            href="#agendamento"
            className="inline-flex items-center justify-center rounded-full bg-brass px-8 py-3.5 text-sm font-semibold tracking-wide text-ink transition-transform hover:scale-[1.03]"
          >
            Agendar meu horário
          </a>
        </div>
      </div>
    </section>
  )
}
