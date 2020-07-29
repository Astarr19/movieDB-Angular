import { Component, OnInit, Input } from '@angular/core';
import { ApiResponseService } from '../api-response.service';
import { MovieParent, Movie } from '../api-interfaces'
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: any;
  imagePath: string= "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";

  constructor(
    private api: ApiResponseService,
    private route: ActivatedRoute,
    private location: Location) { }
    

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.api.getMovieDetail(id).subscribe(movie => this.movie = movie);
    console.log(`${this.movie} selected`);
  }

}
