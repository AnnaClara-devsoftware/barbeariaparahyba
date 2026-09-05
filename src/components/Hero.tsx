import { ArrowDown } from 'lucide-react'
import { business } from '../siteConfig'
import logo from '../assets/logo.png'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink"
    >
      {/* Fundo: gradiente escuro + motivo de listras diagonais (referência sutil ao poste de barbeiro do logo) */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #F3F1EC 0, #F3F1EC 2px, transparent 2px, transparent 64px)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #7A3B33 0, #7A3B33 2px, transparent 2px, transparent 64px)',
            backgroundPosition: '22px 0',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/70 to-ink" />
        <div className="absolute -right-40 top-1/2 hidden -translate-y-1/2 opacity-[0.06] md:block">
          <img src={logo} alt="" aria-hidden="true" className="h-[36rem] w-[36rem]" />
        </div>
      </div>

      <div className="container-page relative z-10 pt-24">
        <div className="max-w-3xl">
          <p
            className="animate-[fadeUp_0.8s_ease_0.1s_both] text-sm uppercase tracking-[0.25em] text-brass-light"
          >
            João Pessoa &middot; Bairro dos Estados
          </p>

          <h1 className="mt-6 animate-[fadeUp_0.8s_ease_0.3s_both] font-display text-5xl leading-[1.05] text-bone sm:text-6xl md:text-7xl">
            {business.name}
          </h1>

          <p className="mt-6 max-w-xl animate-[fadeUp_0.8s_ease_0.5s_both] text-xl text-bone/90 md:text-2xl">
            {business.tagline}
          </p>

          <p className="mt-4 max-w-md animate-[fadeUp_0.8s_ease_0.65s_both] text-base text-bone/60">
            Estilo, tradição e personalidade em cada detalhe.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-[fadeUp_0.8s_ease_0.8s_both]">
            <a
              href="#agendamento"
              className="inline-flex items-center justify-center rounded-full bg-brass px-8 py-3.5 text-sm font-semibold tracking-wide text-ink transition-transform hover:scale-[1.03]"
            >
              Agendar horário
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center rounded-full border border-bone/30 px-8 py-3.5 text-sm font-medium tracking-wide text-bone transition-colors hover:border-bone hover:bg-bone/5"
            >
              Conhecer a barbearia
            </a>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-bone/50 transition-colors hover:text-brass-light"
      >
        <ArrowDown size={22} className="animate-bounce" />
      </a>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
