import { Component, OnInit, Input } from '@angular/core';
import { ApiResponseService } from '../api-response.service';
import { MovieParent, Movie } from '../api-interfaces'
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() movie: Movie;

  constructor(private api: ApiResponseService) { }

  ngOnInit(): void {
  }

}
