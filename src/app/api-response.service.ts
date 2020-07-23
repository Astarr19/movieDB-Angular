import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiResponseService {

  constructor(private http: HttpClient) { }
  apiURL: string= 'https://api.themoviedb.org/3/discover/movie?api_key=ab96898a4ea60dd2468dcd8ae39dd30c'
  getMovies(){
    return this.http.get(`${this.apiURL}`)
  }
}
