import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from "../../services/data.service";
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  constructor(
    private recipesService: DataService,
    private route: ActivatedRoute
  ) { }

  recipe: Recipe | null = null;
  id: string | null = null;

  getRecipe(recipeId: string): void {
    this.recipesService.getRecipe(recipeId).subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id !== null) this.getRecipe(this.id);
  }
}
