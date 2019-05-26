import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingriedient} from '../shared/ingriedient.model';
import {ShoppingListService} from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {



  ingredients: Ingriedient[] = [];
  private subscription: Subscription;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged
      .subscribe(
      (ingredients: Ingriedient[]) => {
        this.ingredients = ingredients;
    }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
