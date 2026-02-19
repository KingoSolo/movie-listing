import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './favourites.html',
  styleUrls: ['./favourites.css']
})
export class FavouritesComponent {}
