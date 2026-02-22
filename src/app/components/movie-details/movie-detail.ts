import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Movieservice } from '../../services/movieservice';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.html',
  styleUrls: ['./movie-detail.css']
})
export class MovieDetailComponent implements OnInit {
  moviesFromService = inject(Movieservice);
  route = inject(ActivatedRoute);

  movie = signal<Movie | null>(null);

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (!idParam) {
      console.error('No movie id in route');
      return;
    }

    const id = Number(idParam);
    if (Number.isNaN(id)) {
      console.error('Invalid movie id:', idParam);
      return;
    }

    this.moviesFromService.getById(id).subscribe({
      next: (data) => this.movie.set(data),
      error: (err) => console.error('Error loading movie:', err)
    });
  }
}
