import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from "../../services/data.service";
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  constructor(
    private recipesService: DataService,
    private router: Router
  ) { }

  recipe: Omit<Recipe, 'id'> = {
    pictureUrl: "",
    name: "",
    cousine: "",
    type: "",
    cookingTime: 0,
    ingredients: "",
    description: ""
  };

  ngOnInit(): void { }

  addRecipe: (recipe: Recipe | Omit<Recipe, 'id'>) => void = (recipe) => {
    this.recipesService.addRecipe(recipe as Omit<Recipe, 'id'>).subscribe((recipe: Recipe) => {
      this.router.navigate([`/show/${recipe.id}`]);
    });
  }
}
