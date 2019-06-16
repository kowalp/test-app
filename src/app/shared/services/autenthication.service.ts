import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import data from '../database.json';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AutenthicationService {
content = data;
  constructor(private httpClient: HttpClient, private router: Router) {
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
            return this.router.navigate(['youtube']);
        }
      }
    }
  }
}
