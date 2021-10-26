import { Component, OnInit } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {JWTTokenService} from "../../services/JWTTokenService";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [JWTTokenService]
})
export class ProfileComponent implements OnInit {
  constructor(
    public oauthService: OAuthService,
    public jwtTokenService: JWTTokenService
  ) { }

  ngOnInit(): void {
  }

  isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  public login() {
    this.oauthService.initLoginFlow();
  }

  public logout() {
    this.oauthService.logOut();
  }
}
