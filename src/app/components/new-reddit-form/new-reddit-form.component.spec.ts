import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRedditFormComponent } from './new-reddit-form.component';

describe('NewRedditFormComponent', () => {
  let component: NewRedditFormComponent;
  let fixture: ComponentFixture<NewRedditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRedditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRedditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
