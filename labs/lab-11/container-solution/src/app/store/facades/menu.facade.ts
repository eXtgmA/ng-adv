import { Injectable } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Store } from '@ngrx/store';
import {
  ChangeSideNavPosition,
  ChangeSideNavVisible,
  ToggleSideNavVisible,
  SetSideNavEnabled,
} from '../actions/app.actions';
import { AppState } from '../reducers/app.reducer';
import {
  getSideNavPosition,
  getSideNavVisible,
  getSideNavEnabled,
} from '../selectors/app.selector';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MenuFacade {
  constructor(
    private mediaObserver: MediaObserver,
    private store: Store<AppState>
  ) {
    this.init();
  }

  get sideNavEnabled() {
    return this.store.select(getSideNavEnabled);
  }

  get sideNavVisible() {
    return this.store.select(getSideNavVisible);
  }

  get sideNavPosition() {
    return this.store.select(getSideNavPosition);
  }

  private init() {
    combineLatest([
      this.mediaObserver.asObservable().pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0])
      ),
      this.sideNavEnabled,
    ]).subscribe(([change, enabled]) => {
      const visible = this.adjustSidenavToScreen(change.mqAlias);
      const position = this.adjustSidenavToScreen(change.mqAlias)
        ? 'side'
        : 'over';

      this.store.dispatch(new ChangeSideNavPosition(position));
      this.store.dispatch(new ChangeSideNavVisible(visible));
    });
  }

  setSideNavEnabled(val: boolean) {
    this.store.dispatch(new SetSideNavEnabled(val));
  }

  adjustSidenavToScreen(mq: string): boolean {
    switch (mq) {
      case 'xs':
        return false;
      case 'sm':
        return false;
      case 'md':
        return false;
      default:
        return true;
    }
  }

  toggleMenuVisibility() {
    this.store.dispatch(new ToggleSideNavVisible());
  }
}
