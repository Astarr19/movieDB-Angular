import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MovieParent } from './api-interfaces';
import { Movie } from './api-interfaces';
import { Observable, of } from 'rxjs';

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

  getMovieDetail(id: string) {
     return this.http.get(`${this.apiURL}movie/${id}?api_key=ab96898a4ea60dd2468dcd8ae39dd30c`);
   }


}
