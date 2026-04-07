# Multi-step onboarding form — patterns

Reusable patterns for a multi-step signup / onboarding flow in React / Next.js.
**Generic examples** — no business rules, no real schema.

## State: one source of truth, a step index

Keep all answers in a single object and track the current step. Don't scatter
state across components.

```tsx
'use client'
import { useState } from 'react'

type Data = { firstName?: string; email?: string; address?: Address }

const [step, setStep] = useState(0)
const [data, setData] = useState<Data>({})

const update = (patch: Partial<Data>) => setData((d) => ({ ...d, ...patch }))
```

## Validate per step, before advancing

Each step validates only its own fields; you can't reach step N+1 with step N
invalid.

```tsx
const steps = [
  { key: 'identity', validate: (d: Data) => !!d.firstName },
  { key: 'contact',  validate: (d: Data) => /\S+@\S+\.\S+/.test(d.email ?? '') },
  { key: 'address',  validate: (d: Data) => isValidAddress(d.address) },
]

const next = () => {
  if (!steps[step].validate(data)) return // show errors, stay
  setStep((s) => Math.min(s + 1, steps.length - 1))
}
```

## Address sub-form: structured fields, not one free-text blob

Split into `street`, `number`, `postalCode`, `city`, `country`. Easier to
validate, normalize, and reuse than a single textarea.

```tsx
type Address = {
  street: string; number: string
  postalCode: string; city: string; country: string
}
```

## Persist progress so a refresh doesn't wipe it

Save the draft (localStorage for a quick win, or a `draft` row server-side for
cross-device). Restore on mount.

```tsx
useEffect(() => {
  const saved = localStorage.getItem('onboarding')
  if (saved) setData(JSON.parse(saved))
}, [])
useEffect(() => {
  localStorage.setItem('onboarding', JSON.stringify(data))
}, [data])
```

## Always re-validate on the server at final submit

Client validation is UX, not security. Re-check everything in the server action /
route handler before writing anything.

## Checklist

- [ ] Single state object + step index.
- [ ] Per-step validation gates the "next" button.
- [ ] Structured address fields.
- [ ] Draft persistence (resume after refresh).
- [ ] Server-side re-validation on submit.

---

*SevivɘƧ labs — engineering snippets.*
