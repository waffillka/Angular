import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {OAuthService} from "angular-oauth2-oidc";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private oauthService: OAuthService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
    if (this.oauthService.hasValidAccessToken()) {
      console.log(this.oauthService.getIdentityClaims());
      return true;
    }

    this.router.navigate(['']);
    return false;
    /*if (this.oauthService.getIdentityClaims() == null)
    {
      this.oauthService.initLoginFlow();
      return false
    }

    return true;*/
  }
}
