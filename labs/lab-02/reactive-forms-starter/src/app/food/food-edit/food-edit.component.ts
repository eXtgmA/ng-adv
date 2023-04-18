import {Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges, inject} from '@angular/core';
import { FoodItem } from 'src/app/food/foodItem';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss'],
})
export class FoodEditComponent implements OnChanges {

  fb = inject(FormBuilder);

  @Input() food: FoodItem = new FoodItem();
  @Output() saveFood: EventEmitter<FoodItem> = new EventEmitter();

  foodForm = this.fb.group({
    // id: this.food.id,
    name: [this.food.name, [Validators.required, Validators.minLength(2)]],
    price: [this.food.price, [Validators.required, Validators.min(3)]],
    calories: this.food.calories,
  });

  ngOnChanges(changes: SimpleChanges) {
    if (changes.food) {
      this.foodForm.patchValue(changes.food.currentValue);
    }
  }

  saveForm() {
    console.log('food to save', this.foodForm.value);
    this.saveFood.emit({...this.food, ...this.foodForm.value});
  }
}
