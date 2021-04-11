import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { Category } from "../../category.model";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoriesService: DataService) { }
  categories: Category[] = [];

  getCategories(): void {
    this.categoriesService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    })
  }

  ngOnInit(): void {
    this.getCategories();
  }

}
