# Validate a company registration number — patterns

Reusable patterns for validating a company / VAT number before you trust it.
**Generic examples** — adapt the country rules to your own registry. The golden
rule: **check the format locally first, hit the registry second.**

## Two-step validation

1. **Format + checksum** — free, instant, offline. Rejects 99% of typos and junk
   before you make a single network call.
2. **Existence lookup** — confirm the number maps to a real, active entity via an
   open registry. Slower, rate-limited, and can be down — so it's a second gate,
   never the first.

## Step 1 — checksum (example: Belgian enterprise number, mod-97)

A Belgian enterprise/VAT number is 10 digits; the last 2 are a check computed
from the first 8. Same idea exists for most national schemes — only the algorithm
changes.

```ts
// Pure function, no I/O — safe to run on the client AND the server.
export function isValidBeEnterpriseNumber(raw: string): boolean {
  const digits = raw.replace(/\D/g, '') // strip dots, spaces, "BE" prefix
  if (digits.length !== 10) return false
  if (!/^[01]/.test(digits)) return false // valid range starts with 0 or 1
  const base = Number(digits.slice(0, 8))
  const check = Number(digits.slice(8, 10))
  return check === 97 - (base % 97)
}
```

## Step 2 — confirm against an open registry (server-side)

Run the lookup **on the server**: registries throttle by IP, and you don't want
to leak your usage pattern (or any API key) from the browser.

```ts
// app/api/validate-company/route.ts
export async function POST(req: Request) {
  const { number } = await req.json()

  // cheap gate first — never spend a network call on a malformed number
  if (!isValidBeEnterpriseNumber(number)) {
    return Response.json({ ok: false, reason: 'format' }, { status: 422 })
  }

  try {
    // EU VAT: VIES (open, no key). National datasets work the same way.
    const r = await fetch(VIES_ENDPOINT, { /* ... */ signal: AbortSignal.timeout(4000) })
    const data = await r.json()
    return Response.json({ ok: data.valid, name: data.name ?? null })
  } catch {
    // registry down / slow → degrade, don't block
    return Response.json({ ok: null, reason: 'registry_unavailable' })
  }
}
```

## The gotcha: never let a flaky third party block signup

The registry **will** be slow or down at some point. Decide the failure mode up
front:

- **Hard-require** the lookup only when it's legally necessary (e.g. invoicing).
- Otherwise treat `ok: null` as "format valid, existence unconfirmed" — let the
  user through and verify asynchronously. A passing checksum is already a strong
  signal.

Always set a **timeout** (`AbortSignal.timeout`) and **cache** results — the same
number gets submitted again and again.

## Checklist

- [ ] Checksum runs first, offline, on every submit.
- [ ] Registry lookup is server-side, timed-out, and cached.
- [ ] A registry outage degrades gracefully — it never hard-blocks the user.
- [ ] No API key or registry credential ever reaches the client bundle.

---

*SevivɘƧ labs — engineering snippets.*
