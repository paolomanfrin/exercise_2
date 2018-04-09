import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  // https://ngdev.space/angular-2-input-property-changes-detection-3ccbf7e366d2
  @Input()
  dish: Dish;

  constructor() { }

  ngOnInit() {
  }

}
