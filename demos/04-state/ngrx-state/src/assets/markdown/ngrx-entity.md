- Show the use of `Store<DemoState>`, explain EntityAdapter and why it is using this structure

```typescript
interface EntityState<T> {
    ids: string[];
    entities: { [id: string]: T };
}
```

- Explain `this.store.dispatch(loadDemos());` in `demo-container.component.ts`
```typescript
export class DemoFacade {
  store = inject(Store<DemoState>)
  init() {
    this.hasLoaded().subscribe((loaded) => {
      if (!loaded) {
        this.store.dispatch(DemoActions.loaddemos());
```
- Examin how the demo facade uses the ngrx store and provides the data to the component

```typescript
getDemos() {
    return this.store.select(getAllDemos)
  }
```
