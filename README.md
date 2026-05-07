# AJ Creative

**The premium creative network & marketplace.** Founded by Alex Solis (@alexmdc, professional illustrator) and Josh Fathi (Tacavar, tech founder).

> "Where artists thrive" — hire artists, find creative jobs, commission custom artwork.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 with custom design system
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Building for Production

```bash
npm run build
npm start
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, stats, featured jobs/artists, AI protection, app download |
| `/discover` | Artist directory with skill filtering |
| `/jobs` | Job board with type/location filters + search |
| `/feed` | Community feed with posts, sidebar challenges |
| `/projects` | Project showcase gallery |
| `/events` | Challenges & events with featured + detail cards |

## Deploying

Connect the `/home/joshy/aj-creative` repo to Vercel. Set custom domain: `aj.tacavar.com`

Required env vars — see `.env.example` for all vars (Supabase, Stripe, Resend placeholders).

## Brand

- **Founders:** Alex Solis + Josh Fathi
- **Location:** Miami, FL
- **Copyright:** © AJ Creative 2026
- **Accent palette:** Violet #7C3AED → Blue #2563EB → Pink #DB2777
