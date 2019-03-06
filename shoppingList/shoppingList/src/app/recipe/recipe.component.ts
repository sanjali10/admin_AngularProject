import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  Selectedrecipe:Recipe;
  constructor() { }

  ngOnInit() {
  }
  recipeParent(recipe:Recipe)
  {
    console.log(recipe);
  }
}
