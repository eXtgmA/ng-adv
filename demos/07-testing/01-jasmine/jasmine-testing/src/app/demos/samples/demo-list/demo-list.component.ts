import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DemoItem } from '../../demo-base/demo-item.model';
import { getAllDemos } from '../../state/demo.selectors';
import { DemoState } from '../../state/demos.reducer';
import { DemoActions } from '../../state/demos.actions';

@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.scss'],
})
export class DemoListComponent implements OnInit {
  constructor(private store: Store<DemoState>) { }

  demos$: Observable<DemoItem[]> = this.store.select(getAllDemos);

  ngOnInit() { }

  drop(event: CdkDragDrop<DemoItem[]>) {
    this.demos$.subscribe((arr) => {
      moveItemInArray(arr, event.previousIndex, event.currentIndex);
      this.changeSortOrder(arr);
    });
  }

  // Actually you should implement this using an action :-)
  changeSortOrder(arr: DemoItem[]) {
    let idx = 0;
    arr.forEach((item) => {
      item.sortOrder = idx;
      idx++;
    });
  }

  deleteItem(item: DemoItem) {
    console.log('deleting item', item);
  }

  selectItem(item: DemoItem) {
    this.store.dispatch(DemoActions.setselected({ item }));
  }
}
