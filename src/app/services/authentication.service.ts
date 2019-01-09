import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../model/github.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService,
    private router: Router
  ) { }

  authenticate(token: string): Observable<User> {
    return this.httpClient.get<User>(`${environment.backend_url}/user?access_token=${token}`)
      .pipe(map(resp => {
        this.tokenService.setToken(token);
        return resp;
      }));
  }

  getUserInfo(): Observable<User> {
    return this.httpClient.get<User>(`${environment.backend_url}/user?access_token=${this.tokenService.getToken()}`);
  }

  logout() {
    this.tokenService.removeToken();
    this.router.navigateByUrl('/login');
  }

}
