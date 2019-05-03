import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';



@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('PIZZA',
               'i love pizza',
               'https://img.taste.com.au/-pwB6iPN/w720-h480-cfill-q80/taste/2017/10/mexican-taco-pizza-131640-1.jpg'),

               new Recipe('FALAFEL',
               'i love falafel',
               'https://toriavey.com/images/2011/01/Falafel-10-900x675.jpg'),
               
               new Recipe('HUMUS',
               'i love humus',
               'https://media-cdn.tripadvisor.com/media/photo-s/0d/4f/7a/8c/humus.jpg'),

               new Recipe('PEANUT BUTTER',
               'i love PB',
               'https://www.foundshit.com/pictures/food/peanut-butter.jpg')

  ];


  constructor() { }

  ngOnInit() {
  }

}
