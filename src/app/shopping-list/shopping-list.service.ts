import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService
{

    // ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients:Ingredient[]=[
        new Ingredient("Papaya",1),
        new Ingredient("Apples",5),
        new Ingredient("Carrots",2),
    
      ]

      getIngredients()
      {
          return this.ingredients.slice();
      }

      addIngredient(ingredient:Ingredient)
      {
          this.ingredients.push(ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredients:Ingredient[])
      {
        //   for(let ingredient of ingredients)
        //   {
        //       this.addIngredient(ingredient);
        //   }

        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
      }
}