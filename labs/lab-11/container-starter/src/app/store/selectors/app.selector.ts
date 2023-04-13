import { AppState, appFeatureKey } from '../reducers/app.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getAppState = createFeatureSelector<AppState>(appFeatureKey);

export const getSideNavVisible = createSelector(
  getAppState,
  (state: AppState) => state.sideNav.Visible
);

export const getSideNavEnabled = createSelector(
  getAppState,
  (state: AppState) => state.sideNav.Enabled
);

export const getSideNavPosition = createSelector(
  getAppState,
  (state: AppState) => state.sideNav.Position
);
