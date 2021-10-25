import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "./Guards/AuthGuard";
import {AuthorListTableComponent} from "./components/author-list-table/author-list-table.component";
import {AuthorComponent} from "./components/author/author.component";
import {BookListTableComponent} from "./components/book-list-table/book-list-table.component";
import {BookComponent} from "./components/book/book.component";
import {PublisherComponent} from "./components/publisher/publisher.component";
import {PublisherListTableComponent} from "./components/publisher-list-table/publisher-list-table.component";
import {ProfileComponent} from "./components/profile/profile.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'author/:id', component: AuthorComponent },
  { path: 'authors', component: AuthorListTableComponent},// canActivate: [AuthGuard] },
  { path: 'book/:id', component: BookComponent },
  { path: 'books', component: BookListTableComponent},// canActivate: [AuthGuard] },
  { path: 'publisher/:id', component: PublisherComponent },
  { path: 'publishers', component: PublisherListTableComponent},// canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent},
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
