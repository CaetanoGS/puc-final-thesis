import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlSegmentGroup, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private loginService: LoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {    
    return this.loginService.isAuthenticated();
  }
}