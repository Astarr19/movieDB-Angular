import { Component, OnInit, Input } from '@angular/core';
import { ApiResponseService } from '../api-response.service';
import { MovieParent, Movie } from '../api-interfaces'
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WatchListPageComponent } from '../watch-list-page/watch-list-page.component';
import { WatchListService } from '../watch-list.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: any;
  imagePath: string= "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
  movies: any[];
  apiURL: string='discover/movie?api_key=ab96898a4ea60dd2468dcd8ae39dd30c';

  constructor(
    private api: ApiResponseService,
    private route: ActivatedRoute,
    private location: Location) { }
    private watchList: WatchListService
    

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.api.getMovieDetail(id).subscribe(movie => this.movie = movie);
    console.log(`${this.movie} selected`);
  }

  // addToWatch(item){
  //   this.watchList.add(item);
  //   console.log(item);
  //   alert("Movie Added To Watch List!")
  // }

  backClicked() {
    this.location.back();

  // searched(event){
  //   this.movies = event.data.results;
  //   this.apiURL = event.suffix;
  //   this.currentPage = 1;
  // }
  // criteriaSearched(event){
  //   this.movies = event.data.results;
  //   this.apiURL = event.suffix;
  //   this.currentPage = 1;
  // }

  // lastPage(){
  //   if (this.currentPage !== 1) {
  //       this.currentPage--;
  //       this.api.getMovies((this.apiURL + `&page=${this.currentPage}`)).subscribe((data: MovieParent) =>{
  //         this.movies = data.results})

}
}
