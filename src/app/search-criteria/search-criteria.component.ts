import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ApiResponseService } from '../api-response.service';
import { MovieParent } from '../api-interfaces';

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
  @Output() onSearch = new EventEmitter<object>();
  getSearch(f) {
    let query: string = '&query=' + f.value.query;
    let suffix = this.endPointURL += query;
    this.api.getMovies(suffix).subscribe((data: MovieParent) =>{
      this.onSearch.emit(data.results);
    })
  }

}
