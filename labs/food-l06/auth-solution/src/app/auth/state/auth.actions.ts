import { props } from '@ngrx/store';

import { createAction } from '@ngrx/store';
import { LoginCredentials } from '../login-credential.model';

export const registerUser = createAction(
  '[auth] register User',
  props<{ credentials: LoginCredentials }>()
);

export const registerUserSuccess = createAction(
  '[auth] registerUser Success',
  props<{ user: any }>()
);

export const registerUserFailure = createAction(
  '[auth] registerUser Failure',
  props<{ err: Error }>()
);

export const logIn = createAction(
  '[auth] logIn',
  props<{ credentials: LoginCredentials }>()
);

export const logInSuccess = createAction(
  '[auth] logInSuccess',
  props<{ user: any }>()
);

export const logInFailure = createAction(
  '[auth] logIn Failure',
  props<{ err: Error }>()
);

export const logOut = createAction('[auth] logOut');

export const logOutComplete = createAction('[auth] logOutComplete');

export const setUser = createAction(
  '[auth] setUser',
  props<{ user: any; token: string }>()
);

export const redirectToLogin = createAction('[auth] redirectToLogin');
