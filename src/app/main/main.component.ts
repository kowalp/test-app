import { AutenthicationService } from 'src/app/shared/services/autenthication.service';
import { Component, OnInit, ElementRef, ViewChild, ContentChild } from '@angular/core';
import { RequestsService } from '../shared/services/requests.service';
import { User } from '../shared/interfaces/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  authIsLoaded = false;
  isLoggedIn = false;
  user: User;
  youtubeVideos = [];
  videoId: string;
  showMyElement = false;
  constructor(private requestsService: RequestsService, private authenticationService: AutenthicationService, private router: Router
            , private el: ElementRef) { }

  signIn(): void {
    this.authenticationService.signIn();
    }
    signOut(): void {
    this.authenticationService.signOut();
    }
  ngOnInit() {
    this.authenticationService.isLoaded$.subscribe( value => {
      this.authIsLoaded = value;
  });

    this.authenticationService.isLoggedIn$.subscribe( value => {
      this.isLoggedIn = value;
  });

    this.authenticationService.user$.subscribe( value => {
      this.user = value;
  });

    this.authenticationService.loadAuth2();

  }
  onSubmit(f) {
    this.requestsService.SendForm(f.value.search)
    .subscribe(
      (res) => {
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            console.log(res);
            res[key].forEach(el => {
              const element = {
                Description: el.snippet.description,
                Title: el.snippet.title,
                Thumbnail: el.snippet.thumbnails.high.url,
                VideoId: el.id.videoId
              };
              this.youtubeVideos.push(element);
            });
          }
        }
      }
    );
  }
  logOut() {
    localStorage.removeItem('youtubeToken');
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.router.navigate(['/Login']);
  }
  details(videoId: string) {
    this.router.navigate(['/youtube', videoId]);
  }
}
