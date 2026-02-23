import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home';
import { MovieListComponent } from './components/movie-list/movie-list';
import { MovieDetailComponent } from './components/movie-details/movie-detail';
import { FavoritesComponent } from './components/favourites/favourites';
import { LoginComponent } from './components/login/login';
import { authguardGuard } from './guards/authguard-guard';
import { NotFoundComponent } from './components/not-found/not-found';

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate:[authguardGuard] },
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailComponent,canActivate:[authguardGuard] },
  { path: 'favorites', component: FavoritesComponent ,canActivate:[authguardGuard]},
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];
