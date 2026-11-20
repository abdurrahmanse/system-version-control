# Deploying to Vercel

This project is a standard Next.js app and deploys to [Vercel](https://vercel.com) without extra tooling.
The repository already contains what Vercel needs: [vercel.json](../vercel.json), a committed `pnpm-lock.yaml`,
and `engines.node` in [package.json](../package.json).

Labels: ✅ verified in this repository, ⚠️ depends on Vercel's current dashboard or docs: check it there.

## 1. Requirements

| Requirement | Why | Status |
|---|---|---|
| Node.js **22.13 or newer** | `pnpm@11` (pinned in `packageManager`) does not run on Node 20 | ✅ `npm view pnpm@11.23.0 engines` says `>=22.13` |
| Committed `pnpm-lock.yaml` | `pnpm install --frozen-lockfile` fails if it is missing or out of date | ✅ |
| Code on GitHub | Vercel deploys from the Git repository | |

If the build log says `Command "pnpm install" exited with 1`, the cause is almost always the Node version (see Troubleshooting).

## 2. Import the project

1. Open https://vercel.com/new and choose **Import** next to this repository. ⚠️
2. Framework preset: **Next.js** (detected automatically; `vercel.json` also sets it). Root directory: `./`.
3. **Node.js Version:** Project Settings, General, set **22.x** or **24.x**. ⚠️
4. Leave install and build commands empty; `vercel.json` provides them:
   - install: `pnpm install --frozen-lockfile`
   - build: `pnpm build`
5. Deploy. Every push to `main` becomes a production deployment; every pull request gets a preview URL.

## 3. Environment variables

| Name | Needed? | Meaning |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Optional | Public URL used by the sitemap, robots.txt, canonical metadata and the social preview image. Set it when you use a custom domain. No trailing slash. |

Without it the site uses `VERCEL_PROJECT_PRODUCTION_URL`, which Vercel provides to builds
(Project Settings, Environment Variables, "Automatically expose System Environment Variables"). ⚠️
The fallback logic is in [shared/config/site-url.ts](../shared/config/site-url.ts) and is unit tested ✅.

## 4. pnpm version

`package.json` pins `"packageManager": "pnpm@11.23.0"`. Vercel normally chooses pnpm from the lockfile. To make Vercel
use exactly the pinned version, enable Corepack by adding the environment variable `ENABLE_EXPERIMENTAL_COREPACK=1`. ⚠️
This only works on Node 22.13 or newer, see step 2.

## 5. Check the deployment

After the first deploy open these URLs:

- `/api/health` returns `{"status":"ok"}` ✅
- `/sitemap.xml` lists 270+ pages and uses your domain ✅ (generated from the site data)
- `/robots.txt`
- `/` in light and dark mode, and on a phone

The API routes (`/api/search`, `/api/lessons`, `/api/feedback`, `/api/progress/import`) run as serverless functions.
They store nothing, so no database or secret is required.

## 6. Deploy from the terminal (optional)

No global install is needed:

```bash
pnpm dlx vercel login      # opens the browser once
pnpm dlx vercel link       # connects this folder to a Vercel project (creates .vercel/, already git-ignored)
pnpm dlx vercel            # preview deployment
pnpm dlx vercel --prod     # production deployment
```

⚠️ Check `pnpm dlx vercel --help` for the flags of your CLI version.

## 7. Custom domain

Project Settings, Domains, add the domain and follow the DNS instructions. ⚠️ Then set `NEXT_PUBLIC_SITE_URL` to
`https://your-domain` and redeploy so the sitemap and social previews use it.

## Troubleshooting

| Symptom | Cause and fix |
|---|---|
| `Command "pnpm install" exited with 1` | Node is older than 22.13. Set Node.js Version to 22.x or 24.x (step 2). |
| `ERR_PNPM_OUTDATED_LOCKFILE` | `package.json` changed without updating the lockfile. Run `pnpm install` locally and commit `pnpm-lock.yaml`. |
| Build fails on types or lint | Run `pnpm verify` locally. It runs the same checks as CI. |
| Sitemap shows `http://localhost:3000` | Neither `NEXT_PUBLIC_SITE_URL` nor the Vercel system variable is available. Set `NEXT_PUBLIC_SITE_URL`. |
| Styles or theme look stale locally | Not a deployment issue: delete `.next` and restart `pnpm dev`. |

To reproduce a Vercel build locally from a clean checkout:

```bash
git clone <repo> /tmp/svc && cd /tmp/svc
pnpm install --frozen-lockfile && pnpm build
```
