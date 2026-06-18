# Smooth animation without glitches — lerp, damp & snap

Notes on the two classic animation bugs: **frame-rate-dependent lerp** and the
**snap pop**. Generic — applies to any `requestAnimationFrame` loop (canvas, R3F,
DOM transforms).

## The bug: `lerp(a, b, 0.1)` every frame is frame-rate-dependent

```js
// ❌ looks right at 60fps, twice as fast at 120fps, sluggish at 30fps
current += (target - current) * 0.1
```

The factor `0.1` means "10% of the remaining distance **per frame**" — but "per
frame" isn't "per second". On a 120 Hz display it runs twice as often → the motion
is twice as fast. Same code, different feel on every device. That's the glitch
users report as "it's jittery on my machine".

## The fix: exponential damping with delta time

```js
// ✅ frame-rate independent — same speed everywhere
const smoothing = 8 // higher = snappier
current += (target - current) * (1 - Math.exp(-smoothing * dt))
```

`dt` = seconds since the last frame. `1 - exp(-k·dt)` is the frame-rate-correct
version of a fixed lerp factor. With React Three Fiber,
`THREE.MathUtils.damp(current, target, smoothing, dt)` does exactly this.

## The snap pop

lerp/damp never actually *reaches* the target — it gets exponentially close
forever. Code that snaps when "close enough" pops if the threshold is too coarse,
and never settles (keeping the loop alive) if there's no snap at all.

```js
if (Math.abs(target - current) < 0.001) {
  current = target          // settle exactly…
  // …and stop the loop / mark idle so you're not animating a static value
} else {
  current += (target - current) * (1 - Math.exp(-smoothing * dt))
}
```

- Threshold too big → visible jump (the "pop").
- No threshold → sub-pixel churn forever, wasted frames, battery drain.

## Gotchas

- **Angles** — lerping `359° → 1°` goes the long way round. Wrap to the shortest
  delta (`((b - a + 540) % 360) - 180`) before damping.
- **First frame** — a huge `dt` (tab was backgrounded) makes everything jump.
  Clamp it: `dt = Math.min(dt, 0.05)`.
- **Don't** mix a fixed-step physics update with a damped visual without
  interpolating between steps — that's its own stutter.

---

*SevivɘƧ labs — engineering snippets.*
