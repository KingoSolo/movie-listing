import { Injectable,inject, signal,computed} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class Movieservice {
  
  http = inject(HttpClient);

  url = 'http://localhost:3000/movies';

  moviesArray = signal <Movie[]>([])


  getAllMovies(){
    this.http.get<Movie[]>(this.url).subscribe({
      next: (data) => {this.moviesArray.set(data),
        console.log(this.moviesArray)
       },
      error:(err) => {alert(`Error occured: ${err.message}`)}
    })
  }

  getById(id:number){
    return this.http.get<Movie>(`url/${id}`)
  }
}
