# Next.js (App Router) + Supabase Auth — cheatsheet

Reusable patterns for wiring authentication into a Next.js App Router app with
Supabase. Distilled from a real build. **No secrets here** — keys live in
`.env.local` (git-ignored); the snippets below use env-var names only.

## Two clients: browser + server (`@supabase/ssr`)

```ts
// lib/supabase/client.ts — browser
import { createBrowserClient } from '@supabase/ssr'

export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
```

```ts
// lib/supabase/server.ts — server (reads cookies)
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export const createClient = async () => {
  const cookieStore = await cookies()
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (toSet) =>
          toSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)),
      },
    },
  )
}
```

## Protected routes: check on the server

Guard a route group with a server-side session check in its layout — no flash of
private content, no client-only guard to bypass:

```tsx
// app/(dashboard)/layout.tsx
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export default async function DashboardLayout({ children }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')
  return <>{children}</>
}
```

## Role-based access — a column, not hardcoded emails

Listing admin emails in code is a trap. Put the role in the database:

```sql
alter table profiles
  add column role text not null default 'user'
  check (role in ('user', 'admin'));
```

```ts
// lib/config/admin.ts
import { createClient } from '@/lib/supabase/server'

export async function isAdmin() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return false
  const { data } = await supabase
    .from('profiles').select('role').eq('id', user.id).single()
  return data?.role === 'admin'
}
```

## MFA / TOTP (Supabase Auth)

- **Enroll**: `supabase.auth.mfa.enroll({ factorType: 'totp' })` → returns a QR code
  to scan (Google Authenticator, Authy).
- **Login**: after password, if a factor exists, `challenge` + `verify` the 6-digit code.
- **Gotcha**: exclude the `setup-mfa` route from the protected-layout redirect, or you
  get a **redirect loop** (the page that enrolls MFA can't itself require completed MFA).

## The golden rule

`.env*` is in `.gitignore`. The Supabase URL and keys live there and are **never
committed**. The anon key is public-safe by design; the **service-role key is
server-only** and must never reach the client bundle.

## See also

- SSR & hydration cheatsheet → [`./nextjs-ssr-hydration-cheatsheet.md`](./nextjs-ssr-hydration-cheatsheet.md)

---

*SevivɘƧ labs — engineering snippets.*
