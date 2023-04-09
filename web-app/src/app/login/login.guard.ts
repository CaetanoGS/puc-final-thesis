import { Injectable } from "@angular/core";
import { LoginService } from "./login.service";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
class LoginGuard implements CanActivate {
  constructor(private loginService: LoginService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.permissions.canActivate(this.currentUser, route.params.id);
  }
}