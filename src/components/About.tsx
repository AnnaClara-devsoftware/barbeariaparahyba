import { useReveal } from '../hooks/useReveal'
import logo from '../assets/logo.png'

export default function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="sobre" className="bg-bone py-24 md:py-32">
      <div className="container-page grid items-center gap-14 md:grid-cols-2 md:gap-20">
        <div ref={ref} className="reveal">
          <p className="text-sm uppercase tracking-[0.25em] text-brass">Sobre a barbearia</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink md:text-5xl">
            Muito mais que um corte.
            <br />
            Uma experiência.
          </h2>
          <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink/75 max-w-prose">
            <p>
              A Barbearia Parahyba nasceu para ser um espaço de referência para o homem que
              valoriza estilo, cuidado e atenção aos detalhes. Cada atendimento é conduzido com
              técnica apurada e calma — sem pressa, sem atalhos.
            </p>
            <p>
              Aqui, cortar o cabelo e aparar a barba é também um momento de pausa: um ambiente
              pensado para receber bem, ouvir o que cada cliente busca e entregar um resultado à
              altura da confiança depositada.
            </p>
            <p>
              É tradição e modernidade convivendo no mesmo espaço, no coração do Bairro dos
              Estados, em João Pessoa.
            </p>
          </div>
        </div>

        {/*
          PLACEHOLDER DE IMAGEM — substitua o conteúdo desta div por uma foto real
          do ambiente da barbearia (ex: <img src={fotoAmbiente} className="h-full w-full object-cover" />).
          Por ora, exibimos a marca sobre fundo escuro para não usar fotos de banco de imagens
          que não pertencem à Barbearia Parahyba.
        */}
        <div className="relative">
          <div className="aspect-[4/5] w-full rounded-sm bg-ink flex flex-col items-center justify-center gap-4 overflow-hidden">
            <img
              src={logo}
              alt="Identidade visual da Barbearia Parahyba"
              className="h-2/3 w-2/3 object-contain opacity-90"
            />
            <span className="text-xs uppercase tracking-[0.2em] text-bone/30">
              Espaço reservado para foto do ambiente
            </span>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden h-24 w-24 border border-brass/40 sm:block" />
        </div>
      </div>
    </section>
  )
}
