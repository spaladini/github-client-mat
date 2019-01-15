import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as auth0 from 'auth0-js';
import { of, Subscription, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { Auth0TokensService } from './auth0-tokens.service';

@Injectable({
  providedIn: 'root'
})
export class Auth0Service {

  auth0 = new auth0.WebAuth({
    clientID: 'ui-8dDr_I_Wa7qV_noM-hNz92MbjE8El',
    domain: 'multidata.eu.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:4200/callback',
    logoutUri: 'http://localhost:4200/auth0-login',
    scope: 'openid profile email'
  });

  refreshSubscription: Subscription;

  constructor(
    public router: Router,
    public jwtHelper: JwtHelperService,
    public auth0TokensService: Auth0TokensService
  ) {
  }

  get accessToken(): string {
    return this.auth0TokensService.getAccessToken();
  }

  get idToken(): string {
    return this.auth0TokensService.getIdToken();
  }

  public authenticate(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      console.log(authResult);
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.localLogin(authResult);
        this.router.navigate(['/auth0-landing']);
      } else if (err) {
        this.router.navigate(['/auth0-landing']);
        console.log(err);
      }
    });
  }

  private localLogin(authResult): void {
    // Set isLoggedIn flag in localStorage
    // localStorage.setItem('isLoggedIn', 'true');
    // Set the time that the access token will expire at
    // const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
    this.auth0TokensService.setIdToken(authResult.idToken);
    this.auth0TokensService.setAccessToken(authResult.accessToken);
    // this.auth0TokensService.setExpiresAt(expiresAt);

    this.scheduleRenewal();
  }

  public renewTokens(): void {
    console.log('==> renew token');
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.localLogin(authResult);
      } else if (err) {
        console.error(err);
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`);
        this.logout();
      }
    });
  }

  public logout(): void {
    this.auth0.logout();

    // Remove tokens and expiry time
    this.auth0TokensService.reset();
    // Remove isLoggedIn flag from localStorage
    // localStorage.removeItem('isLoggedIn');
    this.unscheduleRenewal();
    // Go back to the home route
    this.router.navigate(['/auth0-login']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    return this.auth0TokensService.getIdToken() && !this.jwtHelper.isTokenExpired();
  }

  public getUserRoles() {
    const idToken = this.auth0TokensService.getIdToken();
    return this.jwtHelper.decodeToken(idToken)['https://auth0.fakenamespase.multidata.it/roles'];
  }

  public scheduleRenewal() {
    if (!this.isAuthenticated()) { return; }
    this.unscheduleRenewal();

    const expiresAt = this.jwtHelper.getTokenExpirationDate().getTime();

    const expiresIn$ = of(expiresAt).pipe(
      mergeMap(
        exp => {
          const now = Date.now();
          // Use timer to track delay until expiration
          // to run the refresh at the proper time
          return timer(Math.max(5000, exp - now));
        }
      )
    );

    // Once the delay time from above is
    // reached, get a new JWT and schedule
    // additional refreshes
    this.refreshSubscription = expiresIn$.subscribe(
      () => {
        this.renewTokens();
        // this.scheduleRenewal();
      }
    );
  }

  public unscheduleRenewal() {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

}


