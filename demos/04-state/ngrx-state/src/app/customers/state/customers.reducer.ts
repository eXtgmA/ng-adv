import { createReducer, on } from '@ngrx/store';
import { Customer } from '../customer.model';
import { CustomersActions } from './customers.actions';

export const customersFeatureKey = 'customers';

export interface CustomersState {
  customers: Customer[];
}

export const initialAppState: CustomersState = {
  customers: [],
};

export const customerReducer = createReducer(initialAppState,
  on(CustomersActions.loadcustomerssuccess, (state, action) => ({
    ...state,
    customers: action.items,
  })),
  on(CustomersActions.loadcustomersfailure, (state, action) => ({
    ...state,
  })),
);
