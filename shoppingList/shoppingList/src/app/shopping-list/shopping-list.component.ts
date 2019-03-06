import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients: Ingredient[]=[
  new Ingredient('Apples',5),
  new Ingredient('Tomotoes',10)
];
  constructor() { }

  ngOnInit() {
  }
  onIngredientAdded(ingredients:Ingredient)
  {
      this.ingredients.push(new Ingredient(ingredients.name,ingredients.amount))
  }
}
