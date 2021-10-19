import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {AppRoutingModule} from "./app-routing.Module";
import { AuthorComponent } from './components/author/author.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { BookComponent } from './components/book/book.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { FeedAuthorComponent } from './components/feed-author/feed-author.component';
import { FeedBookComponent } from './components/feed-book/feed-book.component';
import { BookShortComponent } from './components/book-short/book-short.component';
import { ProfileComponent } from './components/profile/profile.component';
import {OAuthModule, OAuthService, OAuthStorage} from "angular-oauth2-oidc";
import {AuthGuard} from "./Guards/AuthGuard";
import {authConfig} from "./Config/AuthConfig";
import {JwksValidationHandler} from "angular-oauth2-oidc-jwks";
import {environment} from "../environments/environment";
import {AuthRedirectInterceptor} from "./ Interceptors/auth.interceptor";
import {AuthHeadersInterceptor} from "./ Interceptors/auth.headers.interceptor";


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
    BooksListComponent,
    FeedAuthorComponent,
    FeedBookComponent,
    BookShortComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
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
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
