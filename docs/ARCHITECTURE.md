# Architecture: a modular monolith

One deployable Next.js app, organised as independent feature modules. The goal: a developer can find any piece of
code by asking "which feature owns this?", and can change a feature without touching the others.

## Layers

```
app/      (outermost)  routing, providers, API route handlers. Thin: pages only compose module views.
modules/               feature modules. Self-contained; depend on shared/ and on other modules' public API.
shared/   (base)       cross-cutting building blocks. Knows nothing about features.
```

Dependency direction is one-way: `app -> modules -> shared`. Never the other way.

## Module anatomy

```
modules/<name>/
  index.ts        public API: what other modules and app/ may import (client-safe)
  server.ts       optional server-only API (route handlers import this, never index.ts)
  views/          page-level server components (what app/ pages render)
  components/     the module's UI
  data/           ALL text and content owned by the module (no UI strings in components)
  hooks/          custom hooks (react-query queries and mutations, form logic, ...)
  api/            small API functions + query keys for this module's endpoints
  schemas/        zod schemas (the contract for forms, API responses and storage)
  store/          zustand stores
  lib/            pure logic (easy to unit test)
  server/         repositories and other server-only code (`import "server-only"`)
  __tests__/      unit and component tests
```

### Modules in this repo

| Module | Owns |
|---|---|
| `curriculum` | Pure domain content: lessons, guide steps, glossary, workflows, challenges, selectors, lesson repository. No UI. |
| `roadmap`, `guide`, `glossary`, `concepts`, `workflows`, `practice`, `toolbox`, `mentor`, `home`, `info`, `contact` | One page area each |
| `progress` | Progress store, charts, table, goal planner, backup/restore, "mark done" buttons |
| `search` | Command palette, server-side search API |
| `navigation` | Breadcrumbs, back link, visited-pages history |
| `shell` | Header, mega menu, footer |
| `theme` | Theme provider, toggle, toaster |

## Rules (and how each is enforced)

| Rule | Enforced by |
|---|---|
| A module imports another module only through its `index.ts` or `server.ts` | `pnpm arch` (dependency-cruiser) |
| `shared/` never imports `modules/` or `app/`; `modules/` never import `app/` | `pnpm arch` |
| No circular dependencies | `pnpm arch` |
| `curriculum` stays UI-free | ESLint `no-restricted-imports` |
| No hardcoded text in JSX; copy lives in `data/` | ESLint `react/jsx-no-literals` |
| One page width everywhere (`Container`) | `shared/__tests__/layout-consistency.test.ts` |
| Server-only code never reaches the client | `server-only` package |
| Consistent import order | ESLint `simple-import-sort` |
| Unused files, exports and dependencies are removed | `pnpm knip` |

## Data flow

```
data/*.ts (static content)  ->  modules/curriculum selectors  ->  views (server components)  ->  HTML
browser interactions        ->  zustand stores (progress, history, UI)   persisted locally, validated by zod
network features            ->  shared/api (ky + zod)  ->  /api/* route handlers  ->  server.ts  ->  repository
                                 |
                                 +-> modules/*/hooks (react-query useQuery / useMutation)
```

API layer: `shared/api` provides the HTTP client, `ApiError`, typed `getJson`/`postJson` (responses are validated with zod),
a `createQueryKeys` factory and one `createQueryClient`. Each module adds its own `api/` functions and `hooks/`.

## Adding a module

1. `modules/<name>/` with `index.ts`, `data/`, `components/`, `views/`.
2. Put every user-visible string in `data/`. Components read from it.
3. Export only what others need from `index.ts` (and server-only pieces from `server.ts`).
4. Add a thin route in `app/` that renders the module's view.
5. Add tests in `__tests__/`; run `pnpm verify`.

## Why not micro-frontends or a package-per-feature monorepo?

The app is small and ships as one unit. A modular monolith gives the boundaries without the operational cost.
Because boundaries are enforced, any module can later be extracted into its own package.
