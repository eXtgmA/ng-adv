import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, pluck } from 'rxjs/operators';
import { FBAuthService } from '../fbauth.service';
import { LoginCredentials } from '../login-credential.model';
import {
  logIn,
  logInFailure,
  logInSuccess,
  logOut,
  logOutComplete,
  registerUser,
  registerUserSuccess,
  registerUserFailure,
} from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private as: FBAuthService,
  ) { }

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logIn),
      pluck('credentials'),
      exhaustMap((pl: LoginCredentials) =>
        this.as
          .logIn(pl.email, pl.password)
          .then((cred) => logInSuccess({ user: cred }))
          .catch((err: Error) => logInFailure({ err }))
      )
    )
  );

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerUser),
      pluck('credentials'),
      exhaustMap((pl: LoginCredentials) =>
        this.as
          .createUser(pl.email, pl.password)
          .then((cred) => registerUserSuccess({ user: cred }))
          .catch((err) => registerUserFailure(err))
      )
    )
  );

  logoutUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logOut),
      pluck('payload'),
      exhaustMap(() => this.as.logOut().then(() => logOutComplete()))
    )
  );
}
