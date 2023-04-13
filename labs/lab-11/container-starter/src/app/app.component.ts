import { Component } from '@angular/core';
import { MenuFacade } from './store/facades/menu.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Food App';
  menuVisible$ = this.mf.sideNavVisible;
  menuPosition$ = this.mf.sideNavPosition;

  constructor(public mf: MenuFacade) { }
}
