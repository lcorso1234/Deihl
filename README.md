# Deihl

A Next.js 14 + Tailwind CSS starter using the App Router and TypeScript.

## Prerequisites
- Node.js 18+
- npm 9+

## Setup
```zsh
cd "/Users/lawrencecorso/Desktop/Development/Deihl/Deihl"
npm install
```

## Development
```zsh
npm run dev
```
Open http://localhost:3000

Business card demo: http://localhost:3000/card


## Build & Start
```zsh
npm run build
npm run start
```

## Lint & Format
```zsh
npm run lint
npm run format
```

## Tailwind
Tailwind is configured in `tailwind.config.ts` with content paths:
- `./app/**/*.{js,ts,jsx,tsx}`
- `./components/**/*.{js,ts,jsx,tsx}`

Global styles and Tailwind directives are in `app/globals.css`.

### Business Card Page
The page at `/card` renders a mobile-oriented interactive business card for Matthew Diehl.

Features:
- Download vCard (`.vcf`) with contact info & note.
- Opens SMS composer (Android & iOS) with a prefilled network message.
- Jiggle micro-animation on the save button to draw attention.
- Gunmetal gray 3D styled card with neon green accent and subtle noise texture.

If SMS deep link is blocked by the browser, the contact still downloads. On some desktop environments the `sms:` scheme may do nothing; this is expected.
