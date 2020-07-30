import { Component, OnInit, Input } from '@angular/core';
import { ApiResponseService } from '../api-response.service';
import { MovieParent, Movie } from '../api-interfaces'
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WatchListPageComponent } from '../watch-list-page/watch-list-page.component';
import { WatchListService } from '../watch-list.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
@Input() movie:any;

  constructor(private api: ApiResponseService, private watchList: WatchListService){}

  ngOnInit(): void {
    this.api.getMovies(this.apiURL).subscribe((data: MovieParent) =>{
      this.movies = data.results})
    }  

  movies: any[];
  apiURL: string='discover/movie?api_key=ab96898a4ea60dd2468dcd8ae39dd30c';
  currentPage: number= 1;
  imagePath: string= "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
  
  searched(event){
    this.movies = event.data.results;
    this.apiURL = event.suffix;
    this.currentPage = 1;
  }
  criteriaSearched(event){
    this.movies = event.data.results;
    this.apiURL = event.suffix;
    this.currentPage = 1;
  }
  nextPage(){
    this.currentPage++;
    this.api.getMovies((this.apiURL + `&page=${this.currentPage}`)).subscribe((data: MovieParent) =>{
      this.movies = data.results})
  }
  lastPage(){
    if (this.currentPage !== 1) {
        this.currentPage--;
        this.api.getMovies((this.apiURL + `&page=${this.currentPage}`)).subscribe((data: MovieParent) =>{
          this.movies = data.results})
    }
  }
  addToWatch(item){
    this.watchList.add(item);
    console.log(item);
    alert("Movie Added To Watch List!")
  }
  
}
