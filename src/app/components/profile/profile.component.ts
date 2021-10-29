import { Component, OnInit } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {JWTTokenService} from "../../services/JWTTokenService";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {UserDetails} from "../../models/Details/UserDetails";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [JWTTokenService, UserService]
})
export class ProfileComponent implements OnInit {
  data : UserDetails | undefined;
  private userId : string | null = "";
  public errorMessage: string | undefined;
  displayedColumns: string[] = ['name', 'publisher', 'authors', "buttom"];

  constructor(
    public oauthService: OAuthService,
    public jwtTokenService: JWTTokenService,
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) { }

  ngOnInit(): void {
    this.userId = this.jwtTokenService.getId()
    this.service.getByAuthId(this.userId).subscribe(result => this.data = result)
    console.log(this.data);
    console.log(this.userId);
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
