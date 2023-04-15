import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DemoItem } from "./demo-item";
import { tap } from "rxjs/operators";

@Injectable()
export class DemoService {
  constructor(private httpClient: HttpClient) {}

  getItems(): Observable<DemoItem[]> {
    return this.httpClient
      .get<DemoItem[]>("/assets/demos.json")
      .pipe(tap(data => console.log("loading demos", data)));
  }
}
