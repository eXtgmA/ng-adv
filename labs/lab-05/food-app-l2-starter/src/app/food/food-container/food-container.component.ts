import { Component, OnInit } from "@angular/core";
import { FoodItem } from "../food.model";
import { FoodService } from "../food.service";

@Component({
  selector: "app-food-container",
  templateUrl: "./food-container.component.html",
  styleUrls: ["./food-container.component.scss"],
})
export class FoodContainerComponent implements OnInit {
  food: FoodItem[] = [];
  selected: FoodItem | null = null;

  constructor(private fs: FoodService) {}

  ngOnInit() {
    this.fs.getFood().subscribe((data) => (this.food = data));
  }

  selectFood(f: FoodItem) {
    this.selected = { ...f };
  }

  deleteFood(item: FoodItem) {
    console.log("mock deleting ", item);
  }

  foodSaved(item: FoodItem) {
    const clone = Object.assign([], this.food) as Array<FoodItem>;
    let idx = clone.findIndex((c) => c.id == item.id);
    if (idx > -1) {
      clone[idx] = item;
    } else {
      clone.push(item);
    }
    this.food = clone;
    this.selected = null;
  }
}
