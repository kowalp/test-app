import { RequestsService } from './../../shared/services/requests.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized} from '@angular/router';

@Component({
  selector: 'app-youtube-details',
  templateUrl: './youtube-details.component.html',
  styleUrls: ['./youtube-details.component.sass']
})
export class YoutubeDetailsComponent implements OnInit {
  videoId = '';
  videoDetails = [];
  tags = [];
  constructor(private route: ActivatedRoute, private requestsService: RequestsService, private router: Router) { }
  ngOnInit() {
    // tslint:disable-next-line:no-string-literal
    this.videoId = this.route.snapshot.params['id'];
    this.requestsService.findTags(this.videoId)
    .subscribe(
      (res) => {
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            res[key].forEach(el => {
              el.snippet.tags.forEach(tag => {
                this.tags.push(tag);
              });
              const element = {
                title: el.snippet.title,
                description: el.snippet.description,
              };
              this.videoDetails.push(element);
            });
          }
        }
      }
    );
  }
}
