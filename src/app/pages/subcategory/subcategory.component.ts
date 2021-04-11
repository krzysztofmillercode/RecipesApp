import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from "../../services/data.service";
import { Subcategory } from '../../category.model';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.scss']
})
export class SubcategoryComponent implements OnInit {

  constructor(
    private categoryService: DataService,
    private route: ActivatedRoute
  ) { }

  subcategory: Subcategory | null = null;
  categoryId: string | null = null;
  subcategoryId: string | null = null;

  getSubcategory(categoryId: string, subcategoryId: string): void {
    this.categoryService.getSubcategory(categoryId, subcategoryId).subscribe((subcategory: Subcategory) => {
      this.subcategory = subcategory;
    });
  }

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('categoryId');
    this.subcategoryId = this.route.snapshot.paramMap.get('subcategoryId');
    if(this.categoryId !== null && this.subcategoryId !== null) 
      this.getSubcategory(this.categoryId, this.subcategoryId);
  }

}
