import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../../services/favourite-services';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './favourites.html',
  styleUrls: ['./favourites.css']
})
export class FavoritesComponent {
  favoritesService = inject(FavoritesService);

  favs = computed(() => this.favoritesService.favorites());

  remove(id:  number) {
    this.favoritesService.remove(id);
  }
}