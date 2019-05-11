import { Component, OnInit } from '@angular/core';
import {Ingriedient} from '../shared/ingriedient.model';
import {ShoppingListService} from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {



  ingredients: Ingriedient[] = [];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged
      .subscribe(
      (ingredients: Ingriedient[]) => {
        this.ingredients = ingredients;
    }
    );
  }

}
