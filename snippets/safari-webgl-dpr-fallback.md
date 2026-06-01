# Safari & low-DPR fallback for WebGL / R3F — cheatsheet

Reusable patterns for keeping a WebGL / React Three Fiber scene crisp **and** safe
across browsers — especially **Safari** and **low-DPR displays** (`devicePixelRatio < 2`,
e.g. an external monitor). **Generic examples.** A scene tuned on a Retina Mac can
look blurry, jagged, or just fail elsewhere — plan the fallback up front.

## 1. Clamp the pixel ratio — don't render at 3×

Let R3F cap the DPR: render sharp on Retina, but never pay for 3× on a phone.

```tsx
<Canvas dpr={[1, 2]}> {/* min 1, max 2 — never above */}
  {/* scene */}
</Canvas>
```

Reading `window.devicePixelRatio` once and hard-coding it is the classic bug: it's
**wrong after the user drags the window to another monitor**. Let the renderer
manage it, or listen for changes.

## 2. Detect low-DPR / no-WebGL and swap in a poster

When `dpr < 2` (or WebGL is unavailable), a heavy 3D scene often isn't worth it —
show a crisp static image instead.

```tsx
function Hero() {
  const [use3D, setUse3D] = useState(false)
  useEffect(() => {
    const dpr = window.devicePixelRatio || 1
    const gl = document.createElement('canvas').getContext('webgl2')
    setUse3D(dpr >= 2 && !!gl) // gate on capability, after mount
  }, [])

  return use3D ? <Scene /> : <img src="/poster.avif" alt="" /> // SSR-safe fallback
}
```

Gate **after mount** — `devicePixelRatio` and WebGL don't exist during SSR, so the
server always renders the poster, then the client upgrades.

## 3. Safari's specific quirks

- **Color looks off** — Safari is strict about color management. Set
  `gl={{ outputColorSpace: THREE.SRGBColorSpace }}` and test there explicitly.
- **Context loss** — Safari drops the WebGL context more eagerly (low memory, tab
  backgrounded). Listen for `webglcontextlost` and restore or fall back gracefully.
- **`antialias`** can be expensive on iOS — prefer a cheap post-AA (FXAA/SMAA) or
  disable it on low-DPR where it matters least.

## 4. Respect the user

```tsx
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
// → render the poster (or a still frame), skip the animation loop entirely
```

## Checklist

- [ ] `dpr` clamped via the `Canvas` (`[1, 2]`), not read once and hard-coded.
- [ ] WebGL capability + DPR gated **after mount**; SSR renders the poster.
- [ ] Safari tested directly: color space, context-loss handling.
- [ ] `prefers-reduced-motion` falls back to a still image.

---

*SevivɘƧ labs — engineering snippets.*
