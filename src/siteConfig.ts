/**
 * CONFIGURAÇÃO CENTRAL DO SITE — BARBEARIA PARAHYBA
 * ---------------------------------------------------
 * Todas as informações que mudam com frequência (contato, endereço,
 * serviços, preços, links) ficam concentradas neste arquivo.
 * Edite apenas aqui — nenhum outro componente deve ter esses dados "soltos".
 */

export const business = {
  name: 'Barbearia Parahyba',
  tagline: 'A barbearia mais charmosa de João Pessoa.',
  address: {
    street: 'Av. Acre, 446',
    neighborhood: 'Bairro dos Estados',
    city: 'João Pessoa – PB',
    full: 'Av. Acre, 446 – Bairro dos Estados, João Pessoa – PB',
  },
  hours: {
    weekdays: 'Segunda a sábado',
    weekdaysTime: '09:00 às 19:00',
    sunday: 'Domingo',
    sundayStatus: 'Fechado',
  },
}

/**
 * LINKS — substitua pelos links reais quando disponíveis.
 * WHATSAPP_LINK já está configurado com o número informado.
 * MAPS_LINK usa uma busca pelo endereço; troque pelo link exato do
 * Google Maps do estabelecimento assim que tiver o "compartilhar local".
 */
const WHATSAPP_NUMBER = '5583981818033' // +55 83 98181-8033, formato internacional sem símbolos
const WHATSAPP_DEFAULT_MESSAGE = 'Olá! Gostaria de agendar um horário na Barbearia Parahyba.'

/**
 * Monta um link do WhatsApp com uma mensagem personalizada.
 * Usado pelo formulário de agendamento para enviar os dados preenchidos.
 */
export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const links = {
  WHATSAPP_LINK: buildWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE),
  INSTAGRAM_LINK: 'https://www.instagram.com/barbeariaparahyba',
  MAPS_LINK:
    'https://www.google.com/maps/search/?api=1&query=Av.+Acre+446+Bairro+dos+Estados+João+Pessoa+PB',
  MAPS_EMBED_SRC:
    'https://www.google.com/maps?q=Av.+Acre+446+Bairro+dos+Estados+João+Pessoa+PB&output=embed',
}

export type Service = {
  name: string
  description: string
  price?: string // deixe undefined até ter o preço real
}

/**
 * SERVIÇOS E PREÇOS
 * Os preços estão como `undefined` de propósito — o layout mostra
 * "Consulte o valor" enquanto isso. Basta preencher o campo `price`
 * (ex: "R$ 45") assim que os valores reais forem definidos.
 */
export const services: Service[] = [
  {
    name: 'Corte Masculino',
    description: 'Corte personalizado, do clássico ao contemporâneo, com acabamento à navalha.',
    price: undefined,
  },
  {
    name: 'Barba',
    description: 'Modelagem completa com toalha quente, óleos e navalha para um contorno preciso.',
    price: undefined,
  },
  {
    name: 'Corte + Barba',
    description: 'O ritual completo: cabelo e barba alinhados em um único atendimento.',
    price: undefined,
  },
  {
    name: 'Acabamento',
    description: 'Retoque de contorno e nuca para manter o corte em dia entre uma sessão e outra.',
    price: undefined,
  },
  {
    name: 'Sobrancelha',
    description: 'Design e limpeza para um olhar mais definido, sem exageros.',
    price: undefined,
  },
]
