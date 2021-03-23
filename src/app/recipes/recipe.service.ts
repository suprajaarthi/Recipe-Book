import { Recipe } from './recipe.model';
import { EventEmitter,Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService
{
    recipeSelected = new EventEmitter<Recipe>();
	private recipes: Recipe[] = [
    new Recipe('BURGER', 'Delicious, lip-smacking and crunchy these words will only remind you of this amazing American dish popularly known as Burger.', 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Gordon_Ramsay_Burger.jpg',
    [
    new Ingredient('Meat',1),
    new Ingredient('Bun',2),
    new Ingredient('Cheese',1),
    new Ingredient('Tomato',1),
    new Ingredient('Onion',2),
    new Ingredient('Spinach',2),

    ]),

    new Recipe('GRILL CHICKEN', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/a/a3/BBQ_Chicken.jpg',
    [
    new Ingredient('Chicken',1),
    new Ingredient('Mayonnaise',1),
    ]),

     new Recipe('VEG PIZZA', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/6/61/Pizza_Prosciutto.jpg',[]),

    new Recipe('CURD RICE', 'This is Curd Rice', 'https://upload.wikimedia.org/wikipedia/commons/5/58/Curd_Rice.jpg',[]),

    new Recipe('VEG BIRIYANI', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/7/77/Vegetable_biriyani_%2829372046950%29.jpg',[]),
    
    new Recipe('RASAM', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/d/db/Rasam_Powder_The_Grand_Sweets_And_Snacks.jpg',[]),

 new Recipe('GULAB JAMUN', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/8/88/Gulaab_Jamun_%28homemade%21%29_bright.jpg',[]),
  ];
  constructor(private slService : ShoppingListService){}
  getRecipes()
  {
  	return this.recipes.slice();
  }
  getRecipe(id : number)
  {
  	return this.recipes.slice()[id];
  }


addIngredientsToShoppingList(ingredients: Ingredient[] ){
	this.slService.addIngredients(ingredients);
} 
}