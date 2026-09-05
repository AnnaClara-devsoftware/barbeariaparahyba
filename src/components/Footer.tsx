import { Instagram, MessageCircle } from 'lucide-react'
import { business, links } from '../siteConfig'
import logo from '../assets/logo.png'

const NAV_ITEMS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
]

export default function Footer() {
  return (
    <footer className="bg-ink pt-20">
      <div className="container-page grid gap-12 pb-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Barbearia Parahyba" className="h-11 w-11 rounded-full" />
            <span className="font-display text-lg text-bone">{business.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-bone/55">{business.tagline}</p>
          <div className="mt-6 flex gap-4">
            <a
              href={links.INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 text-bone/70 transition-colors hover:border-brass hover:text-brass-light"
            >
              <Instagram size={18} />
            </a>
            <a
              href={links.WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 text-bone/70 transition-colors hover:border-brass hover:text-brass-light"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-bone/40">Navegação</p>
          <ul className="mt-5 space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-bone/65 transition-colors hover:text-brass-light">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-bone/40">Funcionamento</p>
          <div className="mt-5 space-y-1 text-sm text-bone/65">
            <p>{business.hours.weekdays}</p>
            <p>{business.hours.weekdaysTime}</p>
            <p className="pt-2">{business.hours.sunday}</p>
            <p>{business.hours.sundayStatus}</p>
          </div>
          <p className="mt-5 text-sm text-bone/65">{business.address.full}</p>
        </div>
      </div>

      <div className="hairline border-bone/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-bone/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {business.name}. Todos os direitos reservados.</p>
          <p>{business.address.full}</p>
        </div>
      </div>
    </footer>
  )
}
