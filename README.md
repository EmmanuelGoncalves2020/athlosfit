# Athlos Fit

Site institucional premium da academia Athlos Fit, construído com Next.js (App Router), Tailwind CSS v4, Framer Motion e GSAP.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS v4** — tema em `app/globals.css` (`@theme`)
- **Framer Motion** — reveals de scroll, transições e microinterações
- **GSAP** — parallax do hero (orbs seguindo o cursor)
- **lucide-react** — ícones

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

```
app/                 rotas, metadata, sitemap, robots, og-image
components/layout/    navbar, footer, logo
components/sections/  seções da landing page (hero, planos, faq, ...)
components/ui/        primitivos (botão, reveal, counter, ícones)
lib/                  constantes do negócio (contato, planos) e conteúdo
```

## Conteúdo de exemplo

Endereço, telefone, WhatsApp e redes sociais em `lib/constants.ts` são placeholders — substitua pelos dados reais da unidade antes de publicar. O mapa em `#contato` usa o endereço configurado ali.

## Build

```bash
npm run build
npm run start
```
