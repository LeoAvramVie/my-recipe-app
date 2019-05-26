import {Ingriedient} from '../shared/ingriedient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingriedient[]>();

  private ingredients: Ingriedient[] = [
    new Ingriedient('Apples', 5),
    new Ingriedient('Tomatos', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngridient(ingredient: Ingriedient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngridients(ingredients: Ingriedient[]) {
  //   for (let ingredient of ingredients) {
  //     this.addIngridient(ingredient);
  //   }
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.next(this.ingredients.slice());
  }
}
