import { Injectable } from "@angular/core";
import { FoodItem } from "../model/food-items";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FoodService {
  constructor(private httpClient: HttpClient) {
    this.httpClient.get<FoodItem[]>("/assets/food.json").subscribe(data => {
      this.items = data;
      this.Items.next(this.items);
    });
  }

  private items: FoodItem[] = [];
  private Items: BehaviorSubject<FoodItem[]> = new BehaviorSubject(this.items);

  getItems(): Observable<FoodItem[]> {
    return this.Items;
  }

  deleteItem(item: FoodItem): Observable<boolean> {
    this.items = this.items.filter(f => f != item);
    return of(true);
  }
}
