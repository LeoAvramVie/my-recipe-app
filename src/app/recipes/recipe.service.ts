import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingriedient} from '../shared/ingriedient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import index from '@angular/cli/lib/cli';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Schitzel',
      'A super-tasty Schnitzel - just awesome',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingriedient('Meat', 1),
        new Ingriedient('French Fries', 20)
      ]),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingriedient('Buns', 2),
        new Ingriedient('Meat', 1)
      ]),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
}
  addIngredientsToShoppingList(ingredients: Ingriedient[]) {
    this.slService.addIngridients(ingredients);
  }
}
