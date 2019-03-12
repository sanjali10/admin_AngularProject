import { Component, OnInit, ElementRef,ViewChild ,EventEmitter, Output} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') NameInputRef:ElementRef;
 @ViewChild('amountInput') AmountInputRef:ElementRef;
  //@Output()ingredientAdded=new EventEmitter<Ingredient>();
  constructor(private shoppingList:ShoppingListService) { }

  ngOnInit() {
  }
  onAddItem()
  {
    const name=this.NameInputRef.nativeElement.value;
    const amount=this.AmountInputRef.nativeElement.value;
    const newIngredient=new Ingredient(name,amount);
    this.shoppingList.onIngredientAdded(newIngredient);
   // this.ingredientAdded.emit(newIngredient);
  }
}
