import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { WatchListPageComponent } from './watch-list-page/watch-list-page.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  {path:'', redirectTo:'/movie-list', pathMatch:'full'},
  {path: 'movie-list', component:MovieListComponent},
  {path: 'search-criteria', component:SearchCriteriaComponent},
  {path: 'watch-list', component:WatchListPageComponent},
  {path: 'detail', component:MovieDetailComponent},
  {path: 'detail/:id', component:MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
