import { Component, OnInit } from '@angular/core';
import {Food} from '../food';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
menus : Observable<Food[]>;
menuCol: AngularFirestoreCollection<Food>;
selectedMenu : Food;
day: string;

  constructor( private afs: AngularFirestore) {

     }



  ngOnInit() {
    this.getDay();
    this.getTodaysMenu();


  }

  getTodaysMenu(){
    this.menuCol = this.afs.collection<Food>('launch', ref => {
      console.log(this.day);
    return ref.where('days.'+this.day, '==' ,true);
    });
    this.menus = this.menuCol.valueChanges();

  }

  selectMenu(food: Food): void {
    this.selectedMenu = food;

  }

  selectDay(day: string){
    this.day = day;
    this.getTodaysMenu();
  }

  getDay(){
  let date = new Date();
  let days = date.getDay();
  
  switch (days){
  case 0: this.day ="sunday";
  break;
  case 1: this.day ="monday";
  break;
  case 2: this.day ="tuesday";
  break;
  case 3: this.day ="wednesday";
  break;
  case 4: this.day ="thursday";
  break;
  case 5: this.day ="friday";
  break;
  case 6: this.day ="saturday";
  break;

  }

  }

}
