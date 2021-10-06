import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthorListComponent} from "./components/author-list/author-list.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  { path: 'author/:sortOption', component: AuthorListComponent },
  { path: '**', component: NotFoundComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
