import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FoodItem } from "../../model/food-items";

@Component({
  selector: "app-food-row",
  templateUrl: "./food-row.component.html",
  styleUrls: ["./food-row.component.scss"]
})
export class FoodRowComponent implements OnInit {
  @Input() food: FoodItem;
  @Output() delete = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  deleteFood(item) {
    this.delete.emit(item);
  }
}
