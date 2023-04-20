import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from '../customer.model';
import { CustomersActions } from '../state/customers.actions';
import { CustomersState } from '../state/customers.reducer';
import { getCustomers } from '../state/customers.selector';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  store = inject(Store<CustomersState>)
  customers: Customer[] = [];

  ngOnInit(): void {
    this.store.dispatch(CustomersActions.loadcustomers());
    this.store.select(getCustomers).subscribe((customer: Customer[]) => this.customers = customer);
  }
}
