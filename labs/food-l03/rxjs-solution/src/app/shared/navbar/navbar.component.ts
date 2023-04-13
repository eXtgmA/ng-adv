import { Component, OnInit } from '@angular/core';
import { NavItem } from './navItem';
import { MenuService } from '../../menu/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private ms: MenuService) {}

  items: NavItem[];

  ngOnInit() {
    this.items = [
      { title: 'Home', url: '/' },
      { title: 'Products', url: '/products' },
      { title: 'About', url: '/about' },
    ];
  }

  toggleMenu() {
    this.ms.toggleMenu();
  }
}
