# Quiz Validation Override Scripts

This directory contains utility scripts for managing the quiz validation override feature.

## Available Scripts

### 1. `test-quiz-override.sh`

**Purpose:** Verify current environment configuration  
**Usage:**

```bash
bash scripts/test-quiz-override.sh
```

**What it does:**

- Checks `.env.local` for validation settings
- Displays current override status
- Provides next steps and test URLs
- No changes made to configuration

**When to use:**

- Check current override status
- Verify configuration before testing
- Quick reference for test URLs

---

### 2. `activate-quiz-override.sh`

**Purpose:** Enable override and restart dev server  
**Usage:**

```bash
bash scripts/activate-quiz-override.sh
```

**What it does:**

- Checks current configuration
- Prompts to enable override if disabled
- Kills existing dev server
- Starts new server with updated environment
- Waits for server to be ready
- Provides verification URLs

**When to use:**

- First-time setup of override
- After changing `.env.local` manually
- When override not working (force restart)

---

## Quick Reference

### Check Status

```bash
bash scripts/test-quiz-override.sh
```

### Enable Override

```bash
bash scripts/activate-quiz-override.sh
```

### Manual Override Toggle

**Enable (Disable Validation):**

```bash
echo 'NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=false' > .env.local
pnpm dev
```

**Disable (Enable Validation):**

```bash
echo 'NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=true' > .env.local
pnpm dev
```

---

## Environment Variables

| Variable                                | Effect                        | Values                        |
| --------------------------------------- | ----------------------------- | ----------------------------- |
| `NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED` | Master toggle                 | `true` (default) or `false`   |
| `NEXT_PUBLIC_COOKIE_SHORT_EXPIRATION`   | Cookie lifetime when disabled | Number of days (default: `1`) |

---

## Testing Workflow

### Recommended Flow

1. **Check Status**

   ```bash
   bash scripts/test-quiz-override.sh
   ```

2. **Activate Override** (if needed)

   ```bash
   bash scripts/activate-quiz-override.sh
   ```

3. **Verify in Browser**
   - Visit: `http://localhost:3030/mx/env-debug`
   - Check: "Developer Override" status

4. **Test Quiz Pages**
   - `/mx/campana-quiz`
   - `/mx/campana-quiz-short`
   - `/mx/quiz-2`

5. **Complete Multiple Submissions**
   - Fill out quiz
   - Submit
   - Navigate back to quiz
   - Verify: No redirect, can submit again

---

## Troubleshooting

### Override Not Working

**Try this sequence:**

```bash
# 1. Verify configuration
cat .env.local | grep COOKIE_VALIDATION

# 2. Force activation
bash scripts/activate-quiz-override.sh

# 3. Verify server restarted
ps aux | grep "next dev"

# 4. Check in browser
open http://localhost:3030/mx/env-debug
```

### Server Won't Start

**Manual restart:**

```bash
# Kill all node processes on port 3030
lsof -ti:3030 | xargs kill -9

# Clear Next.js cache
rm -rf .next

# Start fresh
pnpm dev
```

---

## Production Safety

⚠️ **IMPORTANT:** These scripts are for **development only**

### Before Deploying

1. **Verify Production Config**

   ```bash
   grep COOKIE_VALIDATION .env.production
   # Should show: NEXT_PUBLIC_COOKIE_VALIDATION_ENABLED=true
   ```

2. **Test Production Build Locally**

   ```bash
   pnpm build
   npm start
   # Test that validation is enforced
   ```

3. **Remove Development Overrides**
   ```bash
   # Ensure .env.production.local doesn't exist
   rm -f .env.production.local
   ```

---

## Documentation

- **Full Guide:** `/docs/QUIZ_VALIDATION_OVERRIDE.md`
- **Implementation Summary:** `/docs/QUIZ_VALIDATION_OVERRIDE_SUMMARY.md`
- **Debug Page:** `http://localhost:3030/mx/env-debug`

---

## Support

If issues persist:

1. Check full documentation in `/docs/QUIZ_VALIDATION_OVERRIDE.md`
2. Review troubleshooting section
3. Clear browser cookies and localStorage
4. Try incognito/private browsing mode

---

**Last Updated:** February 2, 2026  
**Maintained By:** Development Team
