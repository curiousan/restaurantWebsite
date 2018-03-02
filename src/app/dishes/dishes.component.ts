import { Component, OnInit } from '@angular/core';
import {Menu} from '../menu/menu';
import {MenuListService} from '../menu-list.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  selectedMenu: Menu;
  menu;

  constructor(menuService: MenuListService ) {
    this.menu = menuService.getMenu();
   }

  ngOnInit() {
  }

  selectMenu(menu: Menu): void{
    this.selectedMenu = menu;
  }

}
