# Quiz Cookie Validation Override - Developer Guide

## Overview

The TopFinanzas MX quiz system includes cookie-based validation to prevent duplicate registrations. During development and testing, this validation can be temporarily disabled to allow repeated access to quiz pages without manual database manipulation.

## Architecture

### Affected Components

1. **Quiz Entry Points**:
   - `/app/campana-quiz/page.tsx` - Full quiz flow
   - `/app/campana-quiz-short/page.tsx` - Short quiz flow
   - `/app/quiz-2/page.tsx` - Alternative quiz version

2. **Form Components**:
   - `/components/credit-card-form.tsx`
   - `/components/credit-card-form-short.tsx`
   - `/components/credit-card-form-to-product.tsx`

3. **Validation Logic**:
   - `/lib/navigation/recommender-lock.ts` - Cookie management utilities

### Validation Flow

```markdown
User accesses quiz page
↓
Check NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED
↓
├─ If "false" → Skip validation, render quiz
└─ If "true" (default) → Check cookie
↓
├─ Cookie exists → Redirect to results page
└─ No cookie → Render quiz
```

## Environment Configuration

### Environment Variables

| Variable                                | Purpose                                  | Values                | Default  |
| --------------------------------------- | ---------------------------------------- | --------------------- | -------- |
| `NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED` | Master toggle for validation             | `"true"` or `"false"` | `"true"` |
| `NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION`   | Cookie lifetime when validation disabled | Number (days)         | `1`      |

### Configuration Files

- **`.env`** - Base configuration (version controlled)
- **`.env.local`** - Local overrides (gitignored, developer-specific)
- **`.env.production`** - Production settings
- **`.env.production.local`** - Production overrides

### Important: Build-Time Inlining

⚠️ **CRITICAL**: `NEXT_PUBLIC_*` environment variables are **inlined at build time** in Next.js. Changing these values requires:

1. **Development**: Restart dev server (`npm run dev`)
2. **Production**: Full rebuild (`npm run build`)

Simply changing the `.env` file **will not** take effect until rebuild/restart.

## Developer Usage

### Enable Override (Disable Validation)

**Step 1**: Update environment file

Edit `.env.local` (create if doesn't exist):

```bash
# Quiz Cookie Validation Configuration
NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=false
NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION=1
```

**Step 2**: Restart development server

```bash
# Kill existing server
lsof -ti:3030 | xargs kill -9

# Start fresh server
npm run dev
```

**Step 3**: Verify in browser console

Open browser DevTools and run:

```javascript
console.log(process.env.NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED);
// Should output: undefined (means "false" in code)
```

### Disable Override (Enable Validation)

**Step 1**: Update environment file

Edit `.env.local`:

```bash
# Quiz Cookie Validation Configuration
NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=true
NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION=30
```

**Step 2**: Restart development server

```bash
lsof -ti:3030 | xargs kill -9
npm run dev
```

**Step 3**: Clear existing cookies (optional)

In browser DevTools → Application → Cookies, delete:

- `tf_recommender_lock`

Or run in console:

```javascript
document.cookie = "tf_recommender_lock=; Max-Age=0; Path=/; SameSite=Lax";
localStorage.removeItem("tf_recommender_lock");
```

## Testing Scenarios

### Scenario 1: Test Repeat Access (Override Enabled)

```bash
# 1. Set override
echo 'NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=false' >> .env.local

# 2. Restart server
npm run dev

# 3. Access quiz multiple times
# Expected: Quiz renders every time, no redirect
```

### Scenario 2: Test Normal Flow (Override Disabled)

```bash
# 1. Disable override
echo 'NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=true' >> .env.local

# 2. Restart server
npm run dev

# 3. Complete quiz once
# Expected: Cookie set, subsequent access redirects
```

### Scenario 3: Production Simulation

```bash
# 1. Ensure validation enabled
grep NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED .env.production
# Should show: NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=true

# 2. Build and start production mode
npm run build
npm start

# 3. Test validation
# Expected: Standard redirect behavior after first completion
```

## Implementation Details

### Quiz Page Validation Check

```typescript
useEffect(() => {
  // Check if cookie validation is enabled - only redirect if it is
  const validationEnabled =
    process.env.NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED !== "false";

  if (!validationEnabled) {
    // Validation disabled - skip redirect to allow repeat submissions
    return;
  }

  // Standard validation logic...
  const lock = readRecommenderLockFromClient();
  if (lock) {
    const destination = buildRedirectPath(lock);
    router.replace(destination);
  }
}, [router]);
```

### Form Component Cookie Persistence

```typescript
// Cookie maxAge controlled by validation flag
const cookieMaxAge =
  process.env.NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED !== "false"
    ? RECOMMENDER_LOCK_MAX_AGE_SECONDS // 30 days
    : Number(process.env.NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION || 1) * 86400; // 1 day
```

## Production Safety

### Protection Mechanisms

1. **Default Enabled**: Validation is ON by default if variable not set
2. **Explicit String Check**: Uses `!== "false"` to prevent accidental disable
3. **Separate Production Env**: `.env.production` has own configuration
4. **No Runtime Override**: Cannot be disabled via URL parameters or runtime code

### Production Checklist

Before deploying:

- [ ] Verify `.env.production` has `NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=true`
- [ ] Confirm `.env.local` is gitignored
- [ ] Test production build locally with validation enabled
- [ ] Clear all test cookies before final QA

## Troubleshooting

### Override Not Working

**Symptom**: Setting to `false` but still getting redirected

**Solutions**:

1. Restart dev server (environment variables are build-time)
2. Clear browser cache and cookies
3. Check correct `.env.local` file location (project root)
4. Verify syntax: `NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=false` (no quotes in .env)

### Unexpected Behavior in Production

**Symptom**: Validation disabled in production

**Solutions**:

1. Check `.env.production` file content
2. Verify no `.env.production.local` override
3. Rebuild: `npm run build`
4. Check build logs for environment variable values

### Cookie Persisting After Override

**Symptom**: Old cookies causing issues

**Solution**: Manually clear cookies

```javascript
// Run in browser console
document.cookie = "tf_recommender_lock=; Max-Age=0; Path=/; SameSite=Lax";
localStorage.removeItem("tf_recommender_lock");
location.reload();
```

## Best Practices

### Development Workflow

1. **Use `.env.local` for overrides** - Never commit this file
2. **Document changes** - Note when override is enabled in team chat
3. **Reset before commits** - Disable override before final testing
4. **Test both modes** - Verify quiz works with validation on/off

### Security Considerations

1. **Never disable in production** - Only for development/staging
2. **Time-limited testing** - Re-enable validation after testing
3. **Separate environments** - Use different configs for dev/prod
4. **Audit trail** - Log validation state in analytics (optional)

## Technical Reference

### Cookie Structure

```typescript
interface RecommenderLockPayload {
  pathname: string; // Quiz results page path
  search?: string; // URL query parameters
  storedAt: number; // Timestamp (milliseconds)
  version: 1; // Schema version
}
```

### Storage Locations

1. **Primary**: HTTP Cookie (`tf_recommender_lock`)
   - Max-Age: 30 days (validation on) or 1 day (validation off)
   - Path: `/`
   - SameSite: `Lax`
   - Secure: Yes (HTTPS only)

2. **Fallback**: LocalStorage (`tf_recommender_lock`)
   - Key: `tf_recommender_lock`
   - Value: URL-encoded JSON payload

### Validation Constants

```typescript
export const RECOMMENDER_LOCK_COOKIE = "tf_recommender_lock";
export const RECOMMENDER_LOCK_STORAGE_KEY = "tf_recommender_lock";
export const RECOMMENDER_LOCK_MAX_AGE_SECONDS = 60 * 60 * 24 * 30; // 30 days
```

## Version History

| Date       | Version | Changes                                               |
| ---------- | ------- | ----------------------------------------------------- |
| 2026-02-02 | 1.0     | Initial documentation - validation override mechanism |

---

**Last Updated**: February 2, 2026  
**Maintained By**: Development Team  
**Related Docs**:

- [Project Rules](.github/instructions/project-rules.instructions.md)
- [Cookie Management](./lib/navigation/recommender-lock.ts)
