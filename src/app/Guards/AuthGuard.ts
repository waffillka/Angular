import {CanActivate, Router} from "@angular/router";
import {OAuthService} from "angular-oauth2-oidc";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private oauthService: OAuthService, public router: Router) {}

  canActivate() : Observable<boolean> | boolean{

    if (this.oauthService.getIdentityClaims() == null)
    {
      this.oauthService.initLoginFlow();
      return false
    }

    return true;
  }
}
