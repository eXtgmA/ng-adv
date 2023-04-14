import { Injectable, computed, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SidebarActions } from './sidebar.actions';
import { computeMsgId } from '@angular/compiler';

@Injectable({ providedIn: 'root' })
export class SidePanelService {
  // RxJS Version using BehaviourSubject
  // private commands: BehaviorSubject<SidebarActions> =
  //   new BehaviorSubject<SidebarActions>(SidebarActions.HIDE_MARKDOWN);
  private commands = signal<SidebarActions>(SidebarActions.HIDE_MARKDOWN);

  getCommands() {
    return computed(() => this.commands());
  }

  triggerCmd(action: SidebarActions) {
    this.commands.set(action);
  }
}
