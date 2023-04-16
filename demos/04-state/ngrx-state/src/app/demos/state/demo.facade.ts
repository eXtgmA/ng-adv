import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { DemoItem } from '../demo-base/demo-item.model';
import { getAllDemos, getFilter, getSelected, hasLoaded } from './demo.selectors';
import { DemoState } from './demos.reducer';
import { DemoActions } from './demos.actions';

@Injectable({
  providedIn: 'root',
})
export class DemoFacade {
  store = inject(Store<DemoState>)
  init() {
    this.hasLoaded().subscribe((loaded) => {
      if (!loaded) {
        this.store.dispatch(DemoActions.loaddemos());
      }
    });
  }

  hasLoaded() {
    return this.store.select(hasLoaded).pipe(take(1));
  }

  getDemos() {
    return this.store.select(getAllDemos)
  }

  getSelectedDemo() {
    return this.store.select(getSelected);
  }

  deleteDemo(item: DemoItem) {
    this.store.dispatch(DemoActions.deletedemo({ item }));
  }

  addDemo(item: DemoItem) {
    this.store.dispatch(DemoActions.adddemo({ item }));
  }

  updateDemo(item: DemoItem) {
    this.store.dispatch(DemoActions.updatedemo({ item }));
  }

  selectDemo(item: DemoItem) {
    this.store.dispatch(DemoActions.setselected({ item }));
  }

  setFilter(filter: string) {
    this.store.dispatch(DemoActions.applyfilter({ filter }));
  }

  getFilter() {
    return this.store.select(getFilter);
  }
}
