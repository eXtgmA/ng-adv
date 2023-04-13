import { Component, inject } from '@angular/core';
import { MenuService } from '../menu/menu.service';
import { SnackbarService } from '../snackbar/snackbar.service';
import { MenuFacade } from 'src/app/state/menu.facade';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  ms = inject(MenuService);
  sns = inject(SnackbarService);
  menuItems = this.ms.getTopItems();

  toggleMenu() {
    this.ms.toggleMenuVisibility();
  }

  toggleApps() {
    this.sns.displayAlert('Apps', 'Not implemented - just a mock');
  }
}
