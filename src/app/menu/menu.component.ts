import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  selctMenu(id : Number) : void {

  }

  menu : [Menu] = [{
    id: 2,
    name: 'Momo',
    image: 'momo.png',
    desc: 'Most loved nepali food',
    price: 15,
    ingredient: ['flour','soup','chicken'],
    glutFree: true,
    lactFree: true
},
{
  id: 3,
  name: 'Nepali Khana',
  image: 'Nepali-Khana.png',
  desc: 'Typical nepali bread',
  price: 18,
  ingredient: ['Rice','bread','meat','soup'],
  glutFree: true,
  lactFree: false
},
{
  id: 4,
  name: 'Cheese Naan',
  image: 'cheese-naaan.png',
  desc: 'Typical nepali bread',
  price: 16,
  ingredient: ['pea','chilly','mustard'],
  glutFree: true,
  lactFree: false
},
{
  id: 5,
  name: 'Newari Khaja',
  image: 'newari-food.png',
  desc: 'Typical newari breakfast',
  price: 16,
  ingredient: ['pea','chilly','mustard'],
  glutFree: true,
  lactFree: false
}
];

}
