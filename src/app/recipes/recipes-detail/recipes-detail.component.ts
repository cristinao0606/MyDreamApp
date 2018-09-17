import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  // @Input() recipe:Recipe;
  recipe: Recipe;
  id: number;
  constructor(private receipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

   this.route.params.subscribe(
     (params: Params) => {
       this.id = +params['id'];
       this.recipe = this.receipeService.getRecipe(this.id);
     }
   );
  }
  onAddToShoppingList() {
    this.receipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
 //   this.router.navigate(['../',this.id,'edit'], {relativeTo:this.route});
  }
}
