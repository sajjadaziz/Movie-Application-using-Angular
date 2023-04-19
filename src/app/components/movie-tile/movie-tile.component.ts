import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faNotFav, faEye as faNotEye } from '@fortawesome/free-regular-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css']
})
export class MovieTileComponent {

  @Input() imageUrl: string = ''; 
  @Input() link: string = ''; 
  @Input() id: number = 0; 
  @Input() isWatched: boolean = false; 
  @Input() isFav: boolean = false; 
  @Output() favClick = new EventEmitter;
  @Output() watchedClick = new EventEmitter;

  faFav = faNotFav;
  faWatched = faNotEye;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.faFav = this.isFav ? faHeart : faNotFav;
    this.faWatched = this.isWatched ? faEye : faNotEye;
  }

  onFavClick(): void {
    this.favClick.emit();
  }

  onWatchedClick(): void {
    this.watchedClick.emit();
  }
  
  onTileClick(): void {
    this.router.navigate(['/video'], { queryParams: { link: this.link } });
  }
}
