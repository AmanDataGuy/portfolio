# Aman Sharma — Portfolio

Single-page portfolio built with Next.js and Tailwind CSS. Agentic AI engineer positioning: hero, capability grid, projects, experience, contact.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Fraunces (display) + Inter (body/UI) via `next/font`

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/page.tsx` — all page content (hero, capabilities, projects, experience, footer)
- `app/layout.tsx` — fonts, metadata
- `app/globals.css` — palette, marquee/reveal/cursor/portrait animations
- `components/Reveal.tsx` — scroll-triggered fade-in wrapper
- `components/Cursor.tsx` — custom dot + ring cursor (pointer devices only)
- `public/photo.jpg`, `public/resume.pdf` — hero photo and downloadable resume

## Deploy

Pushed to `main` deploys automatically via Vercel's GitHub integration.
