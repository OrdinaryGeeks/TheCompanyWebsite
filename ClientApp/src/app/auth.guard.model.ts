import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { of } from "rxjs/internal/observable/of";
import { map } from "rxjs/operators";
import { AuthService } from "./auth.service";


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isSignedIn();
  }

  isSignedIn(): Observable<boolean> {

    if (!this.auth.isAuthenticated) {
      this.router.navigate(['signin']);
      return of(false);
    }
    else
      return of(true);
      
  }
}
