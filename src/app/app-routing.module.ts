import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './pages/recipes/recipes.component';
import { ShowComponent } from './pages/show/show.component';
import { EditComponent } from './pages/edit/edit.component';
import { CreateComponent } from './pages/create/create.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryComponent } from './pages/category/category.component';
import { SubcategoryComponent } from './pages/subcategory/subcategory.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  { path: 'show/:id', component: ShowComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'create', component: CreateComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'category/:categoryId', component: CategoryComponent },
  { path: 'category/:categoryId/:subcategoryId', component: SubcategoryComponent },
  { path: "", redirectTo:"/recipes", pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
