import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.Module";
import { AuthorComponent } from './components/author/author.component';
import { AuthorListComponent } from './components/author-list/author-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthorComponent,
    AuthorListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
