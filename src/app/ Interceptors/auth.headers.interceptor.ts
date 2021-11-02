import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';

@Injectable()
export class AuthHeadersInterceptor implements HttpInterceptor {
  constructor( public authService: OAuthService ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        //'Connection' : 'keep-alive',
        'Content-Type' : 'application/json',
        'Cache-Control': 'no-cache',
        'Authorization': `Bearer ${this.authService.getAccessToken()}`,

      },
    });

    return next.handle(req);
  }
}
