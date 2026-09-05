# Barbearia Parahyba — Site

Landing page em React + Vite + TypeScript + Tailwind CSS.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

## Como gerar a versão final (build)

```bash
npm run build
```

Os arquivos prontos para publicar ficam na pasta `dist/`. Basta subir o
conteúdo dessa pasta em qualquer hospedagem (Vercel, Netlify, Hostinger, etc).

## Formulário de agendamento

A seção **Agendamento** (`src/components/Booking.tsx`) tem um formulário com
nome, telefone, serviço, data e horário preferidos e observações. Não existe
backend/banco de dados — ao enviar, o site monta a mensagem automaticamente
e abre o WhatsApp da barbearia já com tudo preenchido, para o cliente só
confirmar o envio. Simples, sem custo de servidor e sem depender de nenhum
serviço externo.

Os botões "Agendar horário" do menu, do topo da página e da seção de
Serviços agora rolam até esse formulário (`#agendamento`); o botão flutuante
de WhatsApp e o card de contato continuam abrindo o WhatsApp diretamente,
para quem preferir só mandar mensagem sem preencher nada.

## O que editar quando tiver as informações reais

Praticamente tudo que muda com frequência está centralizado em
**`src/siteConfig.ts`**:

- Número de WhatsApp e mensagem padrão
- Link do Instagram
- Link do Google Maps (troque pelo link de "Compartilhar local" do Maps)
- Nome, endereço e horário de funcionamento
- Lista de serviços, descrições e preços (o campo `price` está vazio de
  propósito — assim que definir os valores, preencha ali)

## Fotos

Ainda não há fotos reais da barbearia no projeto — por isso a seção **Sobre**
e a **Galeria** usam espaços reservados (placeholders) em vez de fotos de
banco de imagens genéricas.

- **Sobre**: `src/components/About.tsx` — troque o bloco comentado como
  "PLACEHOLDER DE IMAGEM" por uma foto real do ambiente.
- **Galeria**: `src/components/Gallery.tsx` — troque o array `GALLERY_ITEMS`
  para incluir o caminho de cada foto (cortes, barba, ambiente, detalhes,
  profissionais em ação).

## Logo

O logo já foi recortado em formato circular a partir da imagem enviada e está
em `src/assets/logo.png` (usado no site) e `public/logo.png` /
`public/favicon-*.png` (usado como ícone da aba do navegador).

## Estrutura

```
src/
  components/
    Navbar, Hero, About, Services, Differentials,
    Gallery, CTA, Location, Contact, Footer, WhatsAppFloat
  hooks/useReveal.ts   -> animação de entrada ao rolar a página
  siteConfig.ts        -> dados centrais do negócio (edite aqui)
  App.tsx              -> monta todas as seções na ordem
```
