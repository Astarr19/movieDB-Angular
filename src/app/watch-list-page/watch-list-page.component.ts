import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { MovieParent, Movie } from '../api-interfaces';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-watch-list-page',
  templateUrl: './watch-list-page.component.html',
  styleUrls: ['./watch-list-page.component.css']
})
export class WatchListPageComponent implements OnInit {
  imagePath: string= "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
  constructor() { }

  ngOnInit(): void {
  }

}
