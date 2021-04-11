import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { Recipe } from "../../recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})

export class RecipesComponent implements OnInit {

  constructor(private recipesService: DataService) { }
  recipes: Recipe[] = [];
  availableRecipes: Recipe[] = [];
  currentRecipes: Recipe[] = [];

  setAvailableRecipes(recipes: Recipe[]): void {
    this.availableRecipes = recipes;
  }

  setCurrentRecipes(recipes: Recipe[]): void {
    this.currentRecipes = recipes;
  }

  getRecipes(): void {
    this.recipesService.getRecipes().subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
  }

  ngOnInit(): void {
    this.getRecipes();
  }
}
