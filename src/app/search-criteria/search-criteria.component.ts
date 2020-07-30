import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ApiResponseService } from '../api-response.service';
import { MovieParent, Movie } from '../api-interfaces';

interface Obj {
  suffix: string,
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
  obj: Obj;
  @Output() onSearch = new EventEmitter<object>();
  @Output() criteriaSearch = new EventEmitter<object>();
  getSearch(f) {
    let suffix:string = `${this.searchEndURL}&query=${f.value.query}`;
    this.api.getMovies(suffix).subscribe((data: MovieParent) =>{
      this.obj = {
        suffix: suffix,
        data: data
      };
      this.onSearch.emit(this.obj);
    })
  }
  getCriteria(g){
    let suffix: string;
    if (g.value.year === undefined){
      suffix = `${this.endPointURL}&include_adult=${g.value.adult}&with_original_language=${g.value.language}`;
    } else {
      suffix = `${this.endPointURL}&include_adult=${g.value.adult}&primary_release_year=${g.value.year}&with_original_language=${g.value.language}`;
    }
    this.api.getMovies(suffix).subscribe((data: MovieParent) =>{
      this.obj = {
        suffix: suffix,
        data: data
      };
      this.criteriaSearch.emit(this.obj);
    })
  }
}
