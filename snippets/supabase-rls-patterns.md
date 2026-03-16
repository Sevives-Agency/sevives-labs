# Supabase Row Level Security (RLS) — patterns

Reusable RLS patterns for Postgres on Supabase. **Generic examples only** — adapt
table/column names to your own schema. RLS is your last line of defense: enforce
it in the database, never trust the client.

## Mental model: deny by default

Enabling RLS on a table blocks **all** access until a policy explicitly allows it.

```sql
alter table documents enable row level security;
-- now nothing is readable/writable until a policy grants it
```

## Each user sees only their own rows

```sql
create policy "read own rows"
  on documents for select
  using (auth.uid() = user_id);

create policy "insert own rows"
  on documents for insert
  with check (auth.uid() = user_id);

create policy "update own rows"
  on documents for update
  using (auth.uid() = user_id);
```

## Public read, owner write

```sql
create policy "anyone can read"
  on posts for select using (true);

create policy "only the author writes"
  on posts for insert with check (auth.uid() = author_id);
```

## Admin override — without breaking RLS (the recursion trap)

Checking a role stored in a table that **itself** has RLS can cause infinite
recursion. Wrap the check in a `security definer` function — it runs with the
function owner's rights, side-stepping the caller's RLS:

```sql
create or replace function public.is_admin()
  returns boolean
  language sql
  security definer
  set search_path = public
as $$
  select exists (
    select 1 from profiles
    where id = auth.uid() and role = 'admin'
  );
$$;

create policy "admins read everything"
  on documents for select
  using (public.is_admin());
```

## RLS on Storage buckets

Storage objects live in `storage.objects` — same model:

```sql
create policy "public bucket is readable"
  on storage.objects for select
  using (bucket_id = 'public-assets');

create policy "only admins upload"
  on storage.objects for insert
  with check (bucket_id = 'public-assets' and public.is_admin());
```

## The keys — what bypasses RLS

- **anon / authenticated** keys → RLS is **enforced**. Safe in the browser.
- **service-role** key → **bypasses RLS entirely**. Server-only. Never ship it to
  the client bundle, never commit it, never expose it as `NEXT_PUBLIC_*`.

## Checklist

- [ ] RLS enabled on every table holding user data.
- [ ] A policy per operation you allow (select / insert / update / delete).
- [ ] Role checks via a `security definer` function (no recursion).
- [ ] `service-role` key only in a server-side env var.

## See also

- Next.js + Supabase Auth → [`./nextjs-supabase-auth-cheatsheet.md`](./nextjs-supabase-auth-cheatsheet.md)

---

*SevivɘƧ labs — engineering snippets.*
