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
  apiURL: string= 'https://api.themoviedb.org/3/'
  getMovies(endPoint: string, query?: string, page?: number){
    if (page) {
      return this.http.get(`${this.apiURL}${endPoint}${query}${page}`)
    } else {
      return this.http.get(`${this.apiURL}${endPoint}${query}`)
    }
  }

  // getMovie(id: number) {
  //   return of(Movies.find(movie => movie.id === id));
  // }
  //do I need to call on the API movie id property to route links properly?
}
