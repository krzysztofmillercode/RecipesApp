import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { ShowComponent } from './pages/show/show.component';
import { EditComponent } from './pages/edit/edit.component';
import { CreateComponent } from './pages/create/create.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TitlePipe } from './pipes/title.pipe';
import { TimePipe } from './pipes/time.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { SearchComponent } from './components/search/search.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryComponent } from './pages/category/category.component';
import { SubcategoryComponent } from './pages/subcategory/subcategory.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecipesComponent,
    ShowComponent,
    EditComponent,
    CreateComponent,
    PageNotFoundComponent,
    TitlePipe,
    TimePipe,
    HighlightDirective,
    RecipeFormComponent,
    PaginationComponent,
    RecipeListComponent,
    SearchComponent,
    CategoriesComponent,
    CategoryComponent,
    SubcategoryComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
