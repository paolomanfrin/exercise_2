import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES} from '../shared/dishes';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  dishes: Dish[] = null; //= DISHES;
  selectedDish: Dish;

  onSelect(dish: Dish) {
    this.selectedDish = dish;
    console.log("selected: " + dish.name);
  }

  constructor(private dishService : DishService) { }

  ngOnInit() {
    this.getDishes();
  }

  getDishes() {
    this.dishes = this.dishService.getDishes();
  }

  

}
