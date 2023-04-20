
import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CustomersService } from '../customers.service';
import { CustomersActions } from './customers.actions';

@Injectable()
export class CustomerEffects {
  actions$ = inject(Actions);
  service = inject(CustomersService);

  loadCustomers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomersActions.loadcustomers),
      mergeMap(() =>
        this.service.getCustomers().pipe(
          map((customers) =>
            CustomersActions.loadcustomerssuccess({ items: customers })
          ),
          catchError((err) => of(CustomersActions.loadcustomersfailure({ err })))
        )
      )
    )
  );
}
