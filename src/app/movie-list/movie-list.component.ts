import { Component, OnInit } from '@angular/core';
import { ApiResponseService } from '../api-response.service';
import { MovieParent } from '../api-interfaces';
import { Movie } from '../api-interfaces';
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private api: ApiResponseService){}

  movies: any;
  // image: string;"https://image.tmdb.org/t/p/w600_and_h900_bestv2/" 

  ngOnInit(): void {
    this.api.getMovies().subscribe((data: MovieParent) =>{
      this.movies = data.results})
    }
}
