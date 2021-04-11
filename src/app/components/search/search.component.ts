import { Component, Input, OnInit, Output, EventEmitter, SimpleChange } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  @Input() recipes: Recipe[] = [];
  @Output() changeAvailableRecipes = new EventEmitter<Recipe[]>(true);
  
  searchPhrase = "";
  maxTime = "";

  updateSearchPhrase(event: any) {
    const value = event.target.value;
    this.searchPhrase = value;
    this.search();
  }

  updateMaxTime(event: any) {
    const value = event.target.value;
    this.maxTime = value;
    this.search();
  }

  search() {
    if(this.recipes) {
      const filterRecipe = (recipe: Recipe): boolean => {
        const recipeName = recipe.name.toUpperCase();
        const searchPhrase = this.searchPhrase.toUpperCase();
        const containsPhrase = recipeName.includes(searchPhrase);

        const maxTime = parseInt(this.maxTime, 10);
        const inTimeRange = !maxTime || recipe.cookingTime <= maxTime;

        return containsPhrase && inTimeRange;
      }

      const newRecipes: Recipe[] = this.recipes.filter(filterRecipe);
      this.changeAvailableRecipes.emit(newRecipes);     
    }
  }


  ngOnInit(): void {
    this.search();
  }

  ngOnChanges(changes: SimpleChange) { 
    if (!changes.previousValue || changes.currentValue.recipes !== changes.previousValue.recipes) {
      this.search();
    }
  }
}
