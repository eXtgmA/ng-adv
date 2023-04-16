import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { DemoItem } from '../../../demo-base/demo-item.model';
import { DemoFacade } from '../../../state/demo.facade';

@Component({
  selector: 'app-demo-edit',
  templateUrl: './demo-edit.component.html',
  styleUrls: ['./demo-edit.component.scss'],
})
export class DemoEditComponent implements OnInit {
  constructor(private df: DemoFacade) {}

  item = this.df.getSelectedDemo();

  fcName = new UntypedFormControl('');

  ngOnInit() {
    this.item.subscribe((val: DemoItem) => this.fcName.setValue(val.title));
  }

  saveItem() {}
}
