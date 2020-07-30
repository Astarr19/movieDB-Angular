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
<<<<<<< HEAD
 remove(item){
    this.watchList.splice(item,1);
  }
  removeFromWatchList(target){
    for (let element of this.watchList) {
      target.splice(element, 1);
    }
=======
  remove(index){
    this.watchList.splice(index,1);
>>>>>>> e8b779459021e2952670db3bf6e7fb29b9cd853b
  }
}
