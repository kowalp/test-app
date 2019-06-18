import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import data from '../database.json';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../interfaces/User.js';
declare var gapi: any;
@Injectable({
  providedIn: 'root'
})
export class AutenthicationService {
public content = data;
public auth2: any;
public user$: BehaviorSubject<User> = new BehaviorSubject<User>(null);
public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
public isLoaded$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private router: Router, private zone: NgZone, private httpClient: HttpClient) {
  }

  CheckEmail(email) {
    localStorage.removeItem('email');
    for (const key in this.content) {
      if (email === this.content[key].email) {
        localStorage.setItem('email', email);
        return this.router.navigate(['password']);
      }
    }
  }
  CheckPassword(password) {
    for (const key in this.content) {
      if (localStorage.getItem('email') === this.content[key].email) {
        if (password === this.content[key].password) {
          if (!localStorage.getItem('token')) {
            localStorage.removeItem('token');
            localStorage.setItem('token', 'true');
          }
          return this.router.navigate(['youtube']);
        }
      }
    }
  }
  validateToken(token: string): Observable<User> {
    const reqHeader = new HttpHeaders().set('Authorization', 'Bearer ' + token)
    .set('Accept', 'application/json');
    return this.httpClient.get<User>(`https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest`,
    {headers: reqHeader});

  }
  signIn(): void {
        this.auth2.signIn().then(user => {
            localStorage.setItem('youtubeToken', user.getAuthResponse().id_token);
            this.validateToken(user.getAuthResponse().id_token).subscribe(client => {
                this.zone.run(() => {
                    this.user$.next(client);
                    this.isLoggedIn$.next(true);
                });
            },
                (err) => {
                    console.error(err);
                });
        });
    }
  signOut(): void {
      this.auth2.signOut().then(() => {
          this.zone.run(() => {
              this.isLoggedIn$.next(false);
              this.user$.next(null);
          });
      },
          (err) => {
              console.error(err);
          });
  }
  loadAuth2(): void {
    gapi.load('auth2', () => {
        gapi.auth2.init({
            client_id: '251419557466-qvpcuol1cona2tjg99d5ia3pkrhq9fr3.apps.googleusercontent.com',
            fetch_basic_profile: true
        }).then((auth) => {
            this.zone.run(() => {
                this.auth2 = auth;
                this.isLoaded$.next(true);
            });
        },
        );
    });
}
}
