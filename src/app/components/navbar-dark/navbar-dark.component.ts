import { Component, OnInit } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";

@Component({
  selector: 'app-navbar-dark',
  templateUrl: './navbar-dark.component.html',
  styleUrls: ['./navbar-dark.component.css']
})
export class NavbarDarkComponent {
  isExpanded = false;

  constructor(private oauthService: OAuthService) {  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  public login() {
    this.oauthService.initLoginFlow();
  }

  public logoff() {
    this.oauthService.logOut();
  }
}
