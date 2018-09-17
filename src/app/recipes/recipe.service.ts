import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class RecipeService{

    // recipeSelected = new EventEmitter<Recipe>();
    constructor(private slService:ShoppingListService)
    {

    }
    private recipes:Recipe[] =[
        new Recipe(
            'A test recipe',
             'description test description testdescription testdescription testdescription test',
             'https://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg',
             [
                 new Ingredient("Papaya",20),
                 new Ingredient("Cuisoare",30),
             ]),
        new Recipe(
            'A test recipe2', 
            'description test2description testdescription testdescription testdescription testdescription test',
            'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg',
            [
                new Ingredient("Papaya",20),
                new Ingredient("Cuisoare",30),
            ]),
        new Recipe('A test recipe2',
         'description test2description testdescription testdescription testdescription testdescription test',
         'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg',
         [
            new Ingredient("Papaya",20),
            new Ingredient("Cuisoare",30),
        ]),
        new Recipe('A test recipe2',
         'description test2description testdescription testdescription testdescription testdescription test',
         'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg',
         [
            new Ingredient("Papaya",20),
            new Ingredient("Cuisoare",30),
        ]),
      ];

      getRecipes()
      {
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients:Ingredient[])
      {
        this.slService.addIngredients(ingredients);
      }

      getRecipe(index:number)
      {
          return this.recipes[index];
      }
}