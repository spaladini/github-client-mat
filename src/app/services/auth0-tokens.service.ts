import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth0TokensService {

  constructor() { }

  setIdToken(idToken: string) {
    localStorage.setItem('id_token', idToken);
  }

  setAccessToken(accessToken: string) {
    localStorage.setItem('access_token', accessToken);
  }

  setExpiresAt(expiresAt: number) {
    localStorage.setItem('expires_at', JSON.stringify(expiresAt));
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  getIdToken() {
    return localStorage.getItem('id_token');
  }

  getExpiresAt() {
    return JSON.parse(localStorage.getItem('expires_at'));
  }

  reset() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
  }

}
