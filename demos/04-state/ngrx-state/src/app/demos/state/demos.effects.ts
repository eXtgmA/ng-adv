import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { DemoService } from '../demo-base/demo.service';
import { DemoActions } from './demos.actions';

@Injectable()
export class DemosEffects {
  actions$ = inject(Actions);
  service = inject(DemoService);

  loadDemos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DemoActions.loaddemos),
      mergeMap(() =>
        this.service.getItems().pipe(
          map((demos) => DemoActions.loaddemossuccess({ items: demos })),
          catchError((err) => of(DemoActions.loaddemosfailure({ err })))
        )
      )
    )
  );

  addDemos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DemoActions.adddemo),
      mergeMap((action) =>
        this.service.addItem(action.item).pipe(
          map((demos) => DemoActions.adddemosuccess({ item: demos })),
          catchError((err) => of(DemoActions.adddemofailure({ err })))
        )
      )
    )
  );

  updateDemos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DemoActions.updatedemo),
      mergeMap((action) =>
        this.service.updateItem(action.item).pipe(
          map((demos) => DemoActions.updatedemosuccess({ item: demos })),
          catchError((err) => of(DemoActions.updatedemofailure({ err })))
        )
      )
    )
  );

  deleteDemo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DemoActions.deletedemo),
      mergeMap((action) =>
        this.service.deleteItem(action.item.id).pipe(
          map(() => DemoActions.deletedemosuccess({ item: action.item })),
          catchError((err) => of(DemoActions.deletedemofailure({ err })))
        )
      )
    )
  );
}
