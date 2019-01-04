import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../model/github-client.model';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) { }

  authenticate(token: string): Observable<User> {
    return this.httpClient.get<User>(`${environment.base_path}/user?access_token=${token}`).pipe(map(resp => {
      this.tokenService.setToken(token);
      return resp as User;
    }));
  }

}
