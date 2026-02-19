import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './movie-detail.html',
  styleUrls: ['./movie-detail.css']
})
export class MovieDetailComponent {}
