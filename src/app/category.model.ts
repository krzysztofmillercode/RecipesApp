import { Recipe } from "./recipe.model";

export interface Category {
    id: number;
    name: string;
    title: string;
    description: string;
    values: Subcategory[];
}

export interface Subcategory {
    id: number;
    name: string;
    title: string;
    description: string;
    pictureUrl: string, 
    recipes: Recipe[];
    recipesExample?: Recipe[];
}
