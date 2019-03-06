import { Component, OnInit, ElementRef,ViewChild ,EventEmitter, Output} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') NameInputRef:ElementRef;
 @ViewChild('amountInput') AmountInputRef:ElementRef;
  @Output()ingredientAdded=new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  onAddItem()
  {
    const name=this.NameInputRef.nativeElement.value;
    const amount=this.AmountInputRef.nativeElement.value;
    const newIngredient=new Ingredient(name,amount);
     this.ingredientAdded.emit(newIngredient);
  }
}
