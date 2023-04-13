import { Component, DestroyRef, effect, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { MenuService } from 'src/app/shared/menu/menu.service';
import { SidebarActions } from 'src/app/shared/side-panel/sidebar.actions';
import { SidePanelService } from 'src/app/shared/side-panel/sidepanel.service';
import { environment } from 'src/environments/environment';
import { LoadingService } from '../../shared/loading/loading.service';
import { DemoService } from '../demo-base/demo.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  ms = inject(MenuService);
  ls = inject(LoadingService);
  eb = inject(SidePanelService);

  destroy$ = new Subject();
  title: string = environment.title;
  demos = this.ds.getItems();

  isLoading = false;

  sidenavMode = this.ms.getSideNavPosition();
  sidenavVisible = this.ms.getSideNavVisible();
  workbenchMargin = this.sidenavVisible.pipe(
    map(visible => { return visible ? { 'margin-left': '5px' } : {} })
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
      takeUntil(this.destroy$),
      filter((event) => event instanceof NavigationEnd),
      map(() => this.rootRoute(this.route)),
      filter((route: ActivatedRoute) => route.outlet === 'primary'),
      map((route: ActivatedRoute) => {
        return route.component != null
          ? `Component: ${route.component.toString()
            .substring(6, route.component.toString().indexOf('{') - 1)}`
          : '';
      }),
    )

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
