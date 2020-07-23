import { Component, OnInit } from '@angular/core';
import { ApiResponseService } from '../api-response.service';
import { MovieParent } from '../api-interfaces'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private api: ApiResponseService){}

  movies: any;

  ngOnInit(): void {
    this.api.getMovies().subscribe((data: MovieParent) =>{
      this.movies = data.results})
    }
  

}
