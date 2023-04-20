import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomersActions } from '../customers/state/customers.actions';
import { CustomersState } from '../customers/state/customers.reducer';

export const initFactory = (appinit: AppInitService) => {
  return () => appinit.loadData();
};

@Injectable({
  providedIn: 'root',
})
export class AppInitService {
  store = inject(Store<CustomersState>)

  loadData() {
    this.store.dispatch(CustomersActions.loadcustomers());
    console.log("dispatched loadcustomers")
  }
}
