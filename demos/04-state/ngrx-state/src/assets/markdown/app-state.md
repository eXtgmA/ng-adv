- Examine root state in /app/state/* and explain `AppState` and `ActionReducerMap`:

```typescript
export interface AppState {
  ...
  sideNavVisible: boolean;
  sideNavPosition: string;
}
export const reducers: ActionReducerMap<State> = {app: appReducer};
```

- Explain Action Creators and  the other artifacts:

```typescript
import { createAction, props } from '@ngrx/store';
export const toggleSideNav = createAction('[Menu] toggleSideNavVisible');
export const changeSideNavVisible = createAction('[Menu] changeSideNavVisible',props<{ visible: boolean }>());
export const changeSideNavPosition = createAction('[Menu] changeSideNavPosition',props<{ position: string }>());
```

- Explain the reducer:

```typescript
export const appReducer = createReducer(initialAppState,
  on(toggleSideNav, (state) => ({
    ...state,
    sideNavVisible: !state.sideNavVisible,
  })),
  on(changeSideNavVisible, (state, action) => ({
    ...state,
    sideNavVisible: action.visible,
  })),
  ...
```

- In a live demo replace menu.service.ts with menu.facade.ts in `demo-container.component.ts` and `navbar.component.ts`
