import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {AppRoutingModule} from "./app-routing.Module";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ProfileComponent } from './components/profile/profile.component';
import {OAuthModule, OAuthService, OAuthStorage} from "angular-oauth2-oidc";
import {AuthGuard} from "./Guards/AuthGuard";
import {authConfig} from "./Config/AuthConfig";
import {JwksValidationHandler} from "angular-oauth2-oidc-jwks";
import {environment} from "../environments/environment";
import {AuthRedirectInterceptor} from "./ Interceptors/auth.interceptor";
import {AuthHeadersInterceptor} from "./ Interceptors/auth.headers.interceptor";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AuthorListTableComponent } from './components/author-list-table/author-list-table.component';
import { AuthorComponent } from './components/author/author.component';
import { BookListTableComponent } from './components/book-list-table/book-list-table.component';
import { PublisherListTableComponent } from './components/publisher-list-table/publisher-list-table.component';
import { PublisherComponent } from './components/publisher/publisher.component';
import { BookComponent } from './components/book/book.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import { NavbarDarkComponent } from './components/navbar-dark/navbar-dark.component';
import { AboutComponent } from './components/about/about.component';
import { UserComponent } from './components/user/user.component';
import { EditAuthorComponent } from './components/edit-author/edit-author.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { EditPublisherComponent } from './components/edit-publisher/edit-publisher.component';
import {AdminGuard} from "./Guards/rightsGuards/AdminGuard";
import {JWTTokenService} from "./services/JWTTokenService";
import {ManagerGuard} from "./Guards/rightsGuards/ManagerGuard";
import { AuthorDialogComponent } from './components/author-dialog/author-dialog.component';
import { PublisherDialogComponent } from './components/publisher-dialog/publisher-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {DateAdapter, MatCommonModule, MatNativeDateModule} from "@angular/material/core";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MatButtonToggleModule} from "@angular/material/button-toggle";


export function initApplication(oauthService: OAuthService) {
  return () => {
    oauthService.configure(authConfig);
    oauthService.tokenValidationHandler = new JwksValidationHandler();
    return oauthService
      .loadDiscoveryDocumentAndTryLogin()
      .then(() => {
        if (oauthService.hasValidAccessToken()) {
          oauthService.setupAutomaticSilentRefresh();
        } else {
          oauthService.initImplicitFlow();
        }
      });
  };
}

let MatMomentDateModule;

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    ProfileComponent,
    AuthorListTableComponent,
    AuthorComponent,
    BookListTableComponent,
    PublisherListTableComponent,
    PublisherComponent,
    BookComponent,
    NavbarDarkComponent,
    AboutComponent,
    UserComponent,
    EditAuthorComponent,
    EditBookComponent,
    EditPublisherComponent,
    AuthorDialogComponent,
    PublisherDialogComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        OAuthModule.forRoot({
            resourceServer: {
                allowedUrls: [
                    environment.clientPortalApiConfig.host
                ],
                sendAccessToken: true
            }
        }),
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatNativeDateModule,
        //MatMomentDateModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCommonModule,
        MatCardModule,
        MatTabsModule,
        MatSidenavModule,
        MatListModule,
        MatDialogModule,
        MatToolbarModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatCheckboxModule,
        ReactiveFormsModule,
        FormsModule,
        MatDatepickerModule,
        MatBottomSheetModule,
        MatButtonToggleModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeadersInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthRedirectInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initApplication,
      deps: [OAuthService],
      multi: true
    },
    { provide: OAuthStorage, useValue: localStorage },
    AuthGuard,
    AdminGuard,
    ManagerGuard,
    { provide: JWT_OPTIONS,
      useValue: JWT_OPTIONS
    },
    JwtHelperService,
    JWTTokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
