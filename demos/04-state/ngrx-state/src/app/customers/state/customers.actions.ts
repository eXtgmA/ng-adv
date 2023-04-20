import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Customer } from '../customer.model';

export const CustomersActions = createActionGroup({
  source: 'Customers',
  events: {
    loadCustomers: emptyProps(),
    loadCustomersSuccess: props<{ items: Customer[] }>(),
    loadCustomersFailure: props<{ err: Error }>()
  }
})
