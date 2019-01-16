import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as auth0 from 'auth0-js';
import { Auth0TokenService } from './auth0-token.service';

@Injectable({
  providedIn: 'root'
})
export class Auth0Service {

  /*
  private _idToken: string;
  private _accessToken: string;
  private _expiresAt: number;
  */

  auth0 = new auth0.WebAuth({
    clientID: 'ui-8dDr_I_Wa7qV_noM-hNz92MbjE8El',
    domain: 'multidata.eu.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile email'
  });

  constructor(
    private router: Router,
    private auth0TokenService: Auth0TokenService,
    private jwtHelperService: JwtHelperService
  ) { }

  get accessToken(): string {
    return this.auth0TokenService.getAccessToken();
  }

  get idToken(): string {
    return this.auth0TokenService.getIdToken();
  }

  public authenticate(): void {
    this.auth0.authorize();
  }

  public isAdmin(): boolean {
    const decoded = this.jwtHelperService.decodeToken();
    const roles = decoded['https://auth0.fakenamespase.multidata.it/roles'] as Array<string>;
    if (roles && roles.includes('ADMIN')) {
      return true;
    }
    return false;
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      console.log(authResult);
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.localLogin(authResult);
        this.router.navigate(['/auth0-home']);
      } else if (err) {
        this.router.navigate(['/auth0-login']);
        console.log(err);
      }
    });
  }

  private localLogin(authResult): void {
    /*
    this._accessToken = authResult.accessToken;
    this._idToken = authResult.idToken;
    this._expiresAt = expiresAt;
    */
    this.auth0TokenService.setAccessToken(authResult.accessToken);
    this.auth0TokenService.setIdToken(authResult.idToken);
  }

  public logout(): void {
    // Remove tokens and expiry time
    this.auth0TokenService.clear();

    this.auth0.logout();

    // Go back to the home route
    // this.router.navigate(['/auth0-login']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const idToken = this.auth0TokenService.getIdToken();
    if (!idToken) {
      return false;
    }
    const isTokenExpired = this.jwtHelperService.isTokenExpired();
    return !!idToken && !isTokenExpired;
  }

}
