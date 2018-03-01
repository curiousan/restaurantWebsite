import { Component, OnInit } from '@angular/core';
import { Food } from './../food';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-ala-carte',
  templateUrl: './ala-carte.component.html',
  styleUrls: ['./ala-carte.component.css']
})
export class AlaCarteComponent implements OnInit {
  selectedFood: Food;
  foodCol: AngularFirestoreCollection<Food>;
  food: Observable<Food[]>;
  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.foodCol = this.afs.collection('ala-carte');
    this.food = this.foodCol.valueChanges();

  }

  selectFood(food: Food): void {
    this.selectedFood = food;

  }



}
