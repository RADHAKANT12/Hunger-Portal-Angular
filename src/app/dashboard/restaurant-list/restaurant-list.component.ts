import { Component } from '@angular/core';
import { RESTAURANTS } from '../../../db/restaurants'

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent {
  restaurants = RESTAURANTS;


  constructor(){
    console.log(this.restaurants);
  }

}
