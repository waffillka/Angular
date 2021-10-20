import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "./Guards/AuthGuard";
import {AuthorListTableComponent} from "./components/author-list-table/author-list-table.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'table', component: AuthorListTableComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
