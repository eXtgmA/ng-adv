import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime } from 'rxjs/operators';
import { DemoState } from '../../state/demos.reducer';
import { DemoActions } from '../../state/demos.actions';

@Component({
  selector: 'app-demo-filter',
  templateUrl: './demo-filter.component.html',
  styleUrls: ['./demo-filter.component.scss'],
})
export class DemoFilterComponent implements OnInit {
  constructor(private store: Store<DemoState>) { }

  fcFilter = new FormControl();

  ngOnInit() {
    this.handleFilterChange();
  }

  handleFilterChange() {
    this.fcFilter.valueChanges.pipe(debounceTime(350)).subscribe((filter) => {
      this.store.dispatch(DemoActions.applyfilter(filter));
    });
  }
}
