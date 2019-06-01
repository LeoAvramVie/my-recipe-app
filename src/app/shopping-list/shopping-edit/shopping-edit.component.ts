import {Component, OnInit} from '@angular/core';
import {Ingriedient} from '../../shared/ingriedient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {





  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingriedient(value.name, value.amount);
    this.slService.addIngridient(newIngredient);
  }

}
