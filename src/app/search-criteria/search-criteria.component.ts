import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ApiResponseService } from '../api-response.service';
import { MovieParent, Movie } from '../api-interfaces';

interface SearchObj {
  query: string,
  data: MovieParent
}
interface CriteriaObj {
  genre: string;
  year: number;
  adult: boolean;
  data: MovieParent
}
@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  constructor(private api: ApiResponseService) {}

  ngOnInit(): void {
  }
  searchEndURL: string='search/movie?api_key=ab96898a4ea60dd2468dcd8ae39dd30c';
  endPointURL: string='discover/movie?api_key=ab96898a4ea60dd2468dcd8ae39dd30c';
  obj: SearchObj;
  obj2: CriteriaObj;
  @Output() onSearch = new EventEmitter<object>();
  @Output() criteriaSearch = new EventEmitter<object>();
  getSearch(f) {
    let query: string = '&query=' + f.value.query;
    let suffix:string = this.searchEndURL.concat(query);
    this.api.getMovies(suffix).subscribe((data: MovieParent) =>{
      this.obj = {
        query: query,
        data: data
      };
      this.onSearch.emit(this.obj);
    })
  }
  getCriteria(g){
    let suffix: string = `${this.endPointURL}&include_adult=${g.value.adult}&year=${g.value.year}&with_genres=${g.value.genre}`;
    this.api.getMovies(suffix).subscribe((data: MovieParent) =>{
      this.obj2 = {
        genre: g.value.genre,
        year: g.value.year,
        adult: g.value.adult,
        data: data
      };
      this.criteriaSearch.emit(this.obj2);
    })
  }
}
