# Splitting large React components — patterns

Reusable patterns for breaking up a component file that grew too big.
**Generic examples.** The goal isn't "more files" — it's **one clear
responsibility per unit**, so each piece is readable and testable on its own.

## When to split (the signals)

- The file mixes **data fetching + state + layout + business rules**.
- You scroll to find a `return`, or the JSX is hundreds of lines.
- A change in one feature forces you to read unrelated code in the same file.

Don't split on line count alone — split on **responsibilities**.

## 1. Pull stateful logic into a custom hook

The fastest win: move `useState`/`useEffect`/handlers out of the view.

```tsx
// useCart.ts — logic, no JSX
export function useCart() {
  const [items, setItems] = useState<Item[]>([])
  const add = (i: Item) => setItems((s) => [...s, i])
  const total = useMemo(() => items.reduce((n, i) => n + i.price, 0), [items])
  return { items, add, total }
}
```

```tsx
// Cart.tsx — view, no logic
export function Cart() {
  const { items, add, total } = useCart()
  return <CartView items={items} total={total} onAdd={add} />
}
```

The hook is now unit-testable without rendering anything.

## 2. Extract subcomponents by boundary, not by size

Split where the UI has a natural seam — a row, a panel, a field — and give each
its **own file**. Pass data down via props; keep them presentational (no fetching).

```
ProductPage/
  index.tsx          // composes the page
  ProductGallery.tsx
  ProductInfo.tsx
  AddToCartForm.tsx
  useProduct.ts      // data + state
```

## 3. Move types, constants, and pure helpers out

Anything that isn't a component or a hook (types, `const` config, formatters)
goes to `types.ts` / `constants.ts` / `utils.ts`. They have no React deps and are
trivially testable.

## 4. A barrel keeps imports clean

```ts
// ProductPage/index.tsx exports the public surface
export { ProductPage } from './ProductPage'
```

Consumers import `@/ProductPage`, not the internal files — so you can reshuffle
internals without touching call sites.

## Gotcha: don't over-abstract

- A subcomponent used **once** with 8 props is often worse than inline JSX. Extract
  for clarity or reuse, not reflexively.
- Keep extracted pieces **colocated** with their parent (same folder). A shared
  folder is for things actually shared by 2+ features.

## Checklist

- [ ] Logic in hooks, JSX in components — no file does both heavily.
- [ ] One component per file; one clear responsibility.
- [ ] Types / constants / pure utils live outside components.
- [ ] Extractions are colocated; only truly shared code is promoted.

---

*SevivɘƧ labs — engineering snippets.*
