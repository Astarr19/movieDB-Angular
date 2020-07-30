import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  constructor() { }
  watchList: any[] = [];

  add(item){
    this.watchList.push(item);
  }
  updateWatchList(target){
    for (let element of this.watchList) {
      target.push(element);
    }
  }
 remove(item){
    this.watchList.splice(item,1);
  }
  removeFromWatchList(target){
    for (let element of this.watchList) {
      target.splice(element, 1);
    }
  }
}
