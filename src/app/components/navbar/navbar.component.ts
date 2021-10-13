import { Component } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  isExpanded = false;

  constructor(private oauthService: OAuthService) {  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public login() {
    this.oauthService.initLoginFlow();
  }

  public logoff() {
    this.oauthService.logOut();
  }

  /*public get name() {
    var claims = this.oauthService.getIdentityClaims();
    let claimss = this.oauthService.
    if (!claims) return null;
    return claims.;
  }*/
}
