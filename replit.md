# Peter Lyngso Portfolio

A cinematic, content-driven portfolio for Peter Lyngso's labor, political, and documentary work.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- Portfolio app: `artifacts/peter-lyngso-portfolio`
- Editable project and credits content: `artifacts/peter-lyngso-portfolio/src/data/content.ts`
- Local media: `artifacts/peter-lyngso-portfolio/public`

## Architecture decisions

- Keep the portfolio static and content-driven; do not add a backend, database, AI/API calls, background jobs, or paid runtime services unless they become genuinely necessary.
- Keep dependencies minimal and use lightweight native CSS for motion.
- Use optimized silent looping video only where it materially improves portfolio browsing; always support static local placeholders.

## Product

- Browsing across Labor, Politics, and Documentary work
- Editorial project case studies
- About and extended production credits
- Centralized draft content designed for later curation

## User preferences

- Favor the cheapest practical build and hosting approach: fast-loading static pages, local structured content, minimal dependencies, and no overbuilding.
- Do not publish until Peter explicitly asks.

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
