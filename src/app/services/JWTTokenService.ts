import { Injectable } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()
export class JWTTokenService {
  decodedToken: { [key: string]: string; } | undefined;
  tokenPayload : string | undefined;
  constructor(public authService: OAuthService,
              private jwtHelper :JwtHelperService)
  { }

  public DecodeToken() {
    return this.jwtHelper.decodeToken(this.authService.getAccessToken());
  }

  public DecodeTokenVoid() : void {
    this.decodedToken = this.jwtHelper.decodeToken(this.authService.getAccessToken());
  }

  public getTokenExpirationDate()
  {
    return this.jwtHelper.getTokenExpirationDate(this.authService.getAccessToken());
  }

  public isTokenExpired()
  {
    return this.jwtHelper.isTokenExpired(this.authService.getAccessToken());
  }

  public getName()
  {
    return this.jwtHelper.decodeToken(this.authService.getAccessToken()).name;
  }

  public getNickName(){
    return this.jwtHelper.decodeToken(this.authService.getAccessToken()).preferred_username;
  }

  public getRole()
  {
    return this.jwtHelper.decodeToken(this.authService.getAccessToken()).role;
  }

  public getEmail()
  {
    return this.jwtHelper.decodeToken(this.authService.getAccessToken()).email;
  }

  public getProfile()
  {
    return this.jwtHelper.decodeToken(this.authService.getAccessToken()).profile;
  }

  public getId()
  {
    return this.jwtHelper.decodeToken(this.authService.getAccessToken()).sub;
  }
}
