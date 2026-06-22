# The "audit, then fix" prompt pattern

A reusable prompting pattern: **separate diagnosis from action**. Ask the model to
*find* problems first, in one pass, and only *fix* them in a second pass.
Provider-agnostic. Works for code review, copy editing, config audits — anything
where "spot the issues" and "rewrite" are different skills.

## Why split them

When you ask "fix this", the model starts rewriting immediately — and tends to:

- fix the obvious thing and miss the rest (it stopped looking once it started writing),
- silently "fix" things that weren't broken,
- hand back a new version with no explanation of what was actually wrong.

Auditing first forces a complete pass over the input **before** any change, so the
fix step works from a full list instead of the first problem it noticed.

## The pattern

**Pass 1 — audit (no edits):**

```
Review X. List every issue as a numbered list:
<id> — <where> — <what's wrong> — <severity>.
Do NOT rewrite or fix anything yet. If you find nothing, say so.
```

**Pass 2 — fix (from the audit):**

```
Here is the audit. Fix items 1, 3 and 4 only. For each, show the change and
say which audit item it addresses. Leave everything else untouched.
```

## Why it works better

- **Coverage** — the audit is a checklist; nothing gets dropped mid-rewrite.
- **Control** — you choose which findings to act on; not every "issue" is real.
- **Reviewable** — every change maps back to a numbered finding.
- **Cheap iteration** — re-running only the fix pass is cheap; you keep the audit.

## Variations

- **Self-audit before answering** — "First list what could be wrong with your
  draft, then give the final version." One message, two phases.
- **Severity gate** — "Fix only `critical` and `high`; list the rest as TODO."
- **Adversarial audit** — a second pass whose only job is to find what the first
  audit *missed*.

---

*SevivɘƧ labs — engineering snippets.*
