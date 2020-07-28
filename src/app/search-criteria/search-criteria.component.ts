import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ApiResponseService } from '../api-response.service';
import { MovieParent, Movie } from '../api-interfaces';

interface returnObj {
  query: string,
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
  endPointURL: string='search/movie?api_key=ab96898a4ea60dd2468dcd8ae39dd30c';
  obj: returnObj;
  @Output() onSearch = new EventEmitter<object>();
  getSearch(f) {
    let query: string = '&query=' + f.value.query;
    let suffix:string = this.endPointURL.concat(query);
    console.log(query);
    this.api.getMovies(suffix).subscribe((data: MovieParent) =>{
      this.obj = {
        query: query,
        data: data
      };
      this.onSearch.emit(this.obj);
    })
  }

}
