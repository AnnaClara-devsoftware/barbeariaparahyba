import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { business, services, buildWhatsAppLink } from '../siteConfig'
import { useReveal } from '../hooks/useReveal'

function formatDateBR(isoDate: string) {
  if (!isoDate) return ''
  const [year, month, day] = isoDate.split('-')
  return `${day}/${month}/${year}`
}

export default function Booking() {
  const ref = useReveal<HTMLDivElement>()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState(services[0]?.name ?? '')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [notes, setNotes] = useState('')

  const isValid = name.trim().length > 1 && phone.trim().length >= 8

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isValid) return

    const lines = [
      'Olá! Gostaria de agendar um horário na Barbearia Parahyba.',
      '',
      `Nome: ${name.trim()}`,
      `Telefone: ${phone.trim()}`,
      `Serviço: ${service}`,
    ]

    if (date) lines.push(`Data preferida: ${formatDateBR(date)}`)
    if (time) lines.push(`Horário preferido: ${time}`)
    if (notes.trim()) lines.push(`Observações: ${notes.trim()}`)

    const message = lines.join('\n')
    window.open(buildWhatsAppLink(message), '_blank', 'noopener,noreferrer')
  }

  const inputClasses =
    'w-full rounded-sm border border-ink/15 bg-bone px-4 py-3 text-sm text-ink placeholder:text-ink/35 outline-none transition-colors focus:border-brass'

  return (
    <section id="agendamento" className="bg-bone py-24 md:py-32">
      <div className="container-page grid gap-14 md:grid-cols-2 md:gap-20">
        <div ref={ref} className="reveal">
          <p className="text-sm uppercase tracking-[0.25em] text-brass">Agendamento</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            Seu próximo estilo
            <br />
            começa aqui.
          </h2>
          <p className="mt-6 max-w-md text-ink/65">
            Preencha seus dados e o serviço desejado. Ao enviar, você será direcionado ao
            WhatsApp da Barbearia Parahyba com tudo já preenchido — é só confirmar por lá.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="booking-name" className="mb-1.5 block text-xs uppercase tracking-wide text-ink/50">
                Nome *
              </label>
              <input
                id="booking-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Seu nome"
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="booking-phone" className="mb-1.5 block text-xs uppercase tracking-wide text-ink/50">
                Telefone *
              </label>
              <input
                id="booking-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(83) 9 9999-9999"
                className={inputClasses}
              />
            </div>
          </div>

          <div>
            <label htmlFor="booking-service" className="mb-1.5 block text-xs uppercase tracking-wide text-ink/50">
              Serviço
            </label>
            <select
              id="booking-service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={inputClasses}
            >
              {services.map((s) => (
                <option key={s.name} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="booking-date" className="mb-1.5 block text-xs uppercase tracking-wide text-ink/50">
                Data preferida
              </label>
              <input
                id="booking-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="booking-time" className="mb-1.5 block text-xs uppercase tracking-wide text-ink/50">
                Horário preferido
              </label>
              <input
                id="booking-time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                min="09:00"
                max="19:00"
                className={inputClasses}
              />
            </div>
          </div>

          <div>
            <label htmlFor="booking-notes" className="mb-1.5 block text-xs uppercase tracking-wide text-ink/50">
              Observações
            </label>
            <textarea
              id="booking-notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Alguma preferência ou observação"
              rows={3}
              className={`${inputClasses} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold tracking-wide text-bone transition-transform enabled:hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
          >
            <Send size={16} /> Enviar pelo WhatsApp
          </button>

          <p className="pt-1 text-xs text-ink/40">
            * Campos obrigatórios. Atendimento {business.hours.weekdays.toLowerCase()},{' '}
            {business.hours.weekdaysTime}.
          </p>
        </form>
      </div>
    </section>
  )
}
