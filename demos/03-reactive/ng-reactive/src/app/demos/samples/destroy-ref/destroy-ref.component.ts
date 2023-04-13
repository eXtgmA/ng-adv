import { Component, DestroyRef, inject } from '@angular/core';
import { FormControl, Validators, UntypedFormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-destroy-ref',
  templateUrl: './destroy-ref.component.html',
  styleUrls: ['./destroy-ref.component.scss']
})
export class DestroyRefComponent {
  name = new FormControl('',
    [Validators.required, Validators.minLength(3)],
    []);
  postal = new UntypedFormControl('3544', [Validators.minLength(4)]);
  city = new FormControl<string>('Idolsberg', [Validators.maxLength(15)]);

  private destroy$ = new Subject();

  constructor() {
    inject(DestroyRef).onDestroy(() => {
      this.destroy$.next(true);
      this.destroy$.complete();
    });
  }

  ngOnInit() {
    this.name.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((data) =>
      console.log('Form values changed', data)
    );
    this.name.statusChanges.pipe(takeUntil(this.destroy$)).subscribe((data) =>
      console.log('Form status changed', data)
    );
    this.postal.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((data) =>
      console.log('Form values changed', data)
    );
    this.city.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((data) =>
      console.log('Form values changed', data)
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
