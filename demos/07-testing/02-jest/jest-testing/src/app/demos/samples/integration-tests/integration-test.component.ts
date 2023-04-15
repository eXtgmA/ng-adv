import { Component, OnInit } from "@angular/core";
import { FoodItem } from "../model/food-items";
import { FoodService } from "../foodService/food.service";
import { environment } from "../../../../environments/environment";

@Component({
  selector: "app-integration-test",
  templateUrl: "./integration-test.component.html",
  styleUrls: ["./integration-test.component.scss"],
})
export class IntegrationTestComponent implements OnInit {
  mdpath = environment.markdownPath + "shallow.md";
  food: FoodItem[] | null;

  constructor(private fs: FoodService) {}

  ngOnInit() {
    this.fs.getItems().subscribe((data) => {
      this.food = data;
    });
  }

  deleteFood(food: FoodItem) {
    this.food = this.food.filter((i) => i != food);
    this.fs.deleteItem(food).subscribe();
  }
}
