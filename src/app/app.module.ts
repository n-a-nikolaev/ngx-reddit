import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';
import { NewRedditFormComponent } from './components/new-reddit-form/new-reddit-form.component';
import { RedditItemComponent } from './components/reddit-item/reddit-item.component';
import { RedditListComponent } from './components/reddit-list/reddit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewRedditFormComponent,
    RedditItemComponent,
    RedditListComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
