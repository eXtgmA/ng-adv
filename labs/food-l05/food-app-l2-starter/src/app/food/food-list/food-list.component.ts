import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FoodItem } from "../food.model";

@Component({
  selector: "app-food-list",
  templateUrl: "./food-list.component.html",
  styleUrls: ["./food-list.component.scss"],
})
export class FoodListComponent implements OnInit {
  constructor() {}

  @Input()
  food: FoodItem[] = [];
  @Output()
  foodSelected: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();
  @Output()
  foodDeleted: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();

  ngOnInit() {}

  selectFood(item: FoodItem) {
    this.foodSelected.emit(item);
  }

  deleteFood(item: FoodItem) {
    this.foodDeleted.emit(item);
  }
}
