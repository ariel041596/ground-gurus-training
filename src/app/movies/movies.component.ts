import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../model/movie';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  @Input()
  movie: Movie;
}
