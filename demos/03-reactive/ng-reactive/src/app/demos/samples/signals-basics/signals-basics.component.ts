import { Component, computed, effect, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { of, startWith } from 'rxjs';
@Component({
  selector: 'app-signals-basics',
  templateUrl: './signals-basics.component.html',
  styleUrls: ['./signals-basics.component.scss']
})
export class SignalsBasicsComponent {

  totalAmount = signal<number>(0);
  runningAmount = signal<number>(10);
  amountSignal = signal<number>(0);

  constructor() {
    effect(() => {
      console.log('totalAmount changed', this.totalAmount());
    });
    effect(() => {
      console.log(this.amountSignal());
    });
  }

  OnInit() {
    effect(() => {
      console.log('runningAmount changed', this.runningAmount());
    });
  }

  signalBasics() {
    const amount = signal(10);
    const tax = signal(0.2);
    const total = computed(() => amount() * (1 + tax()));
    this.totalAmount.set(total());
    console.log('total', total());
  }

  signalTyped() {
    const amount = signal<number>(20);
    const tax = signal<number>(0.2);
    const total = computed<number>(() => amount() * (1 + tax()));
    this.runningAmount.update(curr => curr + total());
    console.log('total', total());
  }

  signalObservable() {
    const amount$ = of(10).pipe(startWith(0));
    let am = toSignal(amount$, { initialValue: 0 })
    this.amountSignal.update(toSignal(amount$, { initialValue: 0 }));

    const tax = signal(0.2);
    const tax$ = toObservable(tax);

    tax$.subscribe(amount => {
      console.log('tax from signal', amount);
    });

  }

}
