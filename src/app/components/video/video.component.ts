import { Component, HostListener, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  
  @HostBinding('window:resize')
  private onResize: any;

  id = '';
  width = 800;
  height = 450;

  playerVars = {
    cc_lang_pref: 'en'
  };

  player: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['link'];
    });
  }

  savePlayer(player: any) {
    this.player = player;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: any) {
    console.log('resizing');
    const screenWidth = event.target.innerWidth;
    console.log('screenWidth:', screenWidth);
    if (screenWidth <= 1024) {
      console.log('updating width and height');
      this.width = 50;
      this.height = 20;
    } else {
      console.log('not updating width and height');
      this.width = 800;
      this.height = 450;
    }
  }
}