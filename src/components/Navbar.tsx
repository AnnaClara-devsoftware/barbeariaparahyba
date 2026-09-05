import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const NAV_ITEMS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? 'bg-ink/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(173,138,84,0.25)]' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex items-center justify-between py-3">
        <a href="#inicio" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="Barbearia Parahyba" className="h-11 w-11 rounded-full" />
          <span className="font-display text-lg tracking-wide text-bone">
            Barbearia <span className="text-brass-light">Parahyba</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm text-bone/85">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-brass-light">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#agendamento"
          className="hidden lg:inline-flex items-center rounded-full border border-brass px-5 py-2 text-sm font-medium tracking-wide text-brass-light transition-colors hover:bg-brass hover:text-ink"
        >
          Agendar horário
        </a>

        <button
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className="lg:hidden text-bone p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
          open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container-page flex flex-col gap-1 pb-6 pt-2 text-base text-bone/90">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="hairline first:border-t-0">
              <a href={item.href} className="block py-3" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="#agendamento"
              className="inline-flex w-full items-center justify-center rounded-full bg-brass px-5 py-3 text-sm font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              Agendar horário
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
