import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ButtonComponent } from './components/button/button.component';
import { SavedComponent } from './components/saved/saved.component';
import { MovieTileComponent } from './components/movie-tile/movie-tile.component';
import { HttpClientModule } from '@angular/common/http';
import { WatchedComponent } from './components/watched/watched.component';
import { VideoComponent } from './components/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ButtonComponent,
    SavedComponent,
    MovieTileComponent,
    WatchedComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxYoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
