import { Component, inject,computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from '../search-input/search-input';
import { RouterLink } from '@angular/router';
import { AuthServices } from '../../services/auth-services';
import { ɵInternalFormsSharedModule } from "@angular/forms";
import { FavoritesComponent } from '../favourites/favourites';
import { FavoritesService } from '../../services/favourite-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, ɵInternalFormsSharedModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {

  Authentication = inject(AuthServices)
  router = inject(Router)
  favoritesService = inject(FavoritesService);
  favCount = computed(() => this.favoritesService.count());
    onLogout(){
        this.Authentication.logout()
  
        }
    }

