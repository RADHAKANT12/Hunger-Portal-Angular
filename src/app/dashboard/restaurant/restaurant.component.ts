import { Component, Input } from '@angular/core';
import { Restaurant } from 'src/app/model/Restaurant';
// import { Restaurant } from '../model/Restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent {
  @Input() restaurant?: Restaurant;

}
