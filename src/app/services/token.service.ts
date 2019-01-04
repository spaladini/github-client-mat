import { Injectable } from '@angular/core';

const TOKEN_NAME = 'gh-token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setToken(token: string) {
    localStorage.setItem(TOKEN_NAME, token);
  }

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }
}
