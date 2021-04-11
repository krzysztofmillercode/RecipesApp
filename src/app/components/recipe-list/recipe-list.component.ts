import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor() { }
  @Input() recipes: Recipe[] = [];
  @Input() hasCreate: boolean = false;

  ngOnInit(): void {
  }

}
