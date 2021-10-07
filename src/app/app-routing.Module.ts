import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthorListComponent} from "./components/author-list/author-list.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {HomeComponent} from "./components/home/home.component";
import {FeedAuthorComponent} from "./components/feed-author/feed-author.component";
import {AuthorsComponent} from "./components/authors/authors.component";

const routes: Routes = [
  { path: 'authors/:authorId', component: FeedAuthorComponent },
  { path: 'authors/:OrderBy', component: AuthorListComponent },
  { path: 'authors', component: AuthorsComponent },

  { path: 'home', component: HomeComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
