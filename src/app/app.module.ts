import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {AppRoutingModule} from "./app-routing.Module";
import { AuthorComponent } from './components/author/author.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BookComponent } from './components/book/book.component';
import { BooksListComponent } from './components/books-list/books-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthorComponent,
    AuthorListComponent,
    AuthorsComponent,
    NotFoundComponent,
    HomeComponent,
    BookComponent,
    BooksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
