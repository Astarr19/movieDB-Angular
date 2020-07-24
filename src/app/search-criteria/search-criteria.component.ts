import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  endPointURL: string='search/movie?api_key=ab96898a4ea60dd2468dcd8ae39dd30c&query=';
  query: string;
  searchResults: any;
  getSearch(f) {
    this.api.getMovies(this.endPointURL,f.value.query).subscribe((data: MovieParent) =>{
      this.searchResults = data.results;
    })
  }

}
