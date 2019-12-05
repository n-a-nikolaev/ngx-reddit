import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Reddit } from '../interfaces/reddit.interface';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  public reddits: Observable<Reddit[]>;
  private redditList: Reddit[] = [];

  private redditListSubject: BehaviorSubject<Reddit[]> = new BehaviorSubject<Reddit[]>(this.redditList);

  constructor() {
    this.reddits = this.redditListSubject.asObservable();
  }

  public updateRedditsList(reddit: Reddit) {
    this.redditList.push(reddit);
    this.redditListSubject.next(this.redditList);
  }
}
