import { Component, OnInit } from '@angular/core';
import { ApiResponseService } from '../api-response.service';
import { MovieParent } from '../api-interfaces';
import { Movie } from '../api-interfaces';
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(
    private api: ApiResponseService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  imagePath: string = "https://image.tmdb.org/t/p/w600_and_h900_bestv2/"

  movies: Movie[];
  // movies: any; (Aidan's original code)
  // image: string;"https://image.tmdb.org/t/p/w600_and_h900_bestv2/" 

  // selectedMovie: Movie;
  // onSelect(movie: Movie): void {
  //   this.selectedMovie = movie;
  // }

  ngOnInit(): void {
    this.api.getMovies().subscribe((data: MovieParent) => {
    this.movies = data.results});
    }

  getMovie(): void {
    // this.api.getMovies().subscribe((data: MovieParent) =>{
    //   this.movies = data.results});
    const id = +this.route.snapshot.paramMap.get('id');
    // this.api.getMovies().subscribe(movie => this.movie = movie);
  }
}
