import { Component,inject, OnInit,computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/movie.model';
import { Movieservice } from '../../services/movieservice';
import { FavoritesService } from '../../services/favourite-services';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-list.html',
  styleUrls: ['./movie-list.css']
})
export class MovieListComponent implements OnInit{

    movieservice = inject(Movieservice)
    favoritesService = inject(FavoritesService);

    myarray = computed(() => this.movieservice.moviesArray())
    ngOnInit():void{
        this.movieservice.getAllMovies()
    }
     addToFavorites(movie: Movie) {
    this.favoritesService.add(movie);
  }
}
