import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { SidebarActions } from "../sidebar/sidebar-actions";

@Injectable({ providedIn: "root" })
export class EventBusService {
  private commands: BehaviorSubject<SidebarActions> = new BehaviorSubject(
    SidebarActions.HIDE_MARKDOWN
  );

  Commands: Observable<SidebarActions> = this.commands.asObservable();

  constructor() {}

  triggerCmd(action: SidebarActions) {
    this.commands.next(action);
  }
}
