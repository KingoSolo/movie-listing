import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list.html',
  styleUrls: ['./movie-list.css']
})
export class MovieListComponent  {}
