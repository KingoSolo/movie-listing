import { Injectable, signal, computed } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private readonly _favorites = signal<Movie[]>([]);


  favorites = computed(() => this._favorites());

  add(movie: Movie) {
    const exists = this._favorites().some(m => m.id === movie.id);
    if (exists) return; 
    
    this._favorites.update(list => [...list, movie]);
  }

  remove(id: Movie['id']) {
    this._favorites.update(list => list.filter(m => m.id !== id));
  }

  clear() {
    this._favorites.set([]);
  }
}