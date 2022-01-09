import { Injectable } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { MenuItem } from './MenuItem';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private mediaObserver: MediaObserver) {
    this.handleChange();
  }

  sideNavVisible: BehaviorSubject<boolean> = new BehaviorSubject(true);
  sideNavPosition: BehaviorSubject<string> = new BehaviorSubject('side');

  private handleChange() {
    this.mediaObserver
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0])
      )
      .subscribe((change) => {
        this.sideNavVisible.next(change.mqAlias === 'xs' ? false : true);
        this.sideNavPosition.next(change.mqAlias === 'xs' ? 'over' : 'side');
      });
  }

  getTopItems(): Observable<MenuItem[]> {
    return of([
      { label: 'Home', url: '' },
      { label: 'Demos', url: 'demos' },
      { label: 'Skills', url: 'skills' },
    ]);
  }

  toggleMenuVisibility() {
    const visible = !this.sideNavVisible.getValue();
    this.sideNavVisible.next(visible);
  }
}