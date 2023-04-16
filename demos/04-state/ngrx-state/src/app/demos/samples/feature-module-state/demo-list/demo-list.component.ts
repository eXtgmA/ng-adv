import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { DemoItem } from '../../../demo-base/demo-item.model';
import { DemoFacade } from '../../../state/demo.facade';

@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.scss'],
})
export class DemoListComponent implements OnInit {
  @Output() onSelectDemo: EventEmitter<null> = new EventEmitter();

  constructor(private df: DemoFacade) { }

  demos$ = this.df.getDemos();
  filter$ = this.df.getFilter();

  view$ = combineLatest([this.demos$, this.filter$]).pipe(
    map(([demos, filter]) => {
      return filter !== ''
        ? demos.filter((d) =>
          d.title.toLowerCase().includes(filter.toLowerCase())
        )
        : demos;
    })
  );

  ngOnInit() { }

  drop(event: CdkDragDrop<DemoItem[]>) {
    this.demos$.subscribe((arr) => {
      moveItemInArray(arr, event.previousIndex, event.currentIndex);
      this.changeSortOrder(arr);
    });
  }

  // Throws an err because of immutalble store
  // Actually you should implement this using an action :-)
  changeSortOrder(arr: DemoItem[]) {
    let idx = 0;
    arr.forEach((item) => {
      item.sortOrder = idx;
      idx++;
    });
  }

  deleteItem(item: DemoItem) {
    this.df.deleteDemo(item);
  }

  changeVisibility(item: DemoItem) {
    this.df.updateDemo(item);
  }

  selectItem(item: DemoItem) {
    this.df.selectDemo(item);
    this.onSelectDemo.emit();
  }
}
