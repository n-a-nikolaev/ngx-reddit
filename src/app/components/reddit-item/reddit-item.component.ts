import { Component, OnInit, Input } from '@angular/core';
import { Reddit } from 'src/app/core/interfaces/reddit.interface';
import { RedditService } from 'src/app/core/services/reddit.service';

@Component({
  selector: 'app-reddit-item',
  templateUrl: './reddit-item.component.html',
  styleUrls: ['./reddit-item.component.scss']
})
export class RedditItemComponent {
  @Input() reddit: Reddit;

  constructor(private redditService: RedditService) { }

  public onUpvoteClick(id): void {
    this.redditService.upvoteReddit(id);
  }

  public onDownvoteClick(id): void {
    this.redditService.downvoteReddit(id);
  }
}
