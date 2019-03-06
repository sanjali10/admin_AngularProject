import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output()recipewasSelected=new EventEmitter<Recipe>();
 recipes:Recipe[]=[
   new Recipe('A Test Recipe','This is a simply a test Recipe',
   'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
   new Recipe(' Recipe','This is a simply a test Recipe',
   'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
 ];
  constructor() { }

  ngOnInit() {
  }
  Selected(recipe:Recipe)
  {
    this.recipewasSelected.emit(recipe);
  }


}
