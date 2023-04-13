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
  on(changeSideNavVisible, (state) => ({
    ...state,
    sideNavVisible: !state.sideNavVisible,
  })),
  on(changeSideNavPosition, (state, action) => ({
    ...state,
    sideNavPosition: action.position,
  }))
);
