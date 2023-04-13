import { Action } from '@ngrx/store';

export enum AppActionTypes {
  SetSideNavEnabled = '[App] SetSideNavEnabled',
  ToggleSideNavVisible = '[App] ToggleSideNavVisible',
  ChangeSideNavVisible = '[App] ChangeSideNavVisible',
  ChangeSideNavPosition = '[App] ChangeSideNavPosition',
}

export class ToggleSideNavVisible implements Action {
  readonly type = AppActionTypes.ToggleSideNavVisible;
}

export class SetSideNavEnabled implements Action {
  readonly type = AppActionTypes.SetSideNavEnabled;
  constructor(public payload: boolean) {}
}

export class ChangeSideNavVisible implements Action {
  readonly type = AppActionTypes.ChangeSideNavVisible;
  constructor(public payload: boolean) {}
}

export class ChangeSideNavPosition implements Action {
  readonly type = AppActionTypes.ChangeSideNavPosition;
  constructor(public payload: string) {}
}

export type AppActions =
  | ToggleSideNavVisible
  | ChangeSideNavPosition
  | ChangeSideNavVisible
  | SetSideNavEnabled;
