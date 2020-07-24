import { Component, OnInit } from '@angular/core';
import { ApiResponseService } from '../api-response.service';
import { MovieParent } from '../api-interfaces'
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(private api: ApiResponseService){}

  movies: any[];
  searchResults: any[];
  endPointURL: string='discover/movie?api_key=ab96898a4ea60dd2468dcd8ae39dd30c&page=';
  currentPage: number= 1;
  imagePath: string= "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
  searched(event){
    this.movies = event;
  }
  nextPage(){
    this.currentPage++;
    this.api.getMovies(this.endPointURL,'',this.currentPage).subscribe((data: MovieParent) =>{
      this.movies = data.results})
  }
  lastPage(){
    if (this.currentPage !== 1) {
      this.currentPage--;
      this.api.getMovies(this.endPointURL,'',this.currentPage).subscribe((data: MovieParent) =>{
        this.movies = data.results})
    }
  }

  ngOnInit(): void {
    this.api.getMovies(this.endPointURL,'',this.currentPage).subscribe((data: MovieParent) =>{
      this.movies = data.results})
    }
}