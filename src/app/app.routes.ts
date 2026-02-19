import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home';
import { MovieListComponent } from './components/movie-list/movie-list';
import { MovieDetailComponent } from './components/movie-details/movie-detail';
import { FavouritesComponent } from './components/favourites/favourites';
import { LoginComponent } from './components/login/login';
import { NotFoundComponent } from './components/not-found/not-found';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailComponent },
  { path: 'favorites', component: FavouritesComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];
