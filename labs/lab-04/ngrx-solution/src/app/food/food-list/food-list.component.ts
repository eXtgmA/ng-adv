import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { FoodItem } from 'src/app/food/food-item.model';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit, OnChanges {
  constructor() { }

  @Input()
  food: FoodItem[];
  @Output()
  editSelected: EventEmitter<FoodItem> = new EventEmitter();
  @Output()
  deleteSelected: EventEmitter<FoodItem> = new EventEmitter();

  filter = new FormControl('');

  displayedColumns: string[] = [
    'id',
    'name',
    'price',
    'calories',
    'deleteItem',
    'editItem',
  ];
  dataSource: MatTableDataSource<FoodItem> = new MatTableDataSource([]);

  ngOnInit() {
    this.filter.valueChanges.subscribe((filterString) => {
      this.dataSource.filter = filterString.trim().toLowerCase();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.food.currentValue);
    this.dataSource = new MatTableDataSource(changes.food.currentValue);
  }

  addFood() {
    console.log(this.getNextId());
    this.editSelected.emit({
      id: this.getNextId(),
      name: '',
      price: 0,
      calories: 0,
    });
  }

  getNextId(): number {
    return this.food.reduce((acc, f) => (acc = acc > f.id ? acc : f.id), 0) + 1;
  }

  selectFood(p: FoodItem) {
    this.editSelected.emit(p);
  }

  deleteFood(p: FoodItem) {
    this.deleteSelected.emit(p);
  }
}
