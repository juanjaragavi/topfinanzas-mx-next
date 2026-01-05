# Category Page Update Protocol

**Scope**: `app/tarjetas/page.tsx` and `app/prestamos/page.tsx`

## Overview

The category index pages (`app/tarjetas/page.tsx` and `app/prestamos/page.tsx`) serve as the primary aggregation views for financial products. To ensure these pages always reflect the current inventory of Mexican products and avoid legacy content regressions, a strict update protocol must be followed.

## Protocol

1. **Dynamic Data Source**:
    - These pages MUST NOT contain hardcoded product lists.
    - They MUST import `ALL_POSTS` from `@/lib/data/posts`.
    - They MUST filter `ALL_POSTS` based on `category` ("Soluciones Financieras") and `subCategory` ("creditCards" or "loans").

2. **Synchronization**:
    - Any new product added to `app/soluciones-financieras/` must be registered in `lib/data/posts.ts`.
    - Once registered in `lib/data/posts.ts`, the product will automatically appear in the category pages due to the dynamic filtering logic.

3. **Verification**:
    - When adding a new product, verify that it appears correctly on the respective category page (`/tarjetas` or `/prestamos`).
    - Ensure the product metadata (title, description, image, date, type) is correctly populated in `lib/data/posts.ts`.

## Implementation Pattern

### Tarjetas (`app/tarjetas/page.tsx`)

```tsx
import { ALL_POSTS } from "@/lib/data/posts";

// ...

const creditCardsContent = ALL_POSTS.filter(
  (post) =>
    post.category === "Soluciones Financieras" &&
    post.subCategory === "creditCards"
).map((post) => ({
  // ... map fields
}));
```

### Préstamos (`app/prestamos/page.tsx`)

```tsx
import { ALL_POSTS } from "@/lib/data/posts";

// ...

const loansContent = ALL_POSTS.filter(
  (post) =>
    post.category === "Soluciones Financieras" && post.subCategory === "loans"
).map((post) => ({
  // ... map fields
}));
```

## Forbidden Practices

- **Hardcoding Products**: Do not manually add product objects to the content arrays in these pages.
- **Legacy Content**: Do not re-introduce UK-specific or legacy content.
