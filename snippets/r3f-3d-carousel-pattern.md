# 3D carousel with React Three Fiber — pattern

Reusable pattern for arranging cards on a ring and rotating to a selected index,
with React Three Fiber + drei. **Generic example** — the math and the smoothing,
not any specific look. Adapt radius, easing, and materials to your own design.

## 1. Place N items evenly on a circle

Each item sits at an angle `i / N · 2π`; convert to x/z with `sin`/`cos`.

```tsx
function Ring({ items, radius = 4 }: { items: Item[]; radius?: number }) {
  return (
    <group>
      {items.map((item, i) => {
        const a = (i / items.length) * Math.PI * 2
        const x = Math.sin(a) * radius
        const z = Math.cos(a) * radius
        return <Card key={item.id} item={item} position={[x, 0, z]} rotationY={a} />
      })}
    </group>
  )
}
```

## 2. Rotate the whole ring to a target index

Keep a target rotation; **don't snap** — ease toward it every frame so input feels
fluid. `maath`'s `damp` is frame-rate independent (better than a raw `lerp`).

```tsx
import { damp } from 'maath/easing'

function Carousel({ items }: { items: Item[] }) {
  const ring = useRef<THREE.Group>(null!)
  const [index, setIndex] = useState(0)
  const step = (Math.PI * 2) / items.length

  useFrame((_, dt) => {
    damp(ring.current.rotation, 'y', -index * step, 0.25, dt)
  })

  return (
    <group ref={ring}>
      {/* ...Ring items, with onClick={() => setIndex(i)} ... */}
    </group>
  )
}
```

## 3. Make cards face the viewer

Use drei's `<Billboard>` so each card always faces the camera, or orient them
outward with the `rotationY` from step 1 — pick per the effect you want.

```tsx
import { Billboard, Image } from '@react-three/drei'

function Card({ item, position }: CardProps) {
  return (
    <Billboard position={position}>
      <Image url={item.src} scale={[2, 2.6, 1]} transparent />
    </Billboard>
  )
}
```

## 4. Load textures under Suspense

`<Image>`/`useTexture` suspend while loading — wrap the scene so you control the
fallback instead of getting a flash of missing planes.

```tsx
<Canvas camera={{ position: [0, 0, 8] }}>
  <Suspense fallback={null}>
    <Carousel items={items} />
  </Suspense>
</Canvas>
```

## Gotchas

- **Frame-rate independence:** smooth with `dt` (`damp(..., dt)`), never assume 60fps
  — a `lerp` with a fixed factor drifts across refresh rates.
- **Reuse geometry/material:** define a shared plane geometry once; don't allocate
  per card per frame.
- **Wrap-around:** advancing past the last item should take the **short way** round —
  track a continuous index and `damp` the raw radians, not a modulo'd one.
- **Pointer vs orbit:** if you add `OrbitControls`, gate card clicks so a drag to
  rotate doesn't register as a selection.

## Checklist

- [ ] Items placed by angle with `sin`/`cos`; one shared geometry.
- [ ] Rotation eased with `dt` (frame-rate independent), not snapped.
- [ ] Textures under `<Suspense>` with a deliberate fallback.
- [ ] Short-way wrap-around; clicks gated against drags.

---

*SevivɘƧ labs — engineering snippets.*
