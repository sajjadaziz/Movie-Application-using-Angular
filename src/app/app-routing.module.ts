import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SavedComponent } from './components/saved/saved.component';
import { WatchedComponent } from './components/watched/watched.component';
import { VideoComponent } from './components/video/video.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'Saved', component: SavedComponent},
  { path: 'Watched', component: WatchedComponent},
  { path: 'video', component: VideoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
