import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth0TokenService {

  constructor() { }

  setIdToken(idToken: string) {
    localStorage.setItem('id_token', idToken);
  }

  setAccessToken(accessToken: string) {
    localStorage.setItem('access_token', accessToken);
  }

  getIdToken() {
    return localStorage.getItem('id_token');
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  clear() {
    localStorage.clear();
  }

}
