import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MenuItem } from './menu-item.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  http = inject(HttpClient);
  breakpointObserver = inject(BreakpointObserver);
  visible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  position$: BehaviorSubject<MatDrawerMode> = new BehaviorSubject<MatDrawerMode>('side');

  constructor() {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(
        tap((matchesBreakpoints) => {
          console.log("matchesBreakpoint: ", matchesBreakpoints.matches);
          this.visible$.next(matchesBreakpoints.matches ? false : true);
          this.position$.next(matchesBreakpoints.matches ? 'over' : 'side');
        })
      ).subscribe();
  }

  getSideNavVisible() {
    return this.visible$.asObservable();
  }

  getSideNavPosition() {
    return this.position$.asObservable();
  }

  setSideNavEnabled(val: boolean) {
    this.visible$.next(val);
  }

  adjustSidenavToScreen(mq: string): boolean {
    return mq == 'xs' ? false : true;
  }

  toggleMenuVisibility() {
    let status = !this.visible$.getValue();
    this.visible$.next(status);
  }

  getTopItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>('/assets/top-items.json');
  }
}
