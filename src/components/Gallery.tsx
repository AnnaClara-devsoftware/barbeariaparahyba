import { useState } from 'react'
import { Expand, X } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'

/**
 * GALERIA — placeholders organizados por categoria.
 * Assim que houver fotos reais da Barbearia Parahyba, substitua o array
 * abaixo por objetos { src: fotoReal, label: 'legenda' } e troque o
 * placeholder visual (bloco escuro) por <img src={src} ... />.
 */
const GALLERY_ITEMS = [
  { label: 'Cortes masculinos' },
  { label: 'Barba' },
  { label: 'Ambiente da barbearia' },
  { label: 'Detalhes do espaço' },
  { label: 'Profissionais em ação' },
  { label: 'Acabamento' },
]

export default function Gallery() {
  const ref = useReveal<HTMLDivElement>()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="galeria" className="bg-ink py-24 md:py-32">
      <div className="container-page">
        <div ref={ref} className="reveal max-w-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-brass">Galeria</p>
          <h2 className="mt-4 font-display text-4xl text-bone md:text-5xl">O ambiente e o ofício.</h2>
          <p className="mt-4 text-bone/55">
            Espaços reservados para as fotos reais da barbearia — fáceis de substituir em{' '}
            <code className="text-bone/70">src/components/Gallery.tsx</code>.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <button
              key={item.label}
              onClick={() => setOpenIndex(i)}
              className="group relative aspect-square overflow-hidden bg-charcoal text-left"
            >
              <div className="absolute inset-0 flex items-center justify-center border border-bone/10 transition-colors group-hover:border-brass/50">
                <span className="px-4 text-center text-xs uppercase tracking-[0.15em] text-bone/40">
                  {item.label}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/40 group-hover:opacity-100">
                <Expand className="text-brass-light" size={22} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-6"
          onClick={() => setOpenIndex(null)}
        >
          <button
            aria-label="Fechar"
            className="absolute right-6 top-6 text-bone/70 hover:text-bone"
            onClick={() => setOpenIndex(null)}
          >
            <X size={28} />
          </button>
          <div className="flex aspect-square w-full max-w-xl items-center justify-center border border-bone/15 bg-charcoal">
            <span className="text-sm uppercase tracking-[0.2em] text-bone/40">
              {GALLERY_ITEMS[openIndex].label}
            </span>
          </div>
        </div>
      )}
    </section>
  )
}
