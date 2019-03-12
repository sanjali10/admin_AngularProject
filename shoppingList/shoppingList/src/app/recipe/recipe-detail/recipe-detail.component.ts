import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
//@Input() recipedetail:Recipe;
id:number;
recipedetail:Recipe;

  constructor( private recipeService:RecipeService,
    private routes:ActivatedRoute
    ) { }
  ngOnInit() {
    this.routes.params.
    subscribe(
      (params:Params)=>{
        this.id=+params['id'];
      this.recipedetail= this.recipeService.getRecipes(this.id);
      }
    )
  }
  onAddToShoppingList()
  { 
    this.recipeService.addIngredientsToShoppingList(this.recipedetail.ingredients);
   }
}
