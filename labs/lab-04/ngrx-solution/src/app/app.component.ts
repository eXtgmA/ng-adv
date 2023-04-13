import { Component } from '@angular/core';
import { MenuFacade } from './state/menu.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Food App';

  constructor(public ms: MenuFacade) { }
}
