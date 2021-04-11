import { Component, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { Recipe } from 'src/app/recipe.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() { }
  @Input() recipes: Recipe[] = [];
  @Output() changeCurrentRecipes = new EventEmitter<Recipe[]>(true);

  currentPage = 0;
  lastPage = 0;
  reciperPerPage = 11;
  hasNext = false;
  hasPrev = false;

  goToPage(page: number): void {
    this.currentPage = page;
    this.hasNext = page < this.lastPage;
    this.hasPrev = page > 0;
    this.setCurrentRecipes();
  }

  setCurrentRecipes(): void {
    const first = this.currentPage * this.reciperPerPage;
    const last = first + this.reciperPerPage;
    const currentRecipes: Recipe[] = this.recipes.slice(first, last);
    this.changeCurrentRecipes.emit(currentRecipes)

    //this.currentRecipes = this.recipes.slice(first, last);
  }

  resetPagination(): void {
    if (this.recipes) {
      this.currentPage = 0;
      this.lastPage = Math.floor(this.recipes.length / this.reciperPerPage);
      this.hasPrev = false;
      this.hasNext = this.lastPage > this.currentPage;
      this.setCurrentRecipes();
    }
  }

  ngOnInit(): void {
    this.resetPagination();
  }

  ngOnChanges(changes: SimpleChange) { 
    if (!changes.previousValue || changes.currentValue.recipes !== changes.previousValue.recipes) {
      this.resetPagination();
    }
  }
}
