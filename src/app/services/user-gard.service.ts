import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserGardService implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = !!this.tokenService.getToken();
    if (!token) {
      this.router.navigate(['/login']);
    }
    return token;
  }
}
