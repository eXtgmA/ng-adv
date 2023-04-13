import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { FoodItem } from 'src/app/food/foodItem';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.scss'],
})
export class FoodEditComponent implements OnInit {
  constructor(private fb: UntypedFormBuilder) {
    this.form = this.fb.group({
      id: 0,
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, Validators.min(1)],
      calories: 0,
    });
  }

  @Input() food: FoodItem;
  @Output() saveFood: EventEmitter<FoodItem> = new EventEmitter();

  form: UntypedFormGroup;

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.food != undefined) {
      console.log('receiving food', changes.food.currentValue);
      this.form.setValue(changes.food.currentValue);
    }
  }

  saveForm(form) {
    console.log('food to save', form.value);
    this.saveFood.emit(form.value);
  }
}
