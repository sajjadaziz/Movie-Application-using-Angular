import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/movies';
import { MoviesService } from 'src/app/services/movies-service.service';

@Component({
  selector: 'app-watched',
  templateUrl: './watched.component.html',
  styleUrls: ['./watched.component.css']
})
export class WatchedComponent {

  movies: Movies[] = [];
  watchLater: Movies[] = [];
  watchedMovies: Movies[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    console.log("Hello");
    this.moviesService.getMovies().subscribe((movies) => this.movies = movies);
  }

  ngDoCheck(): void {
    if (this.movies.length && !this.watchedMovies.length) {
      // console.log("Hello");
      this.watchLater = this.movies.filter((m) => m.isFav && !m.isWatched);
      this.watchedMovies = this.movies.filter((m) => m.isWatched);
    }
  }

  onFavClick(movie: Movies): void {
    this.moviesService.updateMovie({ ...movie, isFav: !movie.isFav, isWatched: movie.isWatched }).subscribe((updatedMovie) => {
      if (updatedMovie.isWatched) {
        console.log("if1");
        const alreadyWatched = this.watchedMovies.find(movie => movie.id === updatedMovie.id);
        if (alreadyWatched) {
          console.log("if2");
          alreadyWatched.isFav = updatedMovie.isFav
          this.watchedMovies = this.watchedMovies.map((m) => {
            if (m.id === updatedMovie.id) {
              console.log("if3");
              return updatedMovie;
            }
            return m;
          })
        } else {
          console.log("else1");
          this.watchedMovies.push(updatedMovie);
        }
        this.watchLater = this.watchLater.filter((m) => m.id !== updatedMovie.id);
      }
      else {
        console.log("else2");
        const alreadyWatchLater = this.watchLater.find(movie => movie.id === updatedMovie.id);
        if (alreadyWatchLater) {
          console.log("if4");
          alreadyWatchLater.isFav = updatedMovie.isFav
          this.watchLater = this.watchLater.map((m) => {
            if (m.id === updatedMovie.id) {
              console.log("if5");
              return updatedMovie;
            }
            return m;
          })
        } else {
          console.log("else3");
          this.watchLater.push(updatedMovie);
        }
        this.watchedMovies = this.watchedMovies.filter((m) => m.id !== updatedMovie.id);
      }
    });
  }
  
  onWatchedClick(movie: Movies): void {
    const payloadMovie = { ...movie, isWatched: !movie.isWatched };
    payloadMovie.isFav = payloadMovie.isWatched ? payloadMovie.isFav : false;
    this.moviesService.updateMovie(payloadMovie).subscribe((updatedMovie) => {
      if (updatedMovie.isWatched) {
        this.watchedMovies.push(updatedMovie);
        this.watchLater = this.watchLater.filter((m) => m.id !== updatedMovie.id)
      } else {
        this.watchedMovies = this.watchedMovies.filter((m) => m.id !== updatedMovie.id);
        this.watchLater.push(updatedMovie);
      }
    });
  }
}