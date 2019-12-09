import { Component, OnInit, Input } from '@angular/core';
import { Reddit } from 'src/app/core/interfaces/reddit.interface';

@Component({
  selector: 'app-reddit-list',
  templateUrl: './reddit-list.component.html',
  styleUrls: ['./reddit-list.component.scss']
})
export class RedditListComponent {
  @Input() reddits: Reddit[];
}
