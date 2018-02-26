import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import { MenuListService } from './../menu-list.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  selectedMenu: Menu;
  menu;
  constructor(menuService: MenuListService) {
    this.menu = menuService.getMenu();
  }

  ngOnInit() {
  }

  selectMenu(menu: Menu): void {
    this.selectedMenu = menu;
     }



}
