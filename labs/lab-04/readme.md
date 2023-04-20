# Migrate Stateful Service to NgRx

## Tasks

- Refactor the "food"-folder to be a lazy loaded feature module 
- Refactor MenuService to use NgRx. You can take the demo app as a reference or use the guide below

## Guide: Getting Started with NgRx

NgRx installation:

```
npm i @ngrx/store @ngrx/effects @ngrx/entity @ngrx/data -S
npm i @ngrx/store-devtools -D
```

## Guide: Migrate MenuServie to NgRx

### 1. Create the store

Create a new folder called state inside the root folder and add the following code to index.ts:

```typescript
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { appReducer, AppState } from './app.reducer';

export interface State {
  app: AppState;
}

export const reducers: ActionReducerMap<State> = {
  app: appReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
```

>Note: You might have an import error as the appReducer is not yet created. We will create it in the next steps.

Create the actions in `app.actions.ts`:

```typescript   
import { createAction, props } from '@ngrx/store';

export const toggleSideNav = createAction('[Menu] toggleSideNavVisible');

export const changeSideNavVisible = createAction(
  '[Menu] changeSideNavVisible',
  props<{ visible: boolean }>()
);

export const changeSideNavPosition = createAction(
  '[Menu] changeSideNavPosition',
  props<{ position: string }>()
);
```

Create the reducer in `app.reducer.ts`:

```typescript
import { createReducer, on } from '@ngrx/store';
import {
  changeSideNavPosition,
  changeSideNavVisible,
  toggleSideNav,
} from './app.actions';

export const appFeatureKey = 'app';

export interface AppState {
  sideNavVisible: boolean;
  sideNavPosition: string;
}

export const initialAppState: AppState = {
  sideNavVisible: true,
  sideNavPosition: 'side',
};

export const appReducer = createReducer(
  initialAppState,
  on(toggleSideNav, (state) => ({
    ...state,
    sideNavVisible: !state.sideNavVisible,
  })),
 on(changeSideNavVisible, (state, action) => ({
    ...state,
    sideNavVisible: action.visible,
  })),
  on(changeSideNavPosition, (state, action) => ({
    ...state,
    sideNavPosition: action.position,
  }))
);
```

Create the selectors in `app.selectors.ts`:

```typescript
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { appFeatureKey, AppState } from './app.reducer';

export const getAppState = createFeatureSelector<AppState>(appFeatureKey);

export const getSideNavVisible = createSelector(
  getAppState,
  (state: AppState) => state.sideNavVisible
);

export const getSideNavPosition = createSelector(
  getAppState,
  (state: AppState) => state.sideNavPosition
);
```

Create a menu.facades.ts file and add the following code:

```typescript
import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { tap } from 'rxjs/operators';
import {
  changeSideNavPosition,
  changeSideNavVisible,
  toggleSideNav
} from './app.actions';
import { AppState } from './app.reducer';
import {
  getSideNavPosition, getSideNavVisible
} from './app.selectors';

@Injectable({
  providedIn: 'root',
})
export class MenuFacade {

  breakpointObserver = inject(BreakpointObserver);
  store = inject(Store<AppState>);

  constructor() {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(
        tap((matchesBreakpoints) => {
          console.log("matchesBreakpoint: ", matchesBreakpoints.matches);
          const position = matchesBreakpoints.matches ? 'over' : 'side';
          const visible = matchesBreakpoints.matches ? false : true;
          this.store.dispatch(changeSideNavVisible({ visible }));
          this.store.dispatch(changeSideNavPosition({ position }));
        })
      ).subscribe();
  }

  getSideNavVisible() {
    return this.store.select(getSideNavVisible);
  }

  getSideNavPosition() {
    return this.store.select(getSideNavPosition);
  }

  toggleMenuVisibility() {
    this.store.dispatch(toggleSideNav());
  }
}
```

Add the following modules and imports to `app.module.ts`:

```typescript
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './state';
import { environment } from 'src/environments/environment';

...

StoreModule.forRoot(reducers),
StoreDevtoolsModule.instrument({
    logOnly: environment.production,
}),
```

Run the app and check the [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd). You should see the initial state of the app.

![Redux DevTools](_images/redux-dev-tools.png)

Open `navbar.component.ts` and inject the MenuFacade insted of the MenuService:

```typescript
constructor(private ms: MenuFacade) { }

...

toggleMenu() {
    this.ms.toggleMenuVisibility();
}
```

Open `app.component.ts` and inject the MenuFacade insted of the MenuService:

```typescript
constructor(private ms: MenuFacade) { }
```

Update the code in in app.component.html:

```html
<mat-sidenav
    #sidenav
    [opened]="ms.getSideNavVisible() | async"
    [mode]="ms.getSideNavPosition() | async"
    class="sidebar">
    Sidenav content
</mat-sidenav>
```

Congratulations! You have successfully migrated the responsive side menu to NgRx.
