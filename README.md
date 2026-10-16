# dreamlogic.co.nz

The DreamLogic website. Astro static site, deployed on Cloudflare Workers (static assets).

## Where things live

| Change | File |
| --- | --- |
| Any wording, prices, sectors, steps, contact email | `src/data/site.ts` |
| Page layout and section styling | `src/pages/index.astro` |
| Hero diagram | `src/components/FlowDiagram.astro` (steps come from `site.ts`) |
| Logo | `src/components/Logo.astro`, `public/favicon.svg` |
| Brand colours, type scale, buttons | `src/styles/global.css` |
| Search-engine visibility | `site.indexable` in `src/data/site.ts` (false = staging) |

## Run it

```bash
npm ci
npm run dev      # local dev server at http://localhost:4321
npm run build    # builds to ./dist
npm run check    # post-build sanity checks (pages, fonts, anchors, noindex)
```

## Deploying

Production deploys come from Cloudflare's Git integration (Workers Builds): merging to `main` deploys,
and every other branch gets a preview URL. Changes go through pull requests; `main` is protected.

Manual fallback, from a machine logged in with `npx wrangler login`:

```bash
npm run deploy
```
