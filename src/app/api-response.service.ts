import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieParent } from './api-interfaces';
import { Movie } from './api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiResponseService {

  movies: Movie[];

  constructor(private http: HttpClient) { }
  apiURL: string= 'https://api.themoviedb.org/3/discover/movie?api_key=ab96898a4ea60dd2468dcd8ae39dd30c'
  getMovies(){
    return this.http.get(`${this.apiURL}`)
  }

  // getMovie(id: number) {
  //   return of(Movies.find(movie => movie.id === id));
  // }
  //do I need to call on the API movie id property to route links properly?
}
