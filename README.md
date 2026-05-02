# Bodybuilding Recommendation Frontend

Production-ready frontend shell for the Bodybuilding Recommendation platform.

## Stack

- Next.js (App Router) + TypeScript (strict)
- Tailwind CSS
- shadcn/ui-ready design tokens/utilities
- TanStack Query
- React Hook Form + Zod
- Recharts

## Architecture

```txt
src/
  app/
  entities/
  features/
  shared/
  widgets/
```

## Environment

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Set:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8080
```

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run format
```

## Build & start

```bash
npm run build
npm run start
```

## Deploy

### Vercel (recommended)
1. Import repository in Vercel.
2. Add `NEXT_PUBLIC_API_BASE_URL` in Project Settings → Environment Variables.
3. Deploy using default Next.js build settings.

### Docker
Use a multi-stage Dockerfile (Node 20+) and run `npm run build` then `npm run start`.

## Initial shell delivered

- App layout with global providers and theming
- Top nav + sidebar widget composition
- Route groups for auth and dashboard
- Placeholder pages with loading skeletons
- Starter auth form validation and dashboard chart
