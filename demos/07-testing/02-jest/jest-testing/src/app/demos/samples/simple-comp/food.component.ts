import { Component, OnInit } from "@angular/core";
import { FoodService } from "../foodService/food.service";
import { FoodItem } from "../model/food-items";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-food",
  templateUrl: "./food.component.html",
  styleUrls: ["./food.component.scss"]
})
export class FoodComponent implements OnInit {
  constructor(private fs: FoodService) {}

  mdpath = environment.markdownPath + "simplecomp.md";
  food: FoodItem[] | null;

  ngOnInit() {
    this.fs.getItems().subscribe(data => {
      this.food = data;
    });
  }

  deleteFood(food: FoodItem) {
    this.food = this.food.filter(i => i != food);
    this.fs.deleteItem(food).subscribe();
  }
}
