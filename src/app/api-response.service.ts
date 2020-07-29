import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MovieParent } from './api-interfaces';
=======
import { HttpClient } from '@angular/common/http';
>>>>>>> 801e7aa712754ddd69e1e9dcd1e1045c3626c91e
import { Movie } from './api-interfaces';
import { Observable, of } from 'rxjs';

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

  getMovieDetail(id: string) {
     return this.http.get(`${this.apiURL}movie/${id}?api_key=ab96898a4ea60dd2468dcd8ae39dd30c`);
   }


}
