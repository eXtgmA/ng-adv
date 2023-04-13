import { createReducer, on } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {
  logInFailure,
  logInSuccess,
  logOutComplete,
  registerUserFailure,
  registerUserSuccess,
  setUser,
} from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: any;
  token: string | null;
  authEnabled: boolean;
}

export const initialState: AuthState = {
  user: {},
  token: '',
  authEnabled: environment.authEnabled,
};

export const reducer = createReducer(
  initialState,
  on(registerUserSuccess, logInSuccess, (state, action) => ({
    ...state,
    user: action.user as firebase.default.User,
  })),
  on(logOutComplete, (state) => ({
    ...state,
    user: {},
    token: null,
  })),
  on(registerUserFailure, logInFailure, (state, action) => {
    console.log('register or logIn error:', action.err);
    return {
      ...state,
      user: {},
      token: null,
    };
  }),
  on(setUser, (state, action) => {
    return {
      ...state,
      user: action.user,
      token: action.token,
    };
  })
);
