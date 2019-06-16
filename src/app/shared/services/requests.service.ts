import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class RequestsService {
  apiUrl = 'https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyDCr_FUlHF6xqyfq0-h0L3_xWN4t26agdw';
  constructor(private httpClient: HttpClient) { }

  SendForm(inputValue): Observable<any[]> {
    const reqHeader = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get<any>(`${this.apiUrl}&q=${inputValue}&part=snippet,statistics&fields=items(id,snippet,statistics)`,
    {headers: reqHeader});
  }
}
