import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from '../search-input/search-input';
import { RouterLink } from '@angular/router';
import { AuthServices } from '../../services/auth-services';
import { ɵInternalFormsSharedModule } from "@angular/forms";
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
    onLogout(){
        this.Authentication.logout()
  
        }
    }

