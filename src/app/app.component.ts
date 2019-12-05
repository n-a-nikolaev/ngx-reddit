import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Reddit } from './core/interfaces/reddit.interface';
import { RedditService } from './core/services/reddit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public title: string = 'Angular Reddit';
  public reddits: Reddit[];
  public redditsSubs: Subscription;

  constructor(private redditService: RedditService) { }

  public ngOnInit(): void {
    this.redditsSubs = this.redditService.reddits.subscribe(reddits => {
      this.reddits = reddits
    });
  }

  public ngOnDestroy(): void {
    this.redditsSubs.unsubscribe();
  }
}
