import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedditItemComponent } from './reddit-item.component';

describe('RedditItemComponent', () => {
  let component: RedditItemComponent;
  let fixture: ComponentFixture<RedditItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedditItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedditItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
