import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiResponseService {

  movies: Movie[];

  constructor(private http: HttpClient) { }
  apiURL: string= 'https://api.themoviedb.org/3/'
  getMovies(endPoint: string){
    return this.http.get(this.apiURL + endPoint)
  }

  // getMovie(id: number) {
  //   return of(Movies.find(movie => movie.id === id));
  // }
  //do I need to call on the API movie id property to route links properly?
}
