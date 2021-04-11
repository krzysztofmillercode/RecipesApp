import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  constructor() { }

  @Input() recipe: Recipe | Omit<Recipe, 'id'> | null = null;
  @Input() submitAction: (recipe: Recipe | Omit<Recipe, 'id'>) => void = () => {};
  @Input() cancelUrl: string = "";

  ngOnInit(): void {}

  onSubmit(): void {
    if(this.recipe) this.submitAction(this.recipe);
  }
}
