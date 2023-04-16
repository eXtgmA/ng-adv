import { Component, OnInit } from '@angular/core';
import { from, interval, Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  catchError,
  delay,
  filter,
  find,
  map,
  mergeMap,
  pluck,
  reduce,
  take,
  tap,
} from 'rxjs/operators';
import { Voucher } from '../../vouchers/voucher.model';
import { VouchersService } from '../../vouchers/voucher.service';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
})
export class OperatorsComponent implements OnInit {
  constructor(private vs: VouchersService) { }

  response: any;

  // Declarative Pattern
  vouchers$: Observable<Voucher[]> = this.vs.getVouchers();

  vouchers: Voucher[];

  ngOnInit() {
    //Classic Subscribe Pattern -> Unsbscribe
    this.vs.getVouchers().subscribe((vs) => {
      this.vouchers = vs;
    });
  }

  setLabel = (v: Voucher) => ({ ...v, Label: `${v.Text} costs € ${v.Amount}` });

  log = (msg: string, data: any) =>
    console.log(
      `executing: ${msg}, 'data' is Array: ${Array.isArray(data)}`,
      data
    );

  useMap() {
    const source = from([1, 2, 3, 4, 5]);
    source
      .pipe(map((el) => el + 10))
      .subscribe((val) => console.log('value:', val));

    this.vouchers$
      .pipe(
        map((vouchers) => {
          return vouchers.map((v) => ({
            ...v,
            Label: `${v.Text} costs € ${v.Amount}`,
          }));
        })
      )
      .subscribe((data) => this.log('use map()', data));
  }

  useTap() {
    const arr = [1, 4, 6, 7, 9, 11];
    console.log('array:', arr);

    from(arr)
      .pipe(
        tap((el) => {
          (el = el * 2), console.log('tapping:', el);
        })
      )
      .subscribe((val) => console.log('logging', val));
  }

  // JavaScript Array.find - not an observable operator
  useFindArr() {
    this.vouchers$
      .pipe(map((vs) => vs.find((v: Voucher) => v.ID === 3)))
      .subscribe((data) => this.log('getByID - using find()', data));
  }

  // RxJs find Operator
  useFind() {
    this.vouchers$
      .pipe(
        mergeMap((vouchers: Voucher[]) => vouchers),
        find((v) => v.ID === 3)
      )
      .subscribe((data) => this.log('getByID - using find()', data));
  }

  // JavaScript Array.filter - not an observable operator
  useFilterArr() {
    this.vouchers$
      .pipe(map((vs) => vs.filter((v: Voucher) => v.Paid)))
      .subscribe((data) => this.log('useFilter', data));
  }

  useFilter() {
    this.vouchers$
      .pipe(
        mergeMap((vouchers: Voucher[]) => vouchers),
        filter((v) => v.Paid)
      )
      .subscribe((data) => this.log('getByID - using find()', data));
  }

  // Compare the two outputs
  useTake() {
    this.vouchers$.pipe(take(3)).subscribe((data) => this.log('useTake', data));
  }

  useInterval() {
    interval(1000)
      .pipe(take(3))
      .subscribe((x) => console.log(x));
  }

  useDelay() {
    const delayedObservable = of(['hund', 'katze', 'maus']).pipe(delay(5000));
    console.log('before delay execution - waiting 5 secs');
    delayedObservable.subscribe((data) => console.log(data));
  }

  useReduce() {
    const arr = [1, 4, 6, 7, 9, 11];

    from(arr)
      .pipe(reduce((acc, curr) => acc + curr, 0))
      .subscribe((d) => console.log(d));
  }

  usePluck() {
    const item = of({
      person: 'hugo',
      children: [{ name: 'jimmy' }, { name: 'giro' }, { name: 'soi' }],
    });

    //pluck  deprecated
    item.pipe(pluck('children')).subscribe(console.log);
    //use map
    item.pipe(map((h) => h.children)).subscribe(console.log);
  }

  useSwitchMap() {

  }
}
