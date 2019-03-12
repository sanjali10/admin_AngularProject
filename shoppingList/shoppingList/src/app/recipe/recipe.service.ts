import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()

export class RecipeService{

  recipeSelected=new EventEmitter<Recipe>();

   private recipes:Recipe[]=[
        new Recipe('A Test Recipe',
        'This is a simply a test Recipe',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
          new Ingredient('Meat',2),
          new Ingredient('peas',8)
        ]),
        new Recipe(' Recipe',
        'This is a simply a test Recipe',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
          new Ingredient('French Fries',2),
          new Ingredient('Cheese',20)
        ])
      ];

      getRecipe()
      {
          return this.recipes.slice();
      }

      constructor(private shoppingService:ShoppingListService){}

      addIngredientsToShoppingList(ingredient:Ingredient[ ])
      {
          this.shoppingService.addIngredients(ingredient)
     }

     getRecipes(id:number)
     {
       return this.recipes[id];
     }

}