import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthorListComponent} from "./components/author-list/author-list.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routes: Routes = [
  { path: 'feed', component: AuthorListComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
