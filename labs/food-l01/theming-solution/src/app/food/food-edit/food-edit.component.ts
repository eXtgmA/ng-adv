import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FoodItem } from 'src/app/food/foodItem';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss'],
})
export class FoodEditComponent implements OnInit {
  constructor() {}

  @Input() food: FoodItem;
  @Output() saveFood: EventEmitter<FoodItem> = new EventEmitter();

  ngOnInit() {}

  doSave() {
    console.log('food to save', this.food);
    this.saveFood.emit(this.food);
  }
}
