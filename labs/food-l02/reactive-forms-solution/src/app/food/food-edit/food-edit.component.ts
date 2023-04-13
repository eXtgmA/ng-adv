import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoodItem } from 'src/app/food/foodItem';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss'],
})
export class FoodEditComponent implements OnChanges {
  @Input() food: FoodItem = new FoodItem();
  @Output() saveFood: EventEmitter<FoodItem> = new EventEmitter();
  foodForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.foodForm = this.fb.group({
      id: [this.food.id],
      name: [this.food.name, [Validators.required, Validators.minLength(3)]],
      price: [this.food.price, [Validators.required, Validators.min(1)]],
      calories: this.food.calories,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['food']) {
      this.foodForm.setValue(changes['food'].currentValue);
    }
  }

  saveForm() {
    console.log('food to save', this.foodForm.value);
    this.saveFood.emit(this.foodForm.value);
  }
}
