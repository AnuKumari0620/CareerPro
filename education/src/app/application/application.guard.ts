import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, UrlTree } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


import { AuthService } from "./application.service";


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean | Observable<boolean> | UrlTree | Promise<boolean>  {
      const isAuth = this.authService.getIsAuth();
      if (!isAuth) {
        this.router.navigate(['/'], { queryParams: { returnUrl: state.url }
      });
      }
      return isAuth;
  }

}
