import { Component } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthFacade } from './auth/state/auth.facade';
import { MenuFacade } from './state/menu.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuVisible$ = this.mf.sideNavVisible;
  menuPosition$ = this.mf.sideNavPosition;
  isAuthenticated: Observable<boolean> = of(false);

  constructor(public mf: MenuFacade, public auth: AuthFacade) { }

  ngOnInit() {
    this.isAuthenticated = this.auth
      .isAuthenticated()
      .pipe(tap((auth) => console.log('auth changed to autheticated: ', auth)));
  }
}
