import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
      new Recipe('Hotdog', 'A good ole hotdog', "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"),
      new Recipe('Hotdog', 'A good ole hotdog', "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"),
      new Recipe('Hotdog', 'A good ole hotdog', "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"),

    ];


    constructor() {

    }
    ngOnInit(): void {
      
    }
}
