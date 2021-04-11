import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from "../../services/data.service";
import { Category } from '../../category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(
    private categoryService: DataService,
    private route: ActivatedRoute
  ) { }

  category: Category | null = null;
  categoryId: string | null = null;

  getCategory(categoryId: string): void {
    this.categoryService.getCategory(categoryId).subscribe((category: Category) => {
      this.category = {
        ...category,
        values: category.values.map(
          category => ({
            ...category,
            recipesExample: category.recipes.splice(0, 3)
          })
        )
      };
    });
  }

  ngOnInit(): void {
      this.categoryId = this.route.snapshot.paramMap.get('categoryId');
      if(this.categoryId !== null) this.getCategory(this.categoryId);
  }

}
