import { Component, OnInit } from '@angular/core';
import { Movie, Cast } from '../model/movie';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent {
  movies = [
    new Movie('Angel Has Fallen', new Date("2019-04-26"),
      [
        new Cast('Gerald Buttler', 'Mask Rider'),
        new Cast('Gerald Buttler', 'Iron Man')
      ]),
    new Movie('Enemy has Fallen', new Date("2019-04-26"),
      [
        new Cast('Gerald Buttler', 'Marvel'),
        new Cast('Gerald Buttler', 'Superman')
      ]),

  ]

}
