import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {JWTTokenService} from "../../services/JWTTokenService";

@Injectable()
export class AdminGuard implements CanActivate{

  constructor(public jwtTokenService: JWTTokenService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
    if (this.jwtTokenService.getRole() == "Admin") {
      console.log(this.jwtTokenService.getRole());
      return true;
    }

    this.router.navigate(['']);
    return false;
  }
}
