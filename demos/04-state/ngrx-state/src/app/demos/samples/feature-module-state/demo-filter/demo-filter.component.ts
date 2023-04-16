import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { DemoFacade } from '../../../state/demo.facade';

@Component({
  selector: 'app-demo-filter',
  templateUrl: './demo-filter.component.html',
  styleUrls: ['./demo-filter.component.scss'],
})
export class DemoFilterComponent implements OnInit {
  constructor(private df: DemoFacade) {}

  fcFilter = new UntypedFormControl();

  ngOnInit() {
    this.fcFilter.valueChanges.pipe(debounceTime(350)).subscribe((filter) => {
      this.df.setFilter(filter);
    });
  }
}
