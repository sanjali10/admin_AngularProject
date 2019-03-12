import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';



export class ShoppingListService
{
   ingredientsChanged=new EventEmitter<Ingredient[]>();
   private ingredients: Ingredient[]=[
        new Ingredient('Apples',5)  ,
        new Ingredient('Tomotoes',10)
      ];

      onIngredientAdded (ingredients:Ingredient)
      {
            this.ingredients.push(ingredients);
            this.ingredientsChanged.emit(this.ingredients.slice());
      }

      getIngredients()
      {
       return this.ingredients.slice();    
      }
      addIngredients(ingredients:Ingredient[])
      {
      //    for(let ingredient of ingredients)
      //    {
      //             this.onIngredientAdded(ingredient);
      //    }
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.emit(this.ingredients.slice());
      }
}

