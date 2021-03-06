import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,Router, RouterModule} from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';

const routes:Routes=[
  {
    path:'',
    redirectTo:'/recipe',
    pathMatch:'full'
  },
  {
    path:'recipe',
    component:RecipeComponent,
    children:[
      { path :'',component:RecipeStartComponent},
      {path:':id',component:RecipeDetailComponent}
    ]
  },
  {
    path:'shoppinglist',
    component:ShoppingListComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
