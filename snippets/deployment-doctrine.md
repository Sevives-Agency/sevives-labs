# Deployment doctrine — patterns

Reusable deployment doctrine distilled from real projects. **Generic** — the
principles, not any specific stack. The goal: ship often, ship calmly, and always
be able to undo.

## `main` is always deployable

The default branch is sacred: it must build and pass at every commit. Work happens
on short-lived feature branches, never directly on `main`.

```
feature branch → PR → checks pass → squash merge → main → auto-deploy to prod
```

Squash keeps `main` history one-clean-commit-per-change — easy to read, easy to
revert.

## Every PR gets a preview

A throwaway deployment per PR (a preview URL) lets you **review the running thing**,
not just the diff. Bugs that hide in a diff jump out in a live preview.

## Environments are isolated, secrets are never committed

- One config per environment (preview / staging / prod); same code, different vars.
- Secrets live in the platform's env store, never in git, never in the client
  bundle. A leaked key means rotate, not "we'll fix it later".

## Migrations are backward-compatible (expand → contract)

Never ship a migration that breaks the currently-running version:

1. **Expand** — add the new column/table; deploy code that writes both.
2. **Backfill** — migrate data.
3. **Contract** — once nothing reads the old shape, remove it.

This keeps deploys reversible — old and new code both work mid-rollout.

## Every deploy is reversible

Know your rollback **before** you ship: redeploy the previous build, or revert the
merge. If a change can't be rolled back (a destructive migration), it gets its own
deploy and extra eyes.

## Don't deploy what you can't watch

Ship when you can watch it land — not at 6pm on a Friday. Pair risky releases with
a glance at logs/metrics for a few minutes after.

## Checklist

- [ ] Change rode in via PR + green checks + squash merge.
- [ ] Previewed live, not just diffed.
- [ ] Secrets in the env store, not in the repo.
- [ ] Migration is backward-compatible (expand → contract).
- [ ] Rollback path known before shipping.
- [ ] Someone's watching for the first few minutes.

---

*SevivɘƧ labs — engineering snippets.*
