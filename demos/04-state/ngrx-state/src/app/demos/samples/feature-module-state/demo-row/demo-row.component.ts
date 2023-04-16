import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DemoItem } from '../../../demo-base/demo-item.model';

@Component({
  selector: 'app-demo-row',
  templateUrl: './demo-row.component.html',
  styleUrls: ['./demo-row.component.scss'],
})
export class DemoRowComponent {
  @Input() item: DemoItem = new DemoItem();
  @Output() onDelete = new EventEmitter<DemoItem>();
  @Output() onSelect = new EventEmitter<DemoItem>();
  @Output() onChangeVisibility = new EventEmitter<DemoItem>();

  delete() {
    this.onDelete.emit(this.item);
  }

  edit() {
    this.onSelect.emit(this.item);
  }

  changeVisibility() {
    let changed = { ...this.item, visible: !this.item.visible }
    this.onChangeVisibility.emit(changed);
  }
}
