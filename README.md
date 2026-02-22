# Fund My Main Character Arc (Kanye West India Tour)

A chaotic, Gen-Z coded fundraising one-pager for a broke CS student trying to attend the Kanye West India tour. Performance art. 70% satire, 30% manifestation.

## Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/` — layout, page, globals
- `src/components/ui/` — shared UI (ProgressBar, WobbleButton, ChaosCard)
- `src/sections/` — Hero, Lore, Budget, Reward Tiers, Manifesto, Donation, Footer
- `src/hooks/` — useLiveCounter, useFakeActivity

Utilities are colocated (no single giant `utils` folder). Lightweight build, clean code, unhinged vibe.

## Build

```bash
npm run build
npm start
```
