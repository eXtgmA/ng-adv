import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { combineLatestWith, tap } from 'rxjs/operators';
import { MenuItem } from './menu-item.model';
import { MatDrawerMode } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  http = inject(HttpClient);
  breakpointObserver = inject(BreakpointObserver);

  constructor() {
    this.watchScreen.subscribe();
  }

  enabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  visible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  position$: BehaviorSubject<MatDrawerMode> = new BehaviorSubject<MatDrawerMode>('side');

  getSideNavEnabled() {
    return this.enabled$.asObservable();
  }

  getSideNavVisible() {
    return this.visible$.asObservable();
  }

  getSideNavPosition() {
    return this.position$.asObservable();
  }

  watchScreen = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(
      combineLatestWith(this.enabled$),
      tap(([point, enabled]) => {
        console.log(point);
        this.visible$.next(point.matches ? false : true);
        this.position$.next(point.matches ? 'over' : 'side');
      })
    );

  setSideNavEnabled(val: boolean) {
    this.enabled$.next(val);
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
