import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { appReducer, AppState } from './app.reducer';
import { CustomersState, customerReducer } from '../customers/state/customers.reducer';


export interface State {
  app: AppState;
  customers: CustomersState
}

export const reducers: ActionReducerMap<State> = {
  app: appReducer,
  customers: customerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
