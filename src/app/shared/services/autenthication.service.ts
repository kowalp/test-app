import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AutenthicationService {

constructor(private httpClient: HttpClient) { }

  CheckEmail(): Observable<any> {
    return this.httpClient.get('../database.json');
  }
}
