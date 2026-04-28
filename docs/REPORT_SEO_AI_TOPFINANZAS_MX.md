# Technical Report: SEO Optimization and Indexing for Artificial Intelligence (LLMs)

**Project:** TopFinanzas MX (`topfinanzas-mx-next`)
**Implementation Date:** April 2026
**Prepared for:** Stakeholders, TopNetworks Inc.

---

## 1. Context and Objectives

The TopFinanzas MX App Router codebase was refactored to align its technical SEO, crawler accessibility, structured data, and LLM indexing posture with the optimized TopFinanzas US baseline.
The objective was to improve discoverability by Google, Bing, ChatGPT, Claude, Perplexity, and other AI retrieval systems without changing visual design, funnel behavior, route structure, or the existing analytics and advertising stack.

## 2. Summary of Technical Optimizations

### 2.1 Dynamic Metadata Standardization

Metadata is now centralized through shared helpers in `lib/seo.ts` and route data in `lib/seo-route-registry.ts`.

- Root metadata now uses a localized title template, metadata base, canonical URL, hreflang alternates, authors, publisher, OpenGraph, Twitter Card, and robots directives.
- Static content pages under `soluciones-financieras` and `finanzas-personales` now call `createRouteMetadata(...)`.
- Page-level metadata includes absolute canonical URLs, localized `es-MX` alternates, OpenGraph data, Twitter images, and Googlebot preview directives.
- Existing page copy and routing were preserved by extracting metadata from the current page inventory instead of rewriting page content.

### 2.2 Structured Data Injection

Structured data generation is now handled by shared Schema.org utilities.

- Root layout injects `Organization` and `WebSite` JSON-LD with Mexican-market signals and a `SearchAction`.
- Each static content route has a lightweight route-local `layout.tsx` that injects server-rendered JSON-LD through `components/seo/json-ld.tsx`.
- `soluciones-financieras` routes receive `BreadcrumbList` plus `CreditCard`, `LoanOrCredit`, or `FinancialProduct` schema.
- `finanzas-personales` routes receive `BreadcrumbList` plus `BlogPosting` schema.
- JSON-LD is escaped with `<` replacement to avoid unsafe SSR script injection.

### 2.3 AI Crawler and Crawl Budget Optimization

Crawler access is now explicit and localized to the MX base path.

- Added `app/robots.ts` with allow rules for GPTBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, YouBot, cohere-ai, Googlebot, and Bingbot.
- Disallowed low-value or private routes such as API routes, admin/debug pages, quizzes, campaign funnels, recommender steps, and guide-download funnels.
- Added `X-Robots-Tag: noindex, nofollow` headers for campaign, recommender, admin, and diagnostic routes in `next.config.mjs`.
- Added `public/llms.txt` as an AI-readable content manifest for TopFinanzas MX.

### 2.4 Sitemap Refactor

`app/sitemap.ts` now uses the SEO route registry instead of scanning the filesystem and including funnel routes.

- Includes canonical static pages, category hubs, legal pages, and 128 content pages.
- Excludes recommender, quiz, campaign, admin, test, and debug routes.
- Uses localized absolute URLs under `https://topfinanzas.com/mx`.
- Uses monthly change frequency for content pages and weekly frequency for primary hubs.

### 2.5 Semantic HTML Compliance

A semantic audit was performed across static content pages.

- 103 `soluciones-financieras` pages were confirmed with `<article>` coverage after targeted fixes.
- 25 `finanzas-personales` pages were confirmed with `<article>` coverage after targeted fixes.
- The 8 pages previously missing `<article>` wrappers now expose article-level semantics without changing styling.

### 2.6 Performance and Core Web Vitals Safety

All structured data and metadata additions are server-rendered.

- No client-side metadata hydration was added.
- Root duplicate viewport markup was removed.
- `maximumScale: 1` was removed to avoid mobile accessibility regressions.
- Analytics/ad preconnect hints were added for GTM, Google Ad Manager, and Google Analytics domains.
- Existing `formLogger` and `apiLogger` patterns remain untouched.

## 3. Validation Log

### Build and Static Generation

`npm run build` completed successfully.

- Compilation succeeded.
- 170 static App Router pages generated.
- Generated routes include `/robots.txt` and `/sitemap.xml`.

### Lint

`npm run lint` completed successfully.

- No ESLint warnings or errors.

### Generated HTML Inspection

Representative generated pages were inspected in `.next/server/app`.
For `soluciones-financieras/tarjeta-de-credito-nubank-vcorta.html`:

- `application/ld+json` present.
- `Organization`, `WebSite`, `BreadcrumbList`, and `CreditCard` schema present.
- OpenGraph title and canonical metadata present.
- `<article>` markup present.
  For `finanzas-personales/que-es-el-score-crediticio-y-por-que-es-tan-importante.html`:
- `application/ld+json` present.
- `Organization`, `WebSite`, `BreadcrumbList`, and `BlogPosting` schema present.
- OpenGraph title and canonical metadata present.
- `<article>` markup present.

### Crawler Files

Generated `robots.txt` includes:

- AI crawler allowlisting.
- MX sitemap reference.
- Disallow rules for API, admin/debug, quiz, campaign, recommender, and download-funnel routes.
  Generated `sitemap.xml` includes:
- MX canonical URLs.
- Category hubs and legal pages.
- Registry-backed content routes only.

### Lighthouse and Rich Results

Local Lighthouse numeric scores were not captured in this pass because the Lighthouse CLI is not installed in the project or globally. The refactor is expected to be neutral or positive for Core Web Vitals because schema and metadata are server-rendered and the viewport duplication/accessibility issue was removed.
Google Rich Results Test requires external URL submission after deployment. Local generated HTML confirms the expected Schema.org JSON-LD entities are present and parseable as JSON.

## 4. Files and Systems Updated

Primary additions:

- `lib/seo.ts`
- `lib/seo-route-registry.ts`
- `components/seo/json-ld.tsx`
- `app/robots.ts`
- `public/llms.txt`
- Route-local `layout.tsx` files under static `soluciones-financieras/*` and `finanzas-personales/*` routes
  Primary refactors:
- `app/layout.tsx`
- `app/sitemap.ts`
- `next.config.mjs`
- Static content page metadata exports under `soluciones-financieras` and `finanzas-personales`
- Targeted semantic wrappers for pages missing `<article>`

## 5. Conclusion and Next Steps

TopFinanzas MX now has SEO and LLM-indexing architecture aligned with the TopFinanzas US baseline: centralized metadata, route-aware JSON-LD, AI crawler allowlisting, crawl-budget controls, dynamic sitemap generation, and full article semantic coverage across core content pages.
Recommended post-deployment checks:

- Submit `https://topfinanzas.com/mx/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- Validate representative deployed URLs in Google Rich Results Test and Schema.org Validator.
- Run Lighthouse on deployed pages once the audit CLI or PageSpeed Insights is available.
- Monitor Search Console coverage and AI referral sources over the next 15–30 days.
