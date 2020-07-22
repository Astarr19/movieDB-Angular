import { Component, OnInit } from '@angular/core';
import { ApiResponseService } from '../api-response.service';
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private api: ApiResponseService){}

    movies: object;

  ngOnInit(): void {
    this.api.getMovies().subscribe((data) => this.movies = {...data})
  }


}
