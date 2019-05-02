import { Component, OnInit } from '@angular/core';
import {Ingriedient} from '../shared/ingriedient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingriedient[] = [
    new Ingriedient('Apples', 5),
    new Ingriedient('Tomatos', 10),
  ];

  constructor() { }

  ngOnInit() {
  }

}
