# Next.js SSR/SSG & hydration — cheatsheet

Quick reference distilled from migrating a marketing site from **Vite (CSR)** to
**Next.js**. This is the short, reusable version — for the full story (diagnosis,
before/after, the 18-minute migration) see the case study in
[`sevives-showcase/migration-vite-to-nextjs`](https://github.com/Sevives-Agency/sevives-showcase/tree/main/migration-vite-to-nextjs).

## Rendering modes — when to use what

| Mode | What ships | Crawlers see | Use for |
|---|---|---|---|
| **CSR** (Vite/React SPA) | empty `<div id="root">` + JS | **nothing** until JS runs | apps behind a login — never a public page that must be found/shared |
| **SSR** | full HTML built per request | everything | frequently-changing / personalized / fresh data |
| **SSG** | full HTML built at build time | everything | pages that rarely change (home, services, about) — fastest |

Rule of thumb: **anything that must be found on Google or shared on social → never pure CSR.** Decide this at stack-choice time, not three weeks in.

## The hydration rule (the #1 gotcha)

SSR renders HTML on the server, then React **hydrates** it on the client. If the
server HTML and the first client render disagree → **hydration mismatch**.

Most common cause: **non-deterministic values during render** — anything that
differs between server and client:

- `Math.random()`, `Date.now()`, `new Date()`
- `window.*`, `document.*`, `localStorage`, `navigator.*`

**Fix — render that part client-only, after mount:**

```tsx
'use client'
import { useState, useEffect } from 'react'

const [mounted, setMounted] = useState(false)
useEffect(() => setMounted(true), [])

return (
  <div>
    {mounted && /* non-deterministic UI here */}
  </div>
)
```

## Images: `<img>` → `next/image`

Native `<img>` triggers warnings and skips optimization. Use the `Image` component:

```tsx
import Image from 'next/image'

<Image src="/logo.png" alt="Logo" width={128} height={64} />
```

For images whose dimensions vary at runtime (a logo marquee, a carousel),
`unoptimized` is an acceptable escape hatch:

```tsx
<Image src={item.src} alt={item.label} width={100} height={40} unoptimized />
```

## The "N" badge = your barometer

The Next.js DevTools **"N" indicator** is the fastest feedback loop while debugging:

- **Red** = a hydration error (or other issue) to fix.
- **Black** = clean.

## See also

- Full case study → [`sevives-showcase/migration-vite-to-nextjs`](https://github.com/Sevives-Agency/sevives-showcase/tree/main/migration-vite-to-nextjs)
- The original CSR build, kept as an anti-pattern → [`_bad-examples/old-vite-site/`](../_bad-examples/old-vite-site)

---

*SevivɘƧ labs — engineering snippets.*
