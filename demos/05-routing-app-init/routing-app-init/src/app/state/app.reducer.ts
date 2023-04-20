import { MatDrawerMode } from '@angular/material/sidenav';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Customer } from '../app-init/customer.model';
import { User } from '../user/user.model';
import { changeSideNavPosition, changeSideNavVisible, toggleLoggedIn, togglePrimeMember, toggleSideNav } from './app.actions';
import { CustomersActions } from '../customers/state/customers.actions';

export const appFeatureKey = 'app';

export interface AppState extends EntityState<Customer> {
  sideNavVisible: boolean;
  sideNavPosition: MatDrawerMode;
  title: string;
  user: User;
}

export const customerAdapter: EntityAdapter<Customer> =
  createEntityAdapter<Customer>();

export const initialAppState: AppState = customerAdapter.getInitialState({
  title: 'Advanced Angular Development',
  user: {
    name: 'Giro the Galgo',
    isLoggedIn: false,
    isPrimeMember: false
  },
  sideNavVisible: true,
  sideNavPosition: 'side',
});

export const appReducer = createReducer(
  initialAppState,
  on(CustomersActions.loadcustomerssuccess, (state, action) => {
    return customerAdapter.setAll(action.items, { ...state });
  }),
  on(toggleLoggedIn, (state, action) => {
    return {
      ...state,
      user: { ...state.user, isLoggedIn: !state.user.isLoggedIn },
    };
  }),
  on(togglePrimeMember, (state, action) => {
    return {
      ...state,
      user: { ...state.user, isPrimeMember: !state.user.isPrimeMember },
    };
  }),
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
    sideNavPosition: action.position as MatDrawerMode,
  })),
);
