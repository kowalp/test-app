import { AutenthicationService } from 'src/app/shared/services/autenthication.service';
import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../shared/services/requests.service';
import { User } from '../shared/interfaces/User';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  authIsLoaded = false;
  isLoggedIn = false;
  user: User;
  constructor(private requestsService: RequestsService, private authenticationService: AutenthicationService) { }

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
        console.log(res);
      }
    );
  }
  logOut() {

  }
}
