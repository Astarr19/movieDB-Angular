import { Component, OnInit,Input,Output,EventEmitter, AfterViewInit} from '@angular/core';
import { MovieParent, Movie } from '../api-interfaces';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { WatchListService } from '../watch-list.service';

@Component({
  selector: 'app-watch-list-page',
  templateUrl: './watch-list-page.component.html',
  styleUrls: ['./watch-list-page.component.css']
})
export class WatchListPageComponent implements OnInit {
  imagePath: string= "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
  constructor(private watchList: WatchListService) { }

  ngOnInit(): void {
    this.watchList.updateWatchList(this.watchListArr);
  }

  watchListArr: any[]=[];
  update(){
    this.watchList.updateWatchList(this.watchListArr);
  }
  removeMe(index){
    console.log("I WAS CLICKED")
    this.watchListArr.splice(index,1);
    this.watchList.remove(index)
  }
}
