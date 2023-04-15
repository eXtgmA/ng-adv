import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { MenuService } from 'src/app/shared/menu/menu.service';
import { environment } from 'src/environments/environment';
import { LoadingService } from '../../shared/loading/loading.service';
import { DemoService } from '../demo-base/demo.service';
import { SidePanelService } from 'src/app/shared/side-panel/sidepanel.service';
import { SidebarActions } from 'src/app/shared/side-panel/sidebar.actions';

@Component({
  selector: 'app-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.scss'],
})
export class DemoContainerComponent implements OnInit {

  router = inject(Router);
  route = inject(ActivatedRoute);
  ds = inject(DemoService);
  ms = inject(MenuService);
  ls = inject(LoadingService);
  eb = inject(SidePanelService);

  destroy$ = new Subject();
  title: string = environment.title;
  header = 'Please select a demo';
  demos = this.ds.getItems();

  isLoading = false;

  sidenavMode = this.ms.getSideNavPosition();
  sidenavVisible = this.ms.getSideNavVisible();
  workbenchMargin = this.sidenavVisible.pipe(
    map(visible => { return visible ? { 'margin-left': '5px' } : {} })
  );

  showMdEditor = this.eb
    .getCommands()
    .pipe(
      map((action) => (action === SidebarActions.HIDE_MARKDOWN ? false : true))
    );

  constructor() {
    this.ls.getLoading().pipe(takeUntil(this.destroy$)).subscribe((value) => {
      Promise.resolve(null).then(() => (this.isLoading = value));
    });
  }


  ngOnInit() {
    this.setComponentMetadata();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  rootRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  setComponentMetadata() {
    this.router.events
      .pipe(
        takeUntil(this.destroy$),
        filter((event) => event instanceof NavigationEnd),
        map(() => this.rootRoute(this.route)),
        filter((route: ActivatedRoute) => route.outlet === 'primary')
      )
      .subscribe((route: ActivatedRoute) => {
        this.header =
          route.component != null
            ? `Component: ${route.component
              .toString()
              .substring(6, route.component.toString().indexOf('{') - 1)}`
            : '';
      });
  }
}
