import { Component, OnInit,Input } from '@angular/core';
import { ApiResponseService } from '../api-response.service';
import { MovieParent, Movie } from '../api-interfaces'
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WatchListPageComponent } from '../watch-list-page/watch-list-page.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
@Input() movie:any;
  constructor(private api: ApiResponseService){}

  ngOnInit(): void {
    this.api.getMovies(this.endPointURL).subscribe((data: MovieParent) =>{
      this.movies = data.results})
    }  

  movies: any[];
  searchResults: boolean = false;
  query: string;
  endPointURL: string='discover/movie?api_key=ab96898a4ea60dd2468dcd8ae39dd30c';
  searchEndURL: string=`search/movie?api_key=ab96898a4ea60dd2468dcd8ae39dd30c`;
  currentPage: number= 1;
  imagePath: string= "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
  addPage(url, page) {
    return url += `&page=${page}`;
  }
  addQuery(url, query){
    return url += query;
  }
  addAdult(url, adult){
    return url += adult;
  }
  addYear(url, year){
    return url += year;
  }
  addGenre(url, genre){
    return url += genre;
  }
  searched(event){
    this.movies = event.data.results;
    this.query = event.query;
    this.searchResults = true;
    this.currentPage = 1;
  }
  nextPage(){
    this.currentPage++;
    if (this.searchResults) {
      let endPoint = this.addPage(this.searchEndURL, this.currentPage);
      endPoint = this.addQuery(endPoint, this.query);
      this.api.getMovies(endPoint).subscribe((data: MovieParent) =>{
        this.movies = data.results})
    } else {
      let endPoint = this.addPage(this.endPointURL, this.currentPage);
      this.api.getMovies(endPoint).subscribe((data: MovieParent) =>{
      this.movies = data.results})
    }
  }
  lastPage(){
    if (this.currentPage !== 1) {
        this.currentPage--;
      if (this.searchResults) {
        let endPoint = this.addPage(this.searchEndURL, this.currentPage);
        endPoint = this.addQuery(endPoint, this.query);
        this.api.getMovies(endPoint).subscribe((data: MovieParent) =>{
          this.movies = data.results})
      } else {
        this.addPage(this.endPointURL, this.currentPage)
        this.api.getMovies(this.endPointURL).subscribe((data: MovieParent) =>{
        this.movies = data.results})
      }
    }
  }
}
