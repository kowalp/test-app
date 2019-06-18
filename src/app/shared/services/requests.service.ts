import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class RequestsService {
  apiUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25';
  token = localStorage.getItem('youtubeToken');
  constructor(private httpClient: HttpClient) { }


  SendForm(inputValue): Observable<any[]> {
    const a = '&part=snippet,statistics&key=AIzaSyDfK8K7ZLkdxH7f_FWbH0iq553IoYAcBAM';
    const reqHeader = new HttpHeaders()
    .set('Accept', 'application/json');
    return this.httpClient.get<any>(`${this.apiUrl}&q=${inputValue}&fields=items(id,snippet(title,thumbnails,description))${a}`,
    {headers: reqHeader});
  }
  findTags(videoId) {
    const key = `https://www.googleapis.com/youtube/v3/videos?&key=AIzaSyDfK8K7ZLkdxH7f_FWbH0iq553IoYAcBAM`;
    const hey = '&fields=items(snippet(tags,description,title))';
    const reqHeader = new HttpHeaders()
    .set('Accept', 'application/json');
    return this.httpClient.get(`${key}${hey}&part=snippet,statistics&id=${videoId}`,
    {headers: reqHeader});
  }
}
