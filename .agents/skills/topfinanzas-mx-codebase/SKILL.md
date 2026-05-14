---
name: topfinanzas-mx-codebase
description: "TopFinanzas Mexico codebase operations map for Next.js App Router, API integrations, ads/analytics, SEO routing, and safe change workflows. Use when adding pages, products, content, APIs, or deployment-readiness changes in topfinanzas-mx-next, and when coordinating with topnetworks-sync-orchestrator."
argument-hint: "What change are you making in TopFinanzas MX? (page, content, API, analytics, SEO, deployment)"
---

# TopFinanzas MX Codebase

Use this skill as the implementation map for `/Users/macbookpro/GitHub/topfinanzas-mx-next`.

This is the Mexico property in the TopNetworks portfolio:

- Domain: `https://topfinanzas.com/mx`
- Market: Mexico
- Language: `es-MX`
- Currency context: `MXN`
- Framework: Next.js App Router, React 19, TypeScript, Tailwind

This skill is intentionally repository-specific. It complements (does not replace) the cross-repo orchestrator skill at:

- `/Users/macbookpro/GitHub/topfinanzas-mx-next/.agents/skills/topnetworks-sync-orchestrator/SKILL.md`

## Authoritative context to load first

Before major changes, read:

- `/Users/macbookpro/GitHub/topfinanzas-mx-next/TOPNETWORKS_COMPANY_PROFILE.md`
- `/Users/macbookpro/GitHub/TopNetworks-Inc.md`
- `/Users/macbookpro/GitHub/topfinanzas-mx-next/.agents/skills/topnetworks-sync-orchestrator/SKILL.md`

## When to use this skill

- Add or modify pages under `app/` for MX routes.
- Add/edit product content in `app/soluciones-financieras/**`.
- Update blog/category listings and post metadata.
- Change API endpoints in `app/api/**`.
- Modify analytics/ad behavior (`components/analytics/**`, `lib/ads/**`).
- Update SEO metadata, sitemaps, robots, or structured data.
- Prepare local validation and deployment-readiness checks.

## Repository boundaries

- In-scope: MX codebase only (`topfinanzas-mx-next`).
- Out-of-scope unless explicitly requested: synchronized propagation to `topfinanzas-us-next`, `uk-topfinanzas-com`, `budgetbee-next`.
- Never push or deploy unless explicitly requested.

## System map (implementation-relevant)

### Runtime entry points

- `app/layout.tsx`
  - Global metadata, GTM script injection, Google Ads/GAM components, UTM handlers, optional AdZep runtime, JSON-LD, global providers.
  - `ENABLE_ADZEP` flag currently gates AdZep script/bridge activation (currently `false`, so AdZep components are wired but inactive unless enabled).
- `app/page.tsx`
  - Home entry, renders `HomeContent`.
- `next.config.mjs`
  - `basePath: "/mx"` is a hard invariant.
  - Caching/security headers and route-level `X-Robots-Tag` noindex rules for funnels/testing/admin pages.
- `middleware.ts`
  - Adds hreflang/canonical `Link` headers.
  - Enforces recommender lock redirects for quiz-like routes.

### Application domains

- Content/listing routes:
  - `app/blog/page.tsx`
  - `app/finanzas-personales/page.tsx`
  - `app/soluciones-financieras/page.tsx`
  - `app/tarjetas/page.tsx`
  - `app/prestamos/page.tsx`
- Quiz/recommender/funnel routes:
  - `app/campana-quiz/**`, `app/campana-quiz-short/**`, `app/quiz-2/**`
  - `app/recomendador-de-tarjetas-de-credito-p1|p2|p3/**`
  - `app/recomendador-de-prestamos-personales-p1/**`
  - `app/enrutador/**`, `app/administrar-enrutador/**`

### Data/content sources

- Primary listing source: `lib/data/posts.ts` (`ALL_POSTS`).
- SEO route metadata source: `lib/seo-route-registry.ts`.
- Legal/static content: `content/legal/**`.
- Author attribution API source: `lib/data/authors.json` via `app/api/authors/route.ts`.

### Integrations and pipelines

- Google Sheets ingestion:
  - `app/api/sheets/route.ts`
  - `app/api/sheets/short/route.ts`
  - Uses Google service account env vars and upserts rows per email.
- Contact/newsletter:
  - `app/api/contact/route.ts` -> Brevo contacts + notes.
  - `app/api/subscribe/route.ts` -> ActiveCampaign sync + ConvertKit subscribe.
  - `lib/kit/convertkit-client.ts`.
- Search:
  - `app/api/search/route.ts` -> Vertex AI Search endpoint.
- Analytics and ad runtime:
  - `components/analytics/google-ads.tsx`, `components/analytics/gam.tsx`.
  - UTM: `utm-persister.tsx`, `utm-link-injector.tsx`, `utm-monitor.tsx`.
  - AdZep stack: `components/analytics/adzep*.tsx`, `lib/ads/config.ts`, `lib/ads/activate-adzep.ts`.

## Local development and operations

### Commands

- Install: `pnpm install`
- Dev: `pnpm dev` (port `3030`)
- Lint: `pnpm lint`
- Build: `pnpm build`
- Start: `pnpm start` (port `3030`)
- Format (mutating): `pnpm format`

### Deployment/readiness scripts

- Local workflow scripts in `scripts/`:
  - `git-workflow.sh` (interactive merge prompt; use only with explicit user request)
  - `sync-branches.sh`
  - `deploy_update.sh` (remote/server oriented)
- Orchestrator-aware predeploy wrapper:
  - `scripts/topnetworks-predeploy.mjs`
  - Delegates to orchestrator deploy-readiness CLI for this repo.

## Environment and runtime contract

Observed env groups (by usage in API/runtime):

Required when the corresponding integration/feature is used:

- Google Sheets:
  - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
  - `GOOGLE_PRIVATE_KEY`
  - `GOOGLE_SHEET_ID`
- Brevo:
  - `BREVO_API_KEY`
- ActiveCampaign:
  - `ACTIVECAMPAIGN_API_URL`
  - `ACTIVECAMPAIGN_API_KEY`
- ConvertKit/Kit:
  - `KIT_API_KEY`
  - Optional `KIT_API_URL`
- Search:
  - `VERTEX_AI_SEARCH_API_KEY`

Optional runtime controls:
- Logging toggle:
  - `NEXT_PUBLIC_ENABLE_LOGGING`
- Cookie validation/runtime flags (see env debug route):
  - `NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED`
  - `NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION`

Do not hardcode secrets. Do not edit `.env*` unless explicitly requested.

## Invariants and guardrails

1. Preserve `basePath: "/mx"` behavior in routing and links.
2. Preserve MX canonical/hreflang behavior (`lib/seo.ts`, `middleware.ts`).
3. Keep non-indexable funnel/test/admin routes blocked from crawl (`next.config.mjs`, `app/robots.ts`).
4. Do not manually scatter ad activation calls; use approved AdZep bridge/utilities.
5. Keep category pages dynamic from `ALL_POSTS` (no hardcoded product lists in `app/tarjetas/page.tsx` and `app/prestamos/page.tsx`).
6. For blog/content changes, keep listing sources synchronized across all relevant listing views.
7. For `app/soluciones-financieras/**`, follow the strict layout standard in:
   - `.github/instructions/FINANCIAL_SOLUTIONS_LAYOUT_STANDARD.instructions.md`
8. Do not push to `HEAD` or deploy unless explicitly requested.

## Common change recipes

### 1) Add a normal MX page

1. Create route under `app/<slug>/page.tsx`.
2. Add/adjust metadata (`generateMetadata` or route metadata helper).
3. Ensure canonical path is under `/mx` behavior.
4. If page should not index, add noindex controls in `next.config.mjs` and/or metadata.
5. Run `pnpm lint` and `pnpm build`.

### 2) Add/edit a financial solution product

1. Read `.github/instructions/FINANCIAL_SOLUTIONS_LAYOUT_STANDARD.instructions.md`.
2. Create/update both pages (benefits + requirements pair) using the mandated structure.
3. Update `lib/data/posts.ts` with product entry (`subCategory` = `creditCards` or `loans`).
4. Verify visibility on `/soluciones-financieras`, `/tarjetas` or `/prestamos`.
5. If the route depends on registry-driven metadata, update `lib/seo-route-registry.ts`.
6. Run `pnpm lint` and `pnpm build`.

### 3) Add/edit blog or personal finance content

1. Create/update article route under `app/finanzas-personales/**` or `app/soluciones-financieras/**`.
2. Update central list in `lib/data/posts.ts`.
3. Ensure listing views reflect changes:
   - `app/blog/page.tsx`
   - `app/finanzas-personales/page.tsx`
   - `app/soluciones-financieras/page.tsx`
   - plus any additional listing arrays in use.
4. If route metadata is registry-driven, update the SEO registry.
5. Run lint/build and verify route rendering.

### 4) Add or modify API integration

1. Implement in `app/api/<name>/route.ts`.
2. Validate request fields and return clear status codes.
3. Log through `apiLogger`/scoped logger, not ad-hoc console logs.
4. Add/verify env vars required by the endpoint.
5. Validate with local scripts or direct endpoint tests.

### 5) Modify analytics/ads behavior safely

1. Start from `app/layout.tsx` wiring and the relevant analytics components.
2. Keep GTM/Google Ads load order stable unless there is a specific requirement.
3. For AdZep, modify `lib/ads/config.ts` and bridge/utilities, not scattered page logic.
4. Respect excluded ad paths (quiz/funnel pages).
5. Validate no overlay regressions and no blocked CTA interactions.

### 6) Prepare deployment readiness (without deploying)

1. Run local quality gates: `pnpm lint` and `pnpm build`.
2. Use orchestrator preflight wrapper:
   - `node scripts/topnetworks-predeploy.mjs preflight --dry-run`
   - `node scripts/topnetworks-predeploy.mjs preflight --execute` (only when explicitly requested)
3. If preflight reports `AGENT_ACTION_REQUIRED`, fix before any deployment action.

## Orchestrator integration contract

This skill is the MX deep map. The orchestrator skill is the cross-repo coordinator.

### Hand-off to orchestrator when

- A change must propagate to other TopNetworks repos.
- You need parity audits, multi-repo validation, or deployment planning across properties.
- Shared patterns (SEO/GEO/LLM indexing, analytics, ads, scripts, shared components) must stay aligned.

### How to invoke orchestrator

- Skill hand-off prompt example:
  - `@topnetworks-sync-orchestrator Propagate this approved MX pattern across US/UK/BudgetBee with localization preserved for domain, language, compliance, and route naming.`
- CLI examples:
  - `node .agents/skills/topnetworks-sync-orchestrator/scripts/topnetworks-sync.mjs status`
  - `node .agents/skills/topnetworks-sync-orchestrator/scripts/topnetworks-sync.mjs parity`

### Shared expectations with orchestrator

1. Classify changes as shared vs localized (MX language, compliance, route conventions).
2. Preserve market-specific adaptation while syncing architecture patterns.
3. Use orchestrator allowlisted validation and preflight commands before cross-repo deployment instructions.
4. Keep local branch policy (`dev` workflow) and do not leave repo parked on `main` after deployment prep.

### Recommended paired workflow

1. Use this skill to implement and validate MX changes.
2. If propagation is needed, invoke `topnetworks-sync-orchestrator` with a propagation matrix.
3. Reconcile intentional differences explicitly (currency, regulatory text, locale voice, route names).

## Completion checklist

- Architecture impact understood (route/module/integration touched).
- Listing and metadata synchronization completed where applicable.
- Noindex/canonical/basePath behavior preserved.
- Env contract unchanged or documented.
- `pnpm lint` and `pnpm build` completed for code changes.
- Cross-repo implications either explicitly out-of-scope or handed to orchestrator.
