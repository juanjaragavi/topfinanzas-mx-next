# Locale-Aware Routing Implementation

## Overview

TopFinanzas MX uses locale-based routing with the `/mx/` prefix for all pages. This document describes the implementation and best practices for maintaining locale-aware navigation throughout the application.

## Configuration

### Next.js Configuration

The application uses `basePath: "/mx"` in `next.config.mjs`:

```javascript
const nextConfig = {
  basePath: "/mx",
  // ... other config
};
```

This configuration tells Next.js that all routes should be prefixed with `/mx/`.

## Routing Architecture

### 1. Next.js `<Link>` Components

Next.js `<Link>` components **automatically** prepend the `basePath` to all internal links:

```tsx
// These work correctly - Next.js handles the /mx/ prefix automatically
<Link href="/tarjetas">Tarjetas</Link>           // Renders as /mx/tarjetas
<Link href="/prestamos">Préstamos</Link>         // Renders as /mx/prestamos
<Link href="/">Home</Link>                       // Renders as /mx
```

**Best Practice**: Always use Next.js `<Link>` components for internal navigation. They automatically handle the locale prefix.

### 2. Programmatic Navigation with `useRouter()`

Next.js router methods (`push`, `replace`) **also automatically** prepend the `basePath`:

```tsx
import { useRouter } from "next/navigation";

const router = useRouter();

// These work correctly - Next.js handles the /mx/ prefix
router.push("/tarjetas"); // Navigates to /mx/tarjetas
router.replace("/prestamos"); // Navigates to /mx/prestamos
```

### 3. Browser API Navigation (window.location)

When using browser APIs like `window.location.href`, you **MUST** explicitly include the `/mx/` prefix because these bypass Next.js routing:

```tsx
// ❌ WRONG - Will result in 404
window.location.href = "/tarjetas";

// ✅ CORRECT - Explicitly includes /mx/ prefix
window.location.href = "/mx/tarjetas";
```

## Utility Functions

### `getLocalizedPath()`

A utility function that ensures paths always have the correct locale prefix:

```typescript
import { getLocalizedPath } from "@/lib/utils/url-builder";

// All of these return "/mx/tarjetas"
getLocalizedPath("/tarjetas");
getLocalizedPath("tarjetas");
getLocalizedPath("/mx/tarjetas"); // Idempotent - won't double-prefix
```

**Location**: `/lib/utils/url-builder.ts`

**Usage**: Use this function when constructing paths for browser APIs or when you need to ensure a path has the locale prefix.

### `redirectWithUtmParams()`

An enhanced redirect function that:

1. Preserves UTM parameters from sessionStorage
2. Automatically adds locale prefix to internal URLs
3. Handles external URLs correctly

```typescript
import { redirectWithUtmParams } from "@/lib/utils/url-builder";

// Internal redirect - automatically adds /mx/ prefix
redirectWithUtmParams("/tarjetas");
// Redirects to: /mx/tarjetas?utm_source=...&utm_medium=...

// External redirect - leaves URL as-is
redirectWithUtmParams("https://external.com");
// Redirects to: https://external.com?utm_source=...
```

**Location**: `/lib/utils/url-builder.ts`

## Implementation Details

### Quiz Form Redirects

All quiz forms (`credit-card-form.tsx`, `credit-card-form-short.tsx`, `credit-card-form-to-product.tsx`) use `redirectWithUtmParams()` which automatically adds the `/mx/` prefix:

```typescript
// This correctly redirects to /mx/recomendador-de-tarjetas-de-credito-p1
redirectWithUtmParams("/recomendador-de-tarjetas-de-credito-p1");
```

### Recommender Lock System

The recommender lock system stores and retrieves paths with locale awareness:

**Pattern Matching**: Updated to accept paths with or without `/mx/` prefix:

```typescript
// In /lib/navigation/recommender-lock.ts
const RECOMMENDER_PATH_PATTERN =
  /^\/(?:mx\/)?(?:credit-card-recommender|recomendador-de-tarjetas-de-credito)(?:-[a-z0-9-]+)?(?:\/.+)?$/i;
```

**Path Building**: The `buildRedirectPath()` function ensures paths always include `/mx/`:

```typescript
export function buildRedirectPath(payload: RecommenderLockPayload): string {
  let pathname = payload.pathname;
  if (!pathname.startsWith("/mx/") && !pathname.startsWith("/mx")) {
    pathname = `/mx${pathname}`;
  }
  return `${pathname}${payload.search ?? ""}`;
}
```

### API Routes

API routes are excluded from the `basePath` and should be called with `/mx/` prefix in client-side code:

```typescript
// ✅ CORRECT - Includes /mx/ prefix
fetch("/mx/api/sheets", { method: "POST", body: data });

// ❌ WRONG - Will result in 404
fetch("/api/sheets", { method: "POST", body: data });
```

## Testing & Verification

### Manual Testing Checklist

✅ **Quiz Flow**:

1. Navigate to `/mx/campana-quiz`
2. Fill out and submit the quiz form
3. Verify redirect to `/mx/recomendador-de-tarjetas-de-credito-p1` (no 404)
4. Check browser URL includes `/mx/` prefix

✅ **Navigation Menu**:

1. Click all header links (Tarjetas, Préstamos, etc.)
2. Verify all URLs include `/mx/` prefix
3. No 404 errors in console

✅ **Footer Links**:

1. Click footer links (Nosotros, Contacto, etc.)
2. Verify all URLs include `/mx/` prefix

✅ **Programmatic Redirects**:

1. Test back/forward browser navigation
2. Verify recommender lock redirects work correctly
3. Check UTM parameters are preserved

### Automated Testing

Test script available at `/scripts/test-basepath-fix.sh`:

```bash
bash scripts/test-basepath-fix.sh
```

Expected output:

- ✅ POST /mx/api/sheets → 201 Created
- ✅ POST /mx/api/sheets/short → 201 Created
- ✅ POST /mx/api/subscribe → 200 OK
- ✅ POST /api/sheets (without /mx) → 404 Not Found

## Common Issues & Solutions

### Issue: 404 Error on Form Submission

**Symptom**: After quiz submission, redirect to results page returns 404

**Cause**: Redirect URL doesn't include `/mx/` prefix

**Solution**: Ensure you're using `redirectWithUtmParams()` or `getLocalizedPath()` for the redirect URL

### Issue: API Calls Failing with 404

**Symptom**: Fetch calls to `/api/*` return 404

**Cause**: API routes need explicit `/mx/` prefix in client-side code

**Solution**: Update fetch calls to include `/mx/` prefix:

```typescript
fetch("/mx/api/sheets", { method: "POST", body: data });
```

### Issue: Link Appears Correct but Results in 404

**Symptom**: URL looks correct (`/mx/...`) but page returns 404

**Cause**: Using `<a>` tag instead of Next.js `<Link>`, or incorrect middleware configuration

**Solution**: Use Next.js `<Link>` component for internal navigation

## Best Practices

1. **Always use Next.js `<Link>` for internal navigation** - It handles locale prefixes automatically
2. **Use `redirectWithUtmParams()` for form redirects** - It adds locale prefix and preserves UTM params
3. **Use `getLocalizedPath()` when constructing paths for browser APIs** - Ensures consistent locale handling
4. **Test redirects in development** - Verify URLs include `/mx/` prefix
5. **Document any exceptions** - If you need to bypass locale routing, document why

## Migration Guide

If you need to add new pages or update existing redirects:

### Adding a New Page

1. Create the page in `/app/[route-name]/page.tsx`
2. Links to this page should use:
   ```tsx
   <Link href="/route-name">Link Text</Link>
   ```
   Next.js will automatically render this as `/mx/route-name`

### Adding a New Redirect

1. Import the utility:

   ```typescript
   import { redirectWithUtmParams } from "@/lib/utils/url-builder";
   ```

2. Use for the redirect:
   ```typescript
   redirectWithUtmParams("/destination-path");
   ```

### Updating Existing Hard-coded Paths

1. Search for `window.location.href = "/`
2. Replace with:

   ```typescript
   import { getLocalizedPath } from "@/lib/utils/url-builder";
   window.location.href = getLocalizedPath("/your-path");
   ```

   Or better, use:

   ```typescript
   import { redirectWithUtmParams } from "@/lib/utils/url-builder";
   redirectWithUtmParams("/your-path");
   ```

## Files Modified

This implementation involved updates to the following files:

1. `/lib/utils/url-builder.ts` - Added `getLocalizedPath()` and updated `redirectWithUtmParams()`
2. `/lib/navigation/recommender-lock.ts` - Updated path pattern and `buildRedirectPath()`
3. `/app/administrar-enrutador/page.tsx` - Updated redirect to include `/mx/`
4. All quiz form components - Already using `redirectWithUtmParams()` which now handles locale

## Future Considerations

### Multi-Locale Support

If the application needs to support multiple locales in the future (e.g., `/mx/`, `/co/`, `/pe/`):

1. Update `getLocalizedPath()` to accept a locale parameter
2. Implement locale detection based on user preferences or URL
3. Update middleware to handle locale-specific routing
4. Consider using Next.js internationalization (i18n) features

### Performance Optimization

Consider implementing:

- Route prefetching for common navigation paths
- Middleware-based automatic locale injection
- Client-side locale persistence (localStorage/cookies)

## Support & Troubleshooting

For issues with locale routing:

1. Check browser Network tab for the actual URL being requested
2. Verify middleware configuration in `middleware.ts`
3. Check Next.js config `basePath` setting
4. Review this document for best practices
5. Test with the automated test script

---

**Last Updated**: 2026-02-02  
**Version**: 1.0  
**Maintained By**: Development Team
