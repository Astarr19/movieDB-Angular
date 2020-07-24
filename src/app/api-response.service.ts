import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiResponseService {

  constructor(private http: HttpClient) { }
  apiURL: string= 'https://api.themoviedb.org/3/'
  getMovies(endPoint: string, query?: string, page?: number){
    if (page) {
      return this.http.get(`${this.apiURL}${endPoint}${query}${page}`)
    } else {
      return this.http.get(`${this.apiURL}${endPoint}${query}`)
    }
  }
}
