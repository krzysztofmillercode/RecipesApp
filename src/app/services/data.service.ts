import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipe.model';
import { Category, Subcategory } from '../category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private httpClient: HttpClient) {}
  serverUrl = 'http://localhost:4454';
  getRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(`${this.serverUrl}/recipes`);
  }
  getRecipe(recipeId: string): Observable<Recipe> {
    return this.httpClient.get<Recipe>(`${this.serverUrl}/recipe/${recipeId}`);
  }
  updateRecipe(recipe: Recipe): Observable<void> {
    return this.httpClient.put<void>(`${this.serverUrl}/recipe/${recipe.id}`, recipe);
  }
  addRecipe(recipe: Omit<Recipe, 'id'>): Observable<Recipe> {
    return this.httpClient.post<Recipe>(`${this.serverUrl}/recipe`, recipe);
  }
  
  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.serverUrl}/categories`);
  }
  getCategory(categoryId: string): Observable<Category> {
    return this.httpClient.get<Category>(`${this.serverUrl}/category/${categoryId}`);
  }
  getSubcategory(categoryId: string, subcategoryId: string): Observable<Subcategory> {
    return this.httpClient.get<Subcategory>(`${this.serverUrl}/category/${categoryId}/${subcategoryId}`);
  }
}
