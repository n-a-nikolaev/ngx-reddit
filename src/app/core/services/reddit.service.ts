import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Reddit } from '../interfaces/reddit.interface';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  public reddits: Observable<Reddit[]>;

  private redditList: Reddit[] = JSON.parse(localStorage.getItem('reddits')) || [];
  private redditListSubject: BehaviorSubject<Reddit[]> = new BehaviorSubject<Reddit[]>(this.redditList);

  constructor() {
    this.reddits = this.redditListSubject.asObservable();
  }

  public updateRedditsList(reddit: Reddit) {
    this.redditList.push(reddit);
    localStorage.setItem('reddits', JSON.stringify(this.redditList));
    this.redditListSubject.next(this.redditList);
  }

  public upvoteReddit(id): void {
    const upvoted: any = this.redditList.map(reddit => {
      if (reddit.id === id) {
        reddit.votes += 1;
      }

      return reddit;
    }).slice(0);

    localStorage.setItem('reddits', JSON.stringify(upvoted));
    this.redditListSubject.next(upvoted);
  }

  public downvoteReddit(id) {
    const downvoted: any = this.redditList.map(reddit => {
      if (reddit.id === id) {
        reddit.votes -= 1;
      }

      return reddit;
    }).slice(0);

    localStorage.setItem('reddits', JSON.stringify(downvoted));
    this.redditListSubject.next(downvoted);
  }
}
