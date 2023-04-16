import { Component, DestroyRef, effect, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoadingService } from '../../shared/loading/loading.service';
import { DemoService } from '../demo-base/demo.service';
import { SidePanelService } from 'src/app/shared/side-panel/sidepanel.service';
import { SidebarActions } from 'src/app/shared/side-panel/sidebar.actions';
import { SideNavService } from '../../shared/sidenav/sidenav.service';

@Component({
  selector: 'app-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.scss'],
})
export class DemoContainerComponent {
  router = inject(Router);
  route = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  ds = inject(DemoService);
  nav = inject(SideNavService);
  ls = inject(LoadingService);
  eb = inject(SidePanelService);

  destroy$ = new Subject();
  title: string = environment.title;
  demos = this.ds.getItems();

  isLoading = false;

  sidenavMode = this.nav.getSideNavPosition();
  sidenavVisible = this.nav.getSideNavVisible();
  workbenchMargin = this.sidenavVisible.pipe(
    map((visible: boolean) => { return visible ? { 'margin-left': '5px' } : {} })
  );

  currentCMD = this.eb.getCommands()

  showMdEditor: boolean = false;
  // RxJS Version using BehaviourSubject
  // showMdEditor = this.eb
  // .getCommands()
  // .pipe(
  //   map((action) => (action === SidebarActions.HIDE_MARKDOWN ? false : true))
  // );

  selectedComponent = this.router.events
    .pipe(
      map((action: SidebarActions) => (action === SidebarActions.HIDE_MARKDOWN ? false : true))
    );

  constructor() {
    effect(() => {
      this.showMdEditor = this.currentCMD() === SidebarActions.HIDE_MARKDOWN ? false : true;
    });

    this.ls.getLoading().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      Promise.resolve(null).then(() => (this.isLoading = value));
    });
  }

  rootRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
