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
import {AboutComponent} from "./components/about/about.component";
import {UserComponent} from "./components/user/user.component";
import {EditAuthorComponent} from "./components/edit-author/edit-author.component";
import {EditBookComponent} from "./components/edit-book/edit-book.component";
import {EditPublisherComponent} from "./components/edit-publisher/edit-publisher.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'author/:id', component: AuthorComponent },
  { path: 'author/edit/:id', component: EditAuthorComponent },
  { path: 'authors', component: AuthorListTableComponent},// canActivate: [AuthGuard] },
  { path: 'book/:id', component: BookComponent },
  { path: 'book/edit/:id', component: EditBookComponent },
  { path: 'books', component: BookListTableComponent},// canActivate: [AuthGuard] },
  { path: 'publisher/:id', component: PublisherComponent },
  { path: 'publisher/edit/:id', component: EditPublisherComponent },
  { path: 'publishers', component: PublisherListTableComponent},// canActivate: [AuthGuard] },
  { path: 'user/:id', component: UserComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'about', component: AboutComponent},
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
