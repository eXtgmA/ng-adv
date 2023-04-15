import { Injectable } from "@angular/core";
import { Observable, of, Subject, BehaviorSubject } from "rxjs";
import { MenuItem } from "./MenuItem";
import { MediaObserver } from "@angular/flex-layout";

@Injectable({
  providedIn: "root"
})
export class MenuService {
  constructor(private mediaObserver: MediaObserver) {
    this.handleChange();
  }

  private visible: boolean = true;
  visible$: BehaviorSubject<boolean> = new BehaviorSubject(this.visible);
  private position: string = "side";
  position$: BehaviorSubject<string> = new BehaviorSubject(this.position);

  private handleChange() {
    this.mediaObserver.media$.subscribe(change => {
      this.visible$.next(change.mqAlias == "xs" ? false : true);
      this.position$.next(change.mqAlias == "xs" ? "over" : "side");
    });
  }

  getTopItems(): Observable<MenuItem[]> {
    return of([
      { label: "Home", url: "" },
      { label: "Demos", url: "demos" },
      { label: "Admin", url: "admin" }
    ]);
  }

  toggleMenu() {
    this.visible = !this.visible;
    this.visible$.next(this.visible);
  }
}
