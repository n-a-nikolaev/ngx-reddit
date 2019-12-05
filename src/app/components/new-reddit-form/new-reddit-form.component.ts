import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { RedditService } from '../../core/services/reddit.service';

@Component({
  selector: 'app-new-reddit-form',
  templateUrl: './new-reddit-form.component.html',
  styleUrls: ['./new-reddit-form.component.scss']
})
export class NewRedditFormComponent implements OnInit {
  public redditForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private redditService: RedditService
  ) { }

  public ngOnInit(): void {
    this.redditForm = this.formBuilder.group({
      title: '',
      link: ''
    })
  }

  public onSubmit(): void {
    this.redditService.updateRedditsList(Object.assign(
      {},
      this.redditForm.value,
      { id: `${new Date().getTime()}-${this.redditForm.get('title').value.split(' ').join('-').toLowerCase()}` }
    ));
    this.redditForm.reset();
  }

}
