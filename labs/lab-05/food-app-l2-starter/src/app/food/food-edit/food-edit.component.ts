import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { FoodItem } from "../food.model";

@Component({
  selector: "app-food-edit",
  templateUrl: "./food-edit.component.html",
  styleUrls: ["./food-edit.component.scss"],
})
export class FoodEditComponent implements OnInit {
  constructor() {}

  @Input() food: FoodItem = new FoodItem();
  @Output() saveFood: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("receiving data on input:", changes["food"]);
  }

  doSave() {
    if (this.food) this.saveFood.emit(this.food);
  }
}
