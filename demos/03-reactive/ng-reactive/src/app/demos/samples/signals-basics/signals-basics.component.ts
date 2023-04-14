import { Component, computed, effect, signal } from '@angular/core';
import { of } from 'rxjs';
import { from, Observable } from 'rxjs';


@Component({
  selector: 'app-signals-basics',
  templateUrl: './signals-basics.component.html',
  styleUrls: ['./signals-basics.component.scss']
})
export class SignalsBasicsComponent {

  totalAmount = signal<number>(0);
  runningAmount = signal<number>(10);

  constructor() {
    effect(() => {
      console.log('totalAmount changed', this.totalAmount());
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
    // PullRequest will be accepted soon
    // const amount$ = of(10);
    // const amountSignal = fromObservable(amount$, 0);

    // const tax = signal(0.2);
    // const tax$ = fromSignal(tax);
  }

}
