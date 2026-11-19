# Git Field Guide

**Learn version control from zero to Pro Max, on a real repository.**

A learning platform for Git and GitHub: a 15-lesson roadmap, a 100-step command guide, concept diagrams,
interactive practice, progress tracking and an AI mentor that must show its sources. The site is also the
practice repository: you branch it, break it and fix it as you learn.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss&logoColor=white)
![Architecture](https://img.shields.io/badge/architecture-modular%20monolith-d33318)

## Features

| Area | What you get |
|---|---|
| **Roadmap** | 15 lessons in 4 levels, each with commands, a project task, checkpoints, pitfalls and official sources. A clickable path map and a per-lesson detail page. |
| **100-step guide** | Every command from `git --version` to syncing a fork, in 10 chapters, with explanations, warnings, copy buttons and a shareable URL filter. |
| **Concepts and workflows** | Diagrams for the four places work lives, branches and merges, merge vs rebase, GitHub Flow, the pull request lifecycle, a decision tree for undoing mistakes and the three `reset` modes. |
| **Practice** | Drag-and-drop challenges: put real Git workflows in the correct order. |
| **Progress** | Charts, a sortable table, a study-goal planner and backup/restore. Stored only in your browser. |
| **Navigation** | Grouped mega menu (click to open), automatic breadcrumbs, a "back to previous page" link, a recently-visited history and a Cmd/Ctrl+K command palette with server-side search. |
| **AI mentor rules** | A written constitution (verify before claiming, no bias, teaching mode, safety) plus permission guards for risky Git commands. |
| **Quality** | Light and dark themes, page transitions that respect reduced motion, WCAG 2 AA checks, security headers, sitemap, manifest and structured data. |

## Tech stack

Next.js 16 (App Router, Cache Components, React Compiler, Turbopack) · React 19 · TypeScript (strict, `noUncheckedIndexedAccess`) ·
Tailwind CSS 4 · shadcn/ui on Radix UI · Zod 4 · TanStack Query and Table · Zustand · React Hook Form · nuqs ·
Motion · Recharts · dnd-kit · Vitest, Testing Library, MSW and Playwright. The full list, with the job and the file for each package,
is in [docs/PACKAGES.md](docs/PACKAGES.md).

## Getting started

Requirements: Node.js 22.13 or newer (pnpm 11 needs it) and [pnpm](https://pnpm.io) 11.

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

| Script | Purpose |
|---|---|
| `pnpm dev` / `build` / `start` | Develop, build and serve |
| `pnpm verify` | Everything CI runs: lint, types, architecture, tests, build |
| `pnpm lint` / `lint:fix` | ESLint (includes the "no hardcoded UI text" rule) |
| `pnpm typecheck` | `next typegen` and `tsc --noEmit` |
| `pnpm arch` | Module-boundary rules (dependency-cruiser) |
| `pnpm test` / `test:coverage` | Unit and component tests (Vitest) |
| `pnpm test:e2e` | Browser and accessibility tests (Playwright). Run `pnpm build` first |
| `pnpm knip` | Find unused files, exports and dependencies |
| `pnpm format` / `format:check` | Prettier |
| `pnpm analyze` | Bundle analysis (Turbopack) |
| `pnpm docs:generate` | Regenerate `docs/GUIDE.md` and `docs/PACKAGES.md` from the site data |
| `pnpm changeset` | Record a user-facing change for the next release |

## Architecture

A **modular monolith**: one deployable app, split into self-contained feature modules with enforced boundaries.

```
app/        Routing only: thin pages, providers, API route handlers
modules/    Feature modules (roadmap, guide, practice, progress, search, ...). Each owns its
            components, data, hooks, api, schemas, store and tests, and exposes index.ts / server.ts
shared/     Cross-cutting building blocks: ui (shadcn), components, motion, api client, config, lib
```

Rules, enforced by `pnpm arch`, ESLint and tests: modules talk to each other only through `index.ts` (client-safe) or
`server.ts` (server-only); `shared/` never imports from `modules/` or `app/`; no circular dependencies; every page uses the one
`Container`; no hardcoded UI text in components (copy lives in each module's `data/` folder).
Details and a checklist for adding a module: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Documentation

| Document | Contents |
|---|---|
| [docs/ROADMAP.md](docs/ROADMAP.md) | The full learning path, zero to Pro Max |
| [docs/GUIDE.md](docs/GUIDE.md) | The 100-step command guide (generated) |
| [docs/lessons/](docs/lessons) | The 15 lessons in depth |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Structure, rules and conventions |
| [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md) | Colours, type, components |
| [docs/PACKAGES.md](docs/PACKAGES.md) | Every package, its job and where it is used (generated) |
| [docs/ai/CONSTITUTION.md](docs/ai/CONSTITUTION.md) | Rules for AI agents working in this repo |
| [docs/PROGRESS.md](docs/PROGRESS.md) | Your learning checklist |

## Contributing

1. Branch from `main`: `git switch -c feature/short-name`.
2. Make small commits using [Conventional Commits](https://www.conventionalcommits.org/) (`feat: ...`, `fix: ...`). A `commit-msg` hook enforces this.
3. Run `pnpm verify`. A `pre-commit` hook lints and formats staged files; `pre-push` runs architecture checks and tests.
4. Add a changeset for user-facing changes (`pnpm changeset`).
5. Open a pull request using the template. CI runs the same checks plus end-to-end and accessibility tests.

## Troubleshooting

- **Styles or theme look stale in `pnpm dev`**: stop the dev server, delete `.next`, start it again. `pnpm dev` and `pnpm build` share
  the `.next` folder, so do not run a build while the dev server is running.
- **A Git hook runs a strange folder**: never run `pnpm exec husky --help`. husky treats the argument as a hooks directory and
  rewrites `core.hooksPath`. Fix with `git config --unset core.hooksPath && pnpm install`.
- **Deploy fails at `pnpm install`** (for example on Vercel): pnpm 11 requires Node 22.13 or newer. Set the project's Node.js version to 22.x or 24.x
  (Vercel: Project Settings, General, Node.js Version). `engines.node` in `package.json` already declares it.
- **Port 3000 is busy**: another dev server is running. Use `pnpm dev -p 3001` or stop the other one.

## Security

See [SECURITY.md](SECURITY.md). The contact form and API routes are demos that validate input and store nothing.

## License

No license has been chosen yet. Add a `LICENSE` file before reusing or redistributing this project.
