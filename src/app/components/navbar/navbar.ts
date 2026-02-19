import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchInputComponent } from '../search-input/search-input';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {}
