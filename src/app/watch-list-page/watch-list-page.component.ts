import { Component, OnInit } from '@angular/core';
import { WatchListService } from '../watch-list.service';

@Component({
  selector: 'app-watch-list-page',
  templateUrl: './watch-list-page.component.html',
  styleUrls: ['./watch-list-page.component.css']
})
export class WatchListPageComponent implements OnInit {

  constructor(private watchList: WatchListService) { }

  ngOnInit(): void {
  }

  watchListArr: any[]=[];
  imagePath: string= "https://image.tmdb.org/t/p/w600_and_h900_bestv2/";
  update(){
    this.watchList.updateWatchList(this.watchListArr);
  }
}
