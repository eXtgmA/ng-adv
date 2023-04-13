import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { FoodItem } from 'src/app/food/foodItem';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit, OnChanges {
  constructor() {}

  @Input()
  food: FoodItem[];
  @Output()
  foodSelected: EventEmitter<FoodItem> = new EventEmitter();

  displayedColumns: string[] = ['id', 'name', 'price', 'calories'];
  dataSource: MatTableDataSource<FoodItem> = new MatTableDataSource([]);

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.food.currentValue);
    this.dataSource = new MatTableDataSource(changes.food.currentValue);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  selectFood(p: FoodItem) {
    this.foodSelected.emit(p);
  }
}
