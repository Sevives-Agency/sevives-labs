# Dark mode in Next.js + Tailwind — cheatsheet

Reusable patterns for a class-based dark mode in a Next.js App Router app with
Tailwind. **Generic examples.** The hard parts aren't the colors — they're the
**flash of the wrong theme** (FOUC) and the **hydration mismatch**. This solves
both.

## 1. Tell Tailwind to use a class

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class', // toggle by adding `dark` on <html>, not by OS query
  // ...
}
```

Now `dark:` variants apply whenever `<html class="dark">`:

```tsx
<div className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100" />
```

## 2. Kill the flash — set the class *before* paint

If you read `localStorage` inside React, the first paint is light, then it
snaps to dark. The fix is a **tiny blocking script in `<head>`** that runs before
the browser paints anything.

```tsx
// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          // runs before first paint — no flash
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var t = localStorage.theme;
                  var dark = t === 'dark' ||
                    (!t && matchMedia('(prefers-color-scheme: dark)').matches);
                  document.documentElement.classList.toggle('dark', dark);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

`suppressHydrationWarning` on `<html>` is required: the server can't know the
class the script just added, so React would otherwise warn about the mismatch.

## 3. The toggle

```tsx
'use client'

export function ThemeToggle() {
  function toggle() {
    const isDark = document.documentElement.classList.toggle('dark')
    localStorage.theme = isDark ? 'dark' : 'light'
  }
  return <button onClick={toggle} aria-label="Toggle theme">🌓</button>
}
```

## 4. Follow the OS until the user decides

The script above already does this: **no stored value → follow
`prefers-color-scheme`**; once the user clicks the toggle, their choice is saved
and wins. To go back to "follow OS", just `delete localStorage.theme`.

## Gotchas

- **Don't** gate the initial theme behind a `useEffect` — that runs *after* paint,
  which is exactly the flash you're trying to avoid.
- **Don't** render two different trees for light/dark on the server; render one and
  let CSS (`dark:` variants) do the switching.
- Set a sensible `<meta name="color-scheme" content="light dark">` so native
  controls (scrollbars, form fields) match the theme too.

---

*SevivɘƧ labs — engineering snippets.*
