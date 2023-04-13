import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthFacade } from './state/auth.facade';

@Injectable({
  providedIn: 'root',
})
export class FBAuthService {
  private persistence = 'none';

  constructor(
    private fireAuth: AngularFireAuth,
    private authFacade: AuthFacade
  ) {
    this.onUserChanged();
  }

  private onUserChanged() {
    this.fireAuth.authState.subscribe((user: any) =>
      this.authFacade.userChanged(user)
    );
  }

  isAuthenticated() {
    return this.authFacade.isAuthenticated();
  }

  createUser(
    email: string,
    password: string
  ): Promise<firebase.default.auth.UserCredential> {
    return new Promise<firebase.default.auth.UserCredential>(
      (resolve, reject) => {
        this.fireAuth.setPersistence(this.persistence).then(() => {
          this.fireAuth
            .createUserWithEmailAndPassword(email, password)
            .then((cred) => resolve(cred))
            .catch((err) => {
              console.log('Error logging in', err);
              reject(err);
            });
        });
      }
    );
  }

  logIn(
    email: string,
    password: string
  ): Promise<firebase.default.auth.UserCredential> {
    return new Promise<firebase.default.auth.UserCredential>(
      (resolve, reject) => {
        this.fireAuth.setPersistence(this.persistence).then(() => {
          this.fireAuth
            .signInWithEmailAndPassword(email, password)
            .then((cred) => {
              return resolve(cred);
            })
            .catch((err) => {
              console.log('Error logging in', err);
              reject(err);
            });
        });
      }
    );
  }

  logOut() {
    return this.fireAuth
      .signOut()
      .catch((err) => console.log('Error logging out', err));
  }
}
